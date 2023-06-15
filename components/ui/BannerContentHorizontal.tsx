import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "$store/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Button from "./Button.tsx";

export interface Props {
  title?: string;
  description?: string;
  descriptionFontSizeMobile?: number;
  descriptionFontSizeDesktop?: number;
  descriptionTextColor?: string;
  descriptionClass?: string;
  ImageBlock: ImageProps;
  textPosition: "Left" | "Right";
  enableButton: boolean;
  buttonName?: string;
  buttonUrl: string;
  backgroundColor?: string;
}

export interface ImageProps {
  srcMobile?: LiveImage;
  srcDesktop?: LiveImage;
  /**
   * @description descreva oque sua imagem está exibindo
   */
  alt?: string;
  imagePosition: "Right" | "Center" | "Left";
  spectRatio: "Default" | "full screen" | "Compacted" | "Thumb";
  /**@description distancia do topo no desktop, use qualquer unidade de medida valida em CSS*/
  paddingTopDesktop?: string;
  /**@description distancia do topo no mobile, use qualquer unidade de medida valida em CSS*/
  paddingTopMobile?: string;
  isLcp?: boolean;
}

export default function BannerContentHorizontal(props: Props) {
  return (
    <div
      class={`flex flex-col-reverse lg:${
        props.textPosition === "Left" ? "flex-row" : "flex-row-reverse"
      } bg-[${props?.backgroundColor ?? "#fff"}]`}
    >
      <div
        id="content-block"
        class="flex flex-col text-center py-[35px] lg:(py-0 w-[50%]) justify-center items-center font-nunito-sans"
      >
        {props.title
          ? (
            <h3 class="text-[#252526] text-[30px] lg:text-[35px] font-bold pb-[21px] tracking-[3px] pb-[21px] lg:pb-[22px] leading-normal">
              {props.title}
            </h3>
          )
          : null}
        {props.description
          ? (
            <p
              class={`text-[${
                props.descriptionFontSizeMobile || 15
              }px] font-light text-[${
                props.descriptionTextColor ?? "#7b7c80"
              }] leading-[30px] tracking-[0.55px] px-[32px] pb-[38px] lg:(text-[${
                props.descriptionFontSizeDesktop || 17
              }px] px-[0] mx-auto max-w-[500px]) ${props.descriptionClass} sm:max-w-[350px] lg:leading-[34px] `}
            >
              {props.description}
            </p>
          )
          : null}

        {props.enableButton
          ? (
            <a
              href={props?.buttonUrl === undefined ? "#" : props.buttonUrl}
              rel="noopener"
            >
              <Button
                variant="assista"
                as="button"
                type="button"
              >
                {props.buttonName || "Assista"}
              </Button>
            </a>
          )
          : null}
      </div>

      {props?.ImageBlock?.srcMobile != undefined ||
          props?.ImageBlock?.srcDesktop != undefined
        ? (
          <Picture
            class={`w-full lg:w-1/2 flex ${
              props?.ImageBlock?.imagePosition === "Center"
                ? "items-center justify-center"
                : props?.ImageBlock?.imagePosition === "Left"
                ? "items-start justify-start"
                : "items-end justify-end"
            }`}
            preload={props.ImageBlock.isLcp ? true : false}
          >
            <Source
              fetchPriority={props.ImageBlock.isLcp ? "high" : "low"}
              media="(max-width: 767px)"
              src={props?.ImageBlock?.srcMobile
                ? props?.ImageBlock?.srcMobile
                : props?.ImageBlock?.srcDesktop || ""}
              width={207}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={props.ImageBlock.isLcp ? "high" : "low"}
              src={props?.ImageBlock?.srcDesktop
                ? props?.ImageBlock?.srcDesktop
                : props.ImageBlock.srcMobile || ""}
              width={1080}
              // height={580}
            />
            <Image
              class={`w-full`}
              width={100}
              height={100}
              loading={props.ImageBlock.isLcp ? "eager" : "lazy"}
              decoding={props.ImageBlock.isLcp ? "sync" : "async"}
              src={props.ImageBlock.srcMobile || ""}
              alt={props.ImageBlock.alt}
              title={props.ImageBlock.alt}
            />
          </Picture>
        )
        : null}
    </div>
  );
}
