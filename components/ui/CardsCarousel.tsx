import type { Props as ICard } from "$store/components/ui/Card.tsx";
import Card from "$store/components/ui/Card.tsx";
import Icon from "./Icon.tsx";
import Quilltext from "deco-sites/std/components/QuillText.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

import Slider from "./Slider.tsx";
import SliderJS from "./SliderJS.tsx";

import { useId } from "preact/hooks";

export interface Props {
  title: HTML;
  cards: ICard[];
}

function CardsCarousel(
  { title, cards }: Props,
) {
  const id = useId();

  return (
    <div class="sm:home-container mb-10 lg:mb-15">
      <div class="home-container-mobile">
        <Quilltext html={title} />
      </div>
      <div
        id={id}
        class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_48px] relative"
      >
        <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none lg:gap-5">
          {cards.map((card, index) => {
            return (
              <Slider.Item
                index={index}
                class={`relative carousel-item w-[80%] sm:w-[32%] first:ml-[15px] last:mr-[15px]`}
              >
                <div>
                  <Card
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    callToAction={card.callToAction}
                    href={card.href}
                    hasPaddingDesktop={false}
                  />
                </div>
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
        <Slider.PrevButton>
          <Icon
            class="text-inherit"
            size={50}
            id="ChevronLeft"
            strokeWidth={1}
          />
        </Slider.PrevButton>
      </div>
      <div class="hidden sm:flex items-center justify-center z-10 absolute right-[-50px] top-[calc(50%-25px)]">
        <Slider.NextButton>
          <Icon
            class="text-inherit"
            size={50}
            id="ChevronRight"
            strokeWidth={1}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

export default CardsCarousel;
