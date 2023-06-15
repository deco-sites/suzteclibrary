import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Button from "$store/components/ui/Button.tsx";
import Markdown from "$store/components/ui/Markdown.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface HeroBannerProps {
  /**
   * @description Configurações do banner principal
   */
  MainBanner: imageProps;
  /**
   * @description Titulo principal do banner em texto
   */
  BannerTitle?: HTML;

  BannerSubTitle?: HTML;

  /**
   * @description Selecione uma fonte para o Title
   */
  TitleFont: "Nunito" | "Lusitana";

  /**
   * @description Carregue uma imagem como um titulo que fica sobre-posto ao banner principal
   */
  ImageTitle?: imageProps;

  buttonCallToAction?: CTAProps;
}

export interface imageProps {
  /** @description Upload da imagem da imagem desktop */
  desktop?: LiveImage;
  /** @description Upload da imagem da imagem mobile */
  mobile?: LiveImage;

  /**
   * @description Largura da imagem no desktop
   */
  width?: number;

  /**
   * @description Altura da imagem no dekstop
   */
  height?: number;

  /**
   * @description Largura da imagem na versao mobile
   */
  widthMobile?: number;

  /**
   * @description Altura da imagem na versao mobile
   */
  heightMobile?: number;

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

export interface CTAProps {
  /**
   * @description Defina o nome do botão
   */
  ctaName: string;

  /**
   * @description Defina a url de destino do click no botão
   */
  ctaUrl: string;

  /**
   * @description Selecione uma variação para o botão
   */
  ctaVariant: "icon" | "primary" | "secondary" | "tertiary";
}

function HeroBanner(
  {
    MainBanner,
    BannerTitle,
    BannerSubTitle,
    TitleFont,
    ImageTitle,
    buttonCallToAction,
  }: HeroBannerProps,
) {
  function handleUrl() {
  }

  return (
    <>
      <div class="w-full flex flex-col justify-center items-center">
        <div class="w-full flex flex-col justify-center items-center gap-12 absolute">
          <div class="flex justify-center items-center">
            <div id="text-Wrapper" class="">
              {BannerTitle
                ? (
                  <h2
                    class={`text-heading-2 ${
                      TitleFont == "Lusitana"
                        ? "font-['Lusitana',sans-serif]"
                        : "font-['Nunito&ensp;Sans',sans-serif] font-bold"
                    }`}
                  >
                    <Markdown text={BannerTitle} />
                  </h2>
                )
                : null}
              {BannerSubTitle
                ? (
                  <h3
                    class={`text-heading-2 ${
                      TitleFont == "Lusitana"
                        ? "font-['Lusitana',sans-serif]"
                        : "font-['Nunito&ensp;Sans',sans-serif] font-bold"
                    }`}
                  >
                    <Markdown text={BannerSubTitle} />
                  </h3>
                )
                : null}
            </div>
            {ImageTitle
              ? (
                <Picture class="w-[50%]" preload={ImageTitle.preload}>
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority={ImageTitle.preload ? "high" : "low"}
                    src={ImageTitle.mobile || "/"}
                    width={ImageTitle.widthMobile || 360}
                    height={ImageTitle.heightMobile || 600}
                  />
                  <Source
                    media="(min-width: 768px)"
                    fetchPriority={ImageTitle.preload ? "high" : "low"}
                    src={ImageTitle.desktop || "/"}
                    width={ImageTitle.width || 1440}
                    height={ImageTitle.height || 300}
                  />
                  <img
                    class="object-contain w-full sm:h-full"
                    loading={ImageTitle.preload ? "eager" : "lazy"}
                    src={ImageTitle.desktop}
                    alt={ImageTitle.altText}
                  />
                </Picture>
              )
              : null}
          </div>
          <a href={buttonCallToAction?.ctaUrl}>
            <Button
              name={buttonCallToAction?.ctaName}
              variant={buttonCallToAction?.ctaVariant}
              onClick={() => handleUrl()}
            >
              {buttonCallToAction?.ctaName}
            </Button>
          </a>
        </div>

        <Picture class="w-full" preload={MainBanner?.preload}>
          <Source
            media="(max-width: 767px)"
            fetchPriority={MainBanner?.preload ? "high" : "low"}
            src={MainBanner?.mobile || "/"}
            width={360}
            height={600}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority={MainBanner?.preload ? "high" : "low"}
            src={MainBanner?.desktop || "/"}
            width={1440}
            height={600}
          />
          <img
            class="object-cover w-full sm:h-full"
            loading={MainBanner?.preload ? "eager" : "lazy"}
            src={MainBanner?.desktop}
            alt={MainBanner?.altText}
          />
        </Picture>
      </div>
    </>
  );
}

export default HeroBanner;
