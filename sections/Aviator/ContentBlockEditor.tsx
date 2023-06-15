import QuillText, {
    ContentBlock,
  } from "$store/components/ui/QuillText.tsx";
  import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
  import type { Image as LiveImage } from "$store/components/types.ts";
  import Image from "deco-sites/std/components/Image.tsx";
  
  export interface Props {
    ContentBlock: ContentBlock;
    /**@description altura do bloco de conteúdo, use qualquer unidade de medida valida em CSS*/
    ContentBlockHeight: "0" | "auto";
    /**@description use isto para centralizar seu conteúdo, use qualquer unidade de medida valida em CSS*/
    ContentBlockPaddingHorizontalDesktop?: string;
    ContentBlockPaddingHorizontalMobile?: string;
    ImageBlock?: ImageBlock;
    /**@description exemplo de uso #F3F3F3 ou red*/
    BlockBackgroundColor?: string;
    BlockPaddingTopDesktop?: string;
    BlockPaddingTopMobile?: string;
    BlockMarginBottom?: string;
  }
  
  export interface ImageBlock {
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
  
  export default function ContentBlockEditor(props: Props) {
    return (
      <div
        class={`bg-[${props?.BlockBackgroundColor ?? "#fff"}] lg:(mb-[${
          props?.BlockMarginBottom ?? "0"
        }])`}
      >
        <div
          class={`px-[${
            props.ContentBlockPaddingHorizontalMobile ?? "0"
          }] lg:px-[${props.ContentBlockPaddingHorizontalDesktop ?? "0"}] h-${
            props?.ContentBlockHeight ?? "0"
          } pt-[${props?.BlockPaddingTopMobile ?? "0"}] lg:(pt-[${
            props?.BlockPaddingTopDesktop ?? "0"
          }]) mx-auto w-full flex items-center justify-center `}
        >
          <div class="max-w-[975px] lg:mx-5">
            <span class="sm:font-[18px]">
              <QuillText {...props?.ContentBlock ?? ""} />
            </span>
          </div>
        </div>
  
        <div
          class={`flex pt-[${
            props?.ImageBlock?.paddingTopMobile ?? "0"
          }] lg:(pt-[${props?.ImageBlock?.paddingTopDesktop ?? "0"}])`}
        >
          {props?.ImageBlock?.srcMobile != undefined ||
              props?.ImageBlock?.srcDesktop != undefined
            ? (
              <Picture
                class={`w-screen flex ${
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
                  width={705}
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
                  class={`${
                    props.ImageBlock.spectRatio === "full screen"
                      ? "w-full"
                      : props.ImageBlock.spectRatio === "Compacted"
                      ? "w-[86.1%]"
                      : props.ImageBlock.spectRatio === "Thumb"
                      ? "w-[120px] lg:w-[200px]"
                      : "w-auto"
                  }`}
                  width={100}
                  height={100}
                  loading={props.ImageBlock.isLcp ? "eager" : "lazy"}
                  decoding={props.ImageBlock.isLcp ? "sync" : "async"}
                  src={props.ImageBlock.srcDesktop || ""}
                  alt={props.ImageBlock.alt}
                  title={props.ImageBlock.alt}
                />
              </Picture>
            )
            : null}
        </div>
      </div>
    );
  }
  