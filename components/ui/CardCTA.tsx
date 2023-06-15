import Button from "./Button.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Slider from "./Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "./Icon.tsx";
import { useId } from "preact/hooks";
import Container from "./Container.tsx";

export interface CardCTAProps {
  /** @title Cards */
  addNewCard: Props[];
}

export interface Props {
  Image: imageProps;

  /**
   * @description Titulo que ficará centralizado no card
   */
  CardTitle?: string;

  /**
   * @description Nome do botão
   */
  ButtonName: string;

  /**
   * @description Defina a url de destino do click no botão
   */
  ButtonUrl?: string;

  /**
   * @description Selecione uma variação para o botão
   */
  ButtonVariant: "icon" | "primary" | "secondary" | "tertiary";
}

export interface imageProps {
  /** @description Upload da imagem da imagem desktop */
  src?: LiveImage;

  /**
   * @description Largura da imagem
   */

  /**
   * @description Altura da imagem
   */
  height?: number;

  /**
    /**
     * @description SEO Image alt text
     */
  altText?: string;
  /**
   * @description SEO title
   */
  title?: string;
  /**
   * @description Preload de imagem - otimiza a métrica LCP
   */
  preload?: boolean;
}

// dadada

function CardCTA({ addNewCard }: CardCTAProps) {
  const id = useId();
  return (
    <div class="py-[30px] lg:px-0">
      <div class="px-[20px] lg:px-[50px] 15xl:px-0 max-w-[1660px] mx-auto">
        <h2 class="font-bold text-[24px] lg:text-[32px] cursor-default">
          Compre por Categoria
        </h2>
      </div>
      <Container
        id={id}
        class="lg:max-w-none grid grid-cols-[48px_1fr_48px] grid-rows-[64px_1fr_48px_1fr] px-0 relative"
      >
        <Slider
          class="col-span-full row-span-full gap-5 overflow-y-hidden scrollbar-none px-5 py-6 lg:(snap-mandatory-none px-0)"
          snap="snap-center sm:snap-start block last:mr-6 sm:last:mr-0"
        >
          {addNewCard?.map((card, index) => {
            return (
              <div
                class={`relative w-[70vw] sm:w-[30vw] lg:w-[21.8vw] 15xl:w-[20.5vw] group 
                ${index === 0 ? "lg:ml-[50px] 15xl:ml-[125px]" : ""} 
                ${
                  index === addNewCard.length - 1
                    ? "lg:mr-[50px] 15xl:mr-[125px]"
                    : ""
                }`}
              >
                <a
                  class="block group-hover:scale-105 overflow-hidden"
                  href={card.ButtonUrl}
                >
                  <Picture class="w-full" preload={card.Image.preload}>
                    <Source
                      media="(max-width: 767px)"
                      fetchPriority={card.Image.preload ? "high" : "low"}
                      src={card?.Image?.src || "/"}
                      width={200}
                      height={300}
                    />
                    <Source
                      media="(min-width: 768px)"
                      fetchPriority={card.Image.preload ? "high" : "low"}
                      src={card?.Image?.src || "/"}
                      width={300}
                      height={460}
                    />
                    <img
                      class="object-cover w-full sm:h-full"
                      loading={card.Image.preload ? "eager" : "lazy"}
                      src={card?.Image?.src}
                      alt={card.Image.altText}
                      title={card.Image.title}
                    />
                  </Picture>
                  <div class="absolute flex flex-col justify-center items-center gap-2 lg:gap-4 top-[45%] w-full">
                    <h3 class="font-bold text-3xl text-white">
                      {card.CardTitle}
                    </h3>
                    <span class="md:(opacity-0 translate-y-10 transition-all duration-[350ms] group-hover:(opacity-100 -translate-y-0))">
                      <p class="underline text-[14px] font-bold text-white lg:(top-[40px]) lg:(relative top-0 group-hover:flex p-[10px] w-[150px] rounded-[50px] justify-center items-center border-0 no-underline font-bold bg-primary text-center text-white text-[12px] transition-all duration-300 hover:scale-110 outline-none focus:outline-none)">
                        {card.ButtonName}
                      </p>
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </Slider>
        {addNewCard?.length >= 1
          ? (
            <div class="hidden lg:block absolute top-[calc(50%-24px)] w-full px-12">
              <div class="hidden sm:block z-10 col-start-1 row-start-3">
                <div class="absolute left-0  bg-interactive-inverse rounded-full border-default border-0 shadow-arrow transition-all lg:left-[50px] 15xl:left-[100px]">
                  <Button
                    variant="icon"
                    data-slide="prev"
                    aria-label="Previous item"
                    class="w-[48px] h-[48px]"
                  >
                    <Icon
                      size={22}
                      id="ChevronLeft"
                      class="text-[#4d5559]"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <div class="hidden sm:block z-10 col-start-3 row-start-3">
                <div class="absolute right-0 bg-interactive-inverse rounded-full border-default border-0 shadow-arrow transition-all lg:right-[50px] 15xl:right-[100px]">
                  <Button
                    variant="icon"
                    data-slide="next"
                    aria-label="Next item"
                    class="w-[48px] h-[48px]"
                  >
                    <Icon
                      size={22}
                      id="ChevronRight"
                      class="text-[#4d5559]"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
            </div>
          )
          : null}
        <SliderJS rootId={id} />
      </Container>
    </div>
  );
}

export default CardCTA;
