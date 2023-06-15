import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Quilltext from "deco-sites/std/components/QuillText.tsx";

import Icon from "./Icon.tsx";
import Button from "./Button.tsx";

import Slider from "./Slider.tsx";
import SliderJS from "./SliderJS.tsx";

import { useId } from "preact/hooks";

export interface InstagramImage {
  image: LiveImage;
  href: string;
  altText?: string;
}

export interface Props {
  images: InstagramImage[];
  title: HTML;
}

export default function Instafeed({ images, title }: Props) {
  const id = useId();

  return (
    <div class="sm:home-container">
      <div class="home-container-mobile sm:no-container">
        <Quilltext html={title} />
      </div>
      <div
        id={id}
        class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_48px] relative"
      >
        <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6 sm:gap-[1.33%]">
          {images.map((image, index) => {
            return (
              <Slider.Item
                index={index}
                class={`relative carousel-item w-[80%] sm:w-[24%] first:ml-[15px] last:mr-[15px] sm:first:ml-0 sm:last:mr-0`}
              >
                <a class="cursor-pointer" src={image.href} target="_blank">
                  <Image
                    class="w-full rounded-md"
                    src={image.image}
                    width={290}
                  />
                </a>
              </Slider.Item>
            );
          })}
        </Slider>

        <Controls />

        <SliderJS
          rootId={id}
          interval={0}
        />
      </div>
    </div>
  );
}

function Controls() {
  return (
    <>
      <div class="hidden sm:flex items-center justify-center z-10 absolute left-[-50px] top-[calc(50%-25px)]">
        <Slider.PrevButton class="">
          <Icon
            class="text-[#636366]"
            size={50}
            id="ChevronLeft"
            strokeWidth={1}
          />
        </Slider.PrevButton>
      </div>
      <div class="hidden sm:flex items-center justify-center z-10 absolute right-[-50px] top-[calc(50%-25px)]">
        <Slider.NextButton class="">
          <Icon
            class="text-[#636366]"
            size={50}
            id="ChevronRight"
            strokeWidth={1}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}
