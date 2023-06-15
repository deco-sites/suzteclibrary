import type { HTML } from "deco-sites/std/components/types.ts";
import Quilltext from "deco-sites/std/components/QuillText.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Video from "deco-sites/std/components/Video.tsx";

import Icon from "./Icon.tsx";
import Button from "./Button.tsx";

import Slider from "./Slider.tsx";
import SliderJS from "./SliderJS.tsx";

import { useId } from "preact/hooks";

export interface VideoProps {
  videoPlatform: "Vimeo" | "Youtube";
  /** @description o código do vídeo que fica no final da url ex: 539309773 */
  videoUrlCodeMobile: string;
  /** @description o código do vídeo que fica no final da url ex: 539309773 */
  videoUrlCodeDesktop: string;
  /** @description O título do seu vídeo */
  title: string;
}

export interface ImageProps {
  /** @description Seu banner Mobile */
  imageMobile: LiveImage;
  /** @description Seu banner Desktop */
  imageDesktop: LiveImage;
  /** @description Texto Alternativo */
  altImage: string;
  /** @description Link para imagem */
  link?: string;
}

export type Item = ImageProps | VideoProps;

export interface Creative {
  creative: Item;
  label?: string;
  /** @description Textos e Botões */
  content?: Content;
  /** @description Margem interna */
  padding?: Padding;
}

export interface Carousel {
  autoplay?: boolean;
  /** @description Intervalo de tempo para o Carrossel */
  interval?: number;
}

export interface Button {
  /** @description Texto do botão */
  text?: string;
  /** @description Link do botão */
  href?: string;
  /** @description Cor do botão */
  color: "blue" | "black" | "white" | "transparent" | "link";
}

export interface Title {
  text: HTML;
  font: "lusitana" | "nunito-sans" | "Roboto-ligth" | "Palatino";
}

export interface Content {
  /** @description Dentro ou fora da imagem? */
  where?: "Dentro" | "Fora";
  /** @description Textos */
  title?: Title[];
  /** @description Alinhamento dos botões */
  align?: "center" | "left" | "right";
  /** @description Alinhamento vertical */
  verticalAlign?: "center" | "top" | "bottom";
  /** @description Botões */
  buttons?: Button[];
}

export interface Padding {
  /** @description Margem interna esquerda */
  paddingLeft?: number;
  /** @description Margem interna direita */
  paddingRight?: number;
  /** @description Margem interna cima */
  paddingTop?: number;
  /** @description Margem interna baixo */
  paddingBottom?: number;
}

export interface Column {
  /** @description Suas imagens e vídeos */
  creativeCarousel: Creative[];
  /** @description Carrossel automático */
  carouselOptions?: Carousel;
}

export interface Props {
  /** @description Colunas */
  columns: Column[];
  /** @description Largura máxima total */
  maxWidth?: number;
  /** @description Largura máxima de cada coluna */
  maxColumnWidth?: number;
  /** @description Distância entre colunas */
  gap?: number;
  /** @description Tela cheia */
  fullScreen: boolean;
}

const isImage = (item: Item): item is ImageProps =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.altImage === "string";

export default function Container(
  { columns, maxWidth, maxColumnWidth, gap, fullScreen }: Props,
) {
  return (
    <div
      class={`sm:max-w-${
        maxWidth ? "[" + maxWidth + "px]" : "none"
      } mx-auto flex flex-wrap justify-center gap-[${gap}px]`}
    >
      {(columns ?? []).map((column) => {
        return (
          <div class={`${maxColumnWidth ? maxColumnWidth + "px" : ""} `}>
            <BannerAviator
              column={column}
              maxColumnWidth={maxColumnWidth}
              maxWidth={maxWidth}
              fullScreen={fullScreen}
            />
          </div>
        );
      })}
    </div>
  );
}

