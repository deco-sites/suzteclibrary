import { useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

function BackToTop() {
  const show = useSignal(false);

  if (IS_BROWSER) {
    document.addEventListener("scroll", function () {
      const height = window.scrollY;
      if (height > 500 && !show.value) {
        show.value = true;
      }
      if (height <= 500 && show.value) {
        show.value = false;
      }
    });
  }

  return (
    <>
      <button
        href="#BTT"
        class={`${
          show.value ? "opacity-100" : "opacity-0"
        } transition-all duration-500 fixed bottom-[100px] focus:outline-none outline-none right-0 w-10 h-10 sm:h-auto lg:h-[28px] z-40 group sm:w-[min-content]`}
        aria-label="Button Back to top"
        onClick={() => scroll(0, 0)}
      >
        <span
          class="w-full h-full bg-primary text-white p-2 shadow-lg flex items-center justify-center sm:(justify-start gap-[22px] pl-[14px] mr-[-73px] group-hover:(mr-0 gap-[9px]))"
          aria-label="Back to top"
        >
          <i class="icon-arrow-up rotate-90 text-[10px] lg:text-[8px]">
          </i>
          <span class="hidden sm:(block) whitespace-nowrap text-[10px] mt-[3px]">
            Voltar ao topo
          </span>
        </span>
      </button>
    </>
  );
}

export default BackToTop;
