import type { Image as LiveImage } from "$store/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import BannerContentHorizontal, {
  Props,
} from "$store/components/ui/BannerContentHorizontal.tsx";

export interface AsasParaVoarPartnersProps {
  BannerInfors: Props;
  SectionSecundaryTitle: string;
  //   SectionSecundaryDescription: string;
  img: ImageProps;
}

export interface ImageProps {
  src?: LiveImage;
  srcMobile?: LiveImage;
  /**
   * @description descreva oque sua imagem está exibindo.
   */
  alt?: string;
}

export default function AsasParaVoarPartners(props: AsasParaVoarPartnersProps) {
  return (
    <>
      <section class="children:items-center px-0 children:!text-[18px] lg:(px-[65px] first-child:!text-[30px]) !children:text-[#000000]">
        <BannerContentHorizontal
          descriptionClass="!px-[15px] !pb-0 lg:(px-[0px] py-[100px]) lg:w-[85%] lg:!max-w-[80%] lg:leading-[1.5] tracking-normal !font-Avenir"
          {...props.BannerInfors}
        />
      </section>
      <section class="flex flex-col justify-center items-center lg:px-[10%] font-Avenir">
        <h2 class="pb-[20px] text-[18px] lg:(text-[30px] py-[100px]) font-bold">
          {props.SectionSecundaryTitle}
        </h2>
        <div class="flex justify-between items-center w-full pb-[20px] lg:pb-[100px]">
          <Picture
            class="w-screen !lg:(w-[30%] object-contain)"
            preload={false}
          >
            <Source
              fetchPriority={"low"}
              media="(max-width: 767px)"
              src={props?.img?.srcMobile || ""}
              width={705}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={"low"}
              src={props?.img?.src || ""}
              width={1080}
              // height={580}
            />
            <Image
              width={100}
              height={100}
              loading={"lazy"}
              decoding={"async"}
              src={props?.img?.src || ""}
              alt={props?.img?.alt}
              title={props?.img?.alt}
            />
          </Picture>
          <p class="hidden !lg:(block w-[70%] text-[30px] px-[15px] max-w-[1000px]) px-[10px] font-Avenir">
            A <strong>I2S</strong>{" "}
            traz propósito para quem tem interesse em investir no universo de
            NFT. Transformando em NFT artes, trabalhos, material produzido por
            instituições assistidas pela startup.
          </p>
        </div>
      </section>
    </>
  );
}