function BannerAviator(
  { column, maxColumnWidth, maxWidth, fullScreen }: {
    column: Column;
    maxColumnWidth: number | undefined;
    maxWidth: number | undefined;
    fullScreen: boolean;
  },
) {
  const { creativeCarousel, carouselOptions } = column;
  const id = useId();
  return (
    <div class={`relative`}>
      <div
        id={id}
        class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_48px]"
      >
        <Slider class="col-span-full row-span-full scrollbar-none gap-6">
          {creativeCarousel?.map((creative, index) => {
            const { content, padding } = creative;
            if (isImage(creative.creative)) {
              return (
                <div
                  class={`relative ${
                    maxColumnWidth
                      ? "sm:max-w-[" + maxColumnWidth + "px] sm:min-w-[0px]"
                      : "sm:min-w-[" + maxWidth + "px]"
                  } 
                                ${
                    fullScreen ? " min-w-[100vw]" : "max-w-[calc(100vw-40px)]"
                  }`}
                >
                  <a href={creative.creative.link}>
                    <Image creative={creative.creative} />
                  </a>
                  <Content padding={padding} content={content} />
                </div>
              );
            } else {
              return (
                <div>
                  <VideoComponent creative={creative.creative} />
                </div>
              );
            }
          })}
        </Slider>

        {creativeCarousel.length > 1 && <Controls />}

        {creativeCarousel.length > 1 && (
          <Dots
            creativeCarousel={creativeCarousel}
            interval={carouselOptions?.interval}
          />
        )}

        <SliderJS
          rootId={id}
          interval={carouselOptions?.interval && carouselOptions.interval * 1e3}
        />
      </div>
    </div>
  );
}

function Content(
  { padding, content }: {
    padding: Padding | undefined;
    content: Content | undefined;
  },
) {
  const align = content?.align == "center"
    ? "justify-center"
    : content?.align == "left"
    ? "justify-start"
    : "justify-end";
  const verticalAlign = content?.verticalAlign == "center"
    ? "justify-center"
    : content?.verticalAlign == "top"
    ? "justify-start"
    : "justify-end";

  return (
    <div
      class={`w-full h-full ${
        content?.where == "Dentro" ? "absolute top-0" : ""
      } flex flex-col ${verticalAlign} 
            pl-[${padding?.paddingLeft}px]
            pr-[${padding?.paddingRight}px]
            pt-[${padding?.paddingTop}px]
            pb-[${padding?.paddingBottom}px]`}
    >
      <div class="w-full">
        {content?.title?.map((title) => {
          return (
            <div class={`font-${title.font}`}>
              <Quilltext html={title.text} />
            </div>
          );
        })}
      </div>
      {(content?.buttons?.length) != 0 && (
        <div class={`w-full flex gap-5 py-2.5 ${align}`}>
          {content?.buttons?.map((button) => {
            const color = button.color;
            return (
              <Button
                variant={color}
                as="a"
                href={button.href}
                class="flex items-center text-center"
              >
                {button.text}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Image({ creative }: Creative) {
  return (
    <>
      <Picture class="w-full" preload={true}>
        <Source
          media="(max-width: 1024px)"
          fetchPriority={"high"}
          src={(creative as ImageProps).imageMobile}
          width={360}
        />
        <Source
          media="(min-width: 1025px)"
          fetchPriority={"high"}
          src={(creative as ImageProps).imageDesktop}
          width={1440}
        />
        <img
          class="object-cover w-full sm:h-full"
          loading={"eager"}
          src={(creative as ImageProps).imageDesktop}
          alt={(creative as ImageProps).altImage}
        />
      </Picture>
    </>
  );
}

function VideoComponent({ creative }: Creative) {
  return (
    <>
      <div class="block lg:hidden">
        <Video
          src={(creative as VideoProps).videoUrlCodeMobile}
          width={150}
          height={150}
          class="w-full h-auto"
          loop
          muted
          autoPlay
          playsInline
          loading={"eager"}
        >
        </Video>
      </div>
      <div class="hidden lg:block">
        <Video
          src={(creative as VideoProps).videoUrlCodeDesktop}
          width={150}
          height={150}
          class="w-full h-auto"
          loop
          muted
          autoPlay
          playsInline
          loading={"eager"}
        >
        </Video>
      </div>
    </>
  );
}

function Controls() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Button
          class="h-12 w-12"
          variant="icon"
          data-slide="prev"
          aria-label="Previous item"
        >
          <Icon
            class="text-default-inverse"
            size={20}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Button>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Button
          class="h-12 w-12"
          variant="icon"
          data-slide="next"
          aria-label="Next item"
        >
          <Icon
            class="text-default-inverse"
            size={20}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Button>
      </div>
    </>
  );
}

function Dots(
  { creativeCarousel, interval = 0 }: {
    creativeCarousel: Creative[];
    interval: number | undefined;
  },
) {
  return (
    <>
      <ol class="flex items-center justify-center col-span-full gap-4 z-10 row-start-4">
        {creativeCarousel?.map((_, index) => (
          <li class="h-full">
            <button
              data-dot={index}
              aria-label={`go to slider item ${index}`}
              class="h-full rounded outline-none focus:outline-none group"
            >
              <div
                class=""
                style={{
                  background:
                    "linear-gradient(to right, black var(--dot-progress), rgba(255, 255, 255, 0.4) var(--dot-progress))",
                }}
              />
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}
