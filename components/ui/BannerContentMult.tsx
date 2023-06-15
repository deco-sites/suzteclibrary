import type { Image as LiveImage } from "$store/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  ImageBlock: ImageProps;
  contentDescription1?: string;
  contentDescription2?: string;
  backgroundColor?: string;
}

export interface ImageProps {
  srcMobileBanner1?: LiveImage;
  srcMobileBanner2?: LiveImage;
  srcDesktopFullBanner?: LiveImage;
  /**
   * @description descreva oque sua imagem está exibindo
   */
  alt?: string;
  spectRatio: "Default" | "full screen" | "Compacted" | "Thumb";
  /**@description distancia do topo no desktop, use qualquer unidade de medida valida em CSS*/
  paddingTopDesktop?: string;
  /**@description distancia do topo no mobile, use qualquer unidade de medida valida em CSS*/
  paddingTopMobile?: string;
  isLcp?: boolean;
}

export default function BannerContentMult(props: Props) {
  return (
    <div
      class={`flex flex-col bg-${
        props?.backgroundColor || "#fff"
      } font-Roboto-ligth font-body`}
    >
      <div class={`w-full flex flex-col`}>
        <Image
          class={`w-full hidden lg:block`}
          width={1000}
          height={390}
          loading={props?.ImageBlock?.isLcp ? "eager" : "lazy"}
          decoding={props?.ImageBlock?.isLcp ? "sync" : "async"}
          preload={props?.ImageBlock?.isLcp ? true : false}
          fetchPriority={props?.ImageBlock?.isLcp ? "high" : "low"}
          src={props?.ImageBlock?.srcDesktopFullBanner || ""}
          alt={props?.ImageBlock?.alt}
        />
        <div
          id="content-block1-mobile"
          class="flex flex-col text-center lg:(pb-0 pt-0) justify-center items-center"
        >
          <Image
            class={`w-full lg:hidden`}
            width={207}
            height={157}
            loading={props?.ImageBlock?.isLcp ? "eager" : "lazy"}
            decoding={props?.ImageBlock?.isLcp ? "sync" : "async"}
            preload={props?.ImageBlock?.isLcp ? true : false}
            fetchPriority={props?.ImageBlock?.isLcp ? "high" : "low"}
            src={props?.ImageBlock?.srcMobileBanner1 || ""}
            alt={props?.ImageBlock?.alt}
          />
          <p class="text-[14px] font-light py-[20px] px-[30px] lg:(text-[20px] max-w-[50%] hidden pb-0)">
            {props?.contentDescription1}
          </p>
        </div>
        <div
          id="content-block2-mobile"
          class="flex flex-col text-center lg:(pb-0 pt-0) justify-center items-center"
        >
          <Image
            class={`w-full lg:hidden`}
            width={207}
            height={157}
            loading={props?.ImageBlock?.isLcp ? "eager" : "lazy"}
            decoding={props?.ImageBlock?.isLcp ? "sync" : "async"}
            preload={props?.ImageBlock?.isLcp ? true : false}
            fetchPriority={props?.ImageBlock?.isLcp ? "high" : "low"}
            src={props?.ImageBlock?.srcMobileBanner2 || ""}
            alt={props?.ImageBlock?.alt}
          />
          <p class="text-[14px] font-light px-[30px] py-[20px] lg:(px-0 max-w-[50%] pb-0 hidden)">
            {props.contentDescription2}
          </p>
        </div>
      </div>
      <div
        id="content-block"
        class="hidden lg:(pb-[63px] flex flex-row justify-center items-center text-center pt-[20px])"
      >
        <p class="text-[14px] font-light px-[46px] pb-[37px] lg:(text-[20px] px-[68px] max-w-[50%])">
          {props.contentDescription1}
        </p>
        <p class="text-[14px] font-light px-[46px] pb-[37px] lg:(text-[20px] px-[68px] max-w-[50%])">
          {props.contentDescription2}
        </p>
      </div>
    </div>
  );
}
