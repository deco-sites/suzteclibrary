import type { Image as LiveImage } from "$store/components/types.ts";

export interface TextWithImage {
  title?: string;
  subtitle?: string;
  subtitleImg?: ImageProps;
  paddingTopMobile?: string;
  paddingTopDesktop?: string;
}

export interface ImageProps {
  src?: LiveImage;
  /**
   * @description descreva oque sua imagem está exibindo.
   */
  alt?: string;
}

export default function AsasParaVoarTextWithImage(props: TextWithImage) {
  return (
    <div
      class={`w-full flex flex-col justify-center items-center pt-[${
        props.paddingTopMobile || "0px"
      }] lg:pt-[${props.paddingTopDesktop || "0px"}] pb-[50px] lg:pb-[100px]`}
    >
      <h1 class="w-[90%] text-center text-[28px] pb-[40px] lg:text-[60px] text-[#0033A0] font-bold font-Roboto-ligth leading-[1.2]">
        {props.title}
      </h1>
      <h2
        class={`w-[69%] text-[19px] leading-[28.5px] inline-block mx-auto font-Roboto-ligth font-light text-left not-italic lg:(w-[590px] text-[40px] max-w-[1280px] leading-[60px] relative)`}
      >
        {props.subtitle}
        <div class="absolute text-center inline-flex pl-[14px] lg:w-full">
          <img
            class={`w-[85px] h-[24px] lg:(w-[170px] h-[47px]) object-contain`}
            width={100}
            height={100}
            loading="lazy"
            decoding="async"
            src={props?.subtitleImg?.src || ""}
            alt={props?.subtitleImg?.alt}
          />
        </div>
      </h2>
    </div>
  );
}
