import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Slider from "./Slider.tsx";
import SliderJS from "./SliderJS.tsx";
import Button from "./Button.tsx";
import Icon from "./Icon.tsx";
import Container from "./Container.tsx";

export interface Card {
  /**
   * @description Number of card
   */
  number: number;
  /**
   * @description Image of card
   */
  image: LiveImage;
  /**
   * @description Title of card
   */
  title: string;
  /**
   * @description Description of card
   */
  description: string;
  /**
   * @description CTA of Card
   */
  CTA: string;
  /**
   * @description href of Card
   */
  href: string;
}

export interface Props {
  /**
   * @description Title of section
   */
  title: string;
  /**
   * @description description of section
   */
  description: string;
  /**
   * @description Cards
   */
  cards: Card[];
}

function AsasParaVoar({ title, description, cards }: Props) {
  return (
    <>
      <div class="py-[30px] lg:px-0">
        <div class="mb-[20px] px-[20px] lg:(px-[50px] mb-0) 15xl:px-0 max-w-[1660px] mx-auto">
          <h2 class="relative text-[32px] lg:text-[36px] text-primary font-lusitana cursor-default">
            {title}
          </h2>
          <p class="text-[14px] tracking-[0.35px] lg:(text-[15px] tracking-[0.45px]) 15xl:text-[18px]! text-[#7b7c80] font-light cursor-default mb-[20px] md:mb-0!">
            {description}
          </p>
        </div>
        <Container
          id={"4312"}
          class="lg:max-w-none grid grid-cols-[48px_1fr_48px] grid-rows-[64px_1fr_48px_1fr] relative"
        >
          <Slider
            class="col-span-full row-span-full scrollbar-none gap-5 overflow-y-hidden px-5 lg:(snap-mandatory-none px-0 py-[20px]) 15xl:py-[30px]"
            snap="snap-center sm:snap-start block last:mr-6 sm:last:mr-0"
          >
            {cards?.reverse().map(
              ({ number, image, title, description, CTA, href }, index) => {
                return (
                  <div
                    class={`relative w-[70vw] sm:w-[30vw] lg:w-[21.8vw] 15xl:w-[20.5vw] group 
                    ${index === 0 ? "lg:ml-[50px] 15xl:ml-[125px]" : ""} 
                    ${
                      index === cards.length - 1
                        ? "lg:mr-[50px] 15xl:mr-[125px]"
                        : ""
                    }`}
                  >
                    <a
                      href={href}
                      class="block relative group-hover:scale-105 overflow-hidden"
                    >
                      <div class="relative">
                        <Image
                          class="w-full"
                          sizes="(max-width: 640px) 100vw, 50vw"
                          src={image}
                          alt={title}
                          width={360}
                          height={500}
                          // Preload LCP image for better web vitals
                          preload={false}
                          loading={"lazy"}
                          fetchPriority={"low"}
                          decoding={"async"}
                        />
                      </div>
                      <div class="backgroundAsas h-full w-full absolute top-0 opacity-60 group-hover:opacity-90">
                      </div>
                      <div class="transition-all duration-[0.5s] lg:pb-0 flex flex-col justify-center items-center absolute w-full h-full text-center bottom-0 text-white font-bold">
                        <div class="lg:group-hover:mt-[-170px] transition-all duration-[400ms] tracking-[1.8px] font-nunito-sans text-[30px] xl:(text-[26px] mb-10) leading-normal">
                          <p>#{number}</p>
                          <h3>{title}</h3>
                        </div>
                        <div class="relative flex flex-col justify-center items-center transition-all duration-[0.5s] lg:(opacity-0 pb-[-50px] absolute top-[50%] group-hover:top-[40%] group-hover:opacity-100 group-hover:pb-0) 2xl:(group-hover:top-[45%])">
                          <p class="hidden sm:block font-normal text-[12px] sm:max-w-[70%] opacity-0 sm:opacity-100 min-h-[140px] lg:(leading-5 tracking-[0.45px]) 2xl:(text-[14px])">
                            {description}
                          </p>
                          <p class="underline text-[14px] 15xl:(top-[40px]) xl:(top-[20px]) lg:(relative top-0 group-hover:flex p-[10px] w-[172px] h-10 rounded-[50px] justify-center items-center border-0 no-underline font-bold bg-primary text-center text-white text-[12px] transition-all duration-300 hover:scale-110 outline-none focus:outline-none)">
                            {CTA}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              },
            )}
          </Slider>
          <div class="hidden lg:block absolute top-[calc(50%-24px)] w-full px-12">
            <div class="hidden sm:block z-10 col-start-1 row-start-3">
              <div class="absolute left-0  bg-interactive-inverse rounded-full border-default border-0 shadow-arrow transition-all lg:left-[50px] 15xl:left-[100px]">
                <Button
                  variant="icon"
                  data-slide="prev"
                  aria-label="Previous item"
                  class="w-[48px] h-[48px]"
                >
                  <Icon
                    size={22}
                    id="ChevronLeft"
                    class="text-[#4d5559]"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>
            <div class="hidden sm:block z-10 col-start-3 row-start-3">
              <div class="absolute right-0 bg-interactive-inverse rounded-full border-default border-0 shadow-arrow transition-all lg:right-[50px] 15xl:right-[100px]">
                <Button
                  variant="icon"
                  data-slide="next"
                  aria-label="Next item"
                  class="w-[48px] h-[48px]"
                >
                  <Icon
                    size={22}
                    id="ChevronRight"
                    class="text-[#4d5559]"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>
          </div>
          <SliderJS rootId={"4312"} />
        </Container>
      </div>
    </>
  );
}

export default AsasParaVoar;
