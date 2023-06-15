import Button from "./Button.tsx";
import type { Image as LiveImage } from "$store/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: string;
  subtitle: string;
  buttonPrimary: {
    name: string;
    url?: string;
  };
  buttonSecundary: {
    name: string;
    url?: string;
  };
  imageSrc: LiveImage;
  imageAltText: string;
  backgroundColor?: string;
}

export default function AsasParaVoarSubscribe(props: Props) {
  return (
    <div
      class={`flex flex-col justify-center items-center text-center bg-[${
        props.backgroundColor ?? "#0023a0"
      }]`}
    >
      <h3 class="py-[50px] px-[15px] text-[18px] font-light font-Avenir text-[#fff] lg:(text-[30px] py-[100px] m-auto)">
        {props.title}
        <br></br>
        <strong class="font-bold">{props.subtitle}</strong>
      </h3>
      <div class="flex flex-col justify-center font-Avenir gap-[35px] lg:(flex-row gap-[150px])">
        <a
          href={props?.buttonPrimary?.url === undefined
            ? "#"
            : props.buttonPrimary.url}
          target="_blank"
          rel="noopener"
        >
          <Button
            class="font-nunito-sans capitalize"
            type="button"
            as="button"
            variant="outlined"
          >
            {props?.buttonPrimary?.name}
          </Button>
        </a>
        <a
          href={props?.buttonSecundary?.url === undefined
            ? "#"
            : props.buttonSecundary.url}
          target="_blank"
          rel="noopener"
          class=""
        >
          <Button
            class="font-nunito-sans capitalize"
            type="button"
            as="button"
            variant="outlined"
          >
            {props?.buttonSecundary?.name}
          </Button>
        </a>
      </div>
      <div class="py-[50px] lg:py-[100px] w-[120px] lg:w-[200px]">
        <Image
          class={`w-full h-[27px] lg:h-[45px]`}
          width={200}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          src={props.imageSrc || ""}
          alt={props.imageAltText}
        />
      </div>
    </div>
  );
}
