import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Props {
  /**
   * @description Configurações do banner principal
   */
  MainBanner: imageProps;
}

export interface imageProps {
  /** @description Upload da imagem da imagem desktop */
  desktop?: LiveImage;
  /** @description Upload da imagem da imagem mobile */
  mobile?: LiveImage;

  /**
   * @description Largura da imagem
   */
  //   width?: number;

  /**
   * @description Altura da imagem no desktop
   */
  height?: number;

  /**
   * @description Altura da imagem no mobile
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

function BannerInstitucional(
  {
    MainBanner,
  }: Props,
) {
  return (
    <>
      <div class="relative w-full h-[90%] flex flex-col justify-center items-center md:mt-[99px]">
        <Picture class="w-full" preload={MainBanner?.preload}>
          <Source
            media="(max-width: 767px)"
            fetchPriority={MainBanner?.preload ? "high" : "low"}
            src={MainBanner?.mobile || "/"}
            width={360}
            height={MainBanner?.heightMobile || 600}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority={MainBanner?.preload ? "high" : "low"}
            src={MainBanner?.desktop || "/"}
            width={1440}
            height={MainBanner?.height || 600}
          />
          <img
            class="object-cover w-full"
            loading={MainBanner?.preload ? "eager" : "lazy"}
            src={MainBanner?.desktop}
            alt={MainBanner?.altText}
          />
        </Picture>
      </div>
    </>
  );
}

export default BannerInstitucional;
