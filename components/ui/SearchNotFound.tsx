import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import { useEffect, useState } from "preact/compat";
import ProductCard from "$store/components/product/ProductCard.tsx";

export interface TextSugestion {
  firstText: string;
  secondText: string;
  thirdText: string;
}

export interface Props {
  textSugestions: TextSugestion;
  products: LoaderReturnType<Product[] | null>;
}

function SearchNotFound({ textSugestions, products }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchTerm(window.location.search.replace("?q=", ""));
  }, []);

  return (
    <div class="lg:(w-container mx-auto) mt-[60px] lg:mt-[99px] lg:mr-[1%] lg:ml-[4%]">
      <div class="flex flex-col justify-center items-center gap-[10px] mt-[80px] mb-[70px] lg:mt-[62px] lg:mb-[113px]">
        <h1 class="text-primary uppercase text-[2rem] lg:text-[1.875rem] font-thin tracking-[5px] mt-[80px] lg:mt-[62px] lg:tracking-[10px]">
          {searchTerm}
        </h1>
        <p class="text-[0.75rem] text-[#656564]">
          Você buscou por{" "}
          <span class="text-primary font-bold">{searchTerm}</span>, nenhum
          resultado para{" "}
          <span class="text-primary font-bold">{searchTerm}</span>
        </p>
      </div>
      <div class="lg:flex">
        <div class="flex flex-col justify-center gap-[20px] items-center lg:justify-between lg:flex-1 lg:border-r border-r-[#d4d4d4] lg:pr-[10px] lg:mr-[10px]">
          <h2 class="text-[0.9375rem] whitespace-nowrap lg:text-[1.5625rem] tracking-[6px] uppercase lg:font-light">
            Busque novamente
          </h2>
          <form
            id="searchbar"
            action={"/s"}
            class="flex justify-center items-center border-b-1 border-[#C5C7CC] w-[75%] lg:w-[80%] py-[20px]"
          >
            <div class="flex justify-center items-center w-full mx-auto gap-[10px]">
              <i class="icon-busca"></i>
              <input
                id="search-input"
                class="w-[75px] focus:w-full lg:w-full transition-all duration-200 font-light text-gray-heavy text-[12px] outline-none placeholder:uppercase placeholder-shown:sibling:hidden"
                name={"q"}
                placeholder={"DIGITE AQUI"}
                role="combobox"
                aria-controls="search-suggestion"
                autocomplete="off"
              />
            </div>
          </form>
          <ul class="mx-[4%]">
            <li class="p-[20px] flex lg:block lg:text-center">
              <strong
                style={{ fontFamily: "sans-serif" }}
                class="block font-semibold text-primary text-[1.875rem] pr-[5px]"
              >
                01<span class="lg:hidden">.</span>
              </strong>
              <p class="text-[1rem] font-light text-[#656564] tracking-[0]">
                {textSugestions?.firstText}
              </p>
            </li>
            <li class="p-[20px] flex lg:block lg:text-center">
              <strong
                style={{ fontFamily: "sans-serif" }}
                class="block font-semibold text-primary text-[1.875rem] pr-[5px]"
              >
                02<span class="lg:hidden">.</span>
              </strong>
              <p class="text-[1rem] font-light text-[#656564] tracking-[0]">
                {textSugestions?.secondText}
              </p>
            </li>
            <li class="p-[20px] flex lg:block lg:text-center">
              <strong
                style={{ fontFamily: "sans-serif" }}
                class="block font-semibold text-primary text-[1.875rem] pr-[5px]"
              >
                03<span class="lg:hidden">.</span>
              </strong>
              <p class="text-[1rem] font-light text-[#656564] tracking-[0]">
                {textSugestions?.thirdText}
              </p>
            </li>
          </ul>
        </div>
        <div class="border-t border-t-[#d4d4d4] lg:flex-3 lg:border-0">
          <h2 class="mx-auto text-center p-[20px] lg:p-0 text-black tracking-[6px] uppercase font-medium text-[.9375rem] lg:text-[1.5625rem] lg:font-light lg:mb-[70px]">
            Você pode gostar
          </h2>
          <div
            class={`searchnotfound relative grid (grid-cols-2) lg:(grid-cols-3!) gap-2 lg:gap-5 items-start mt-[20px] h-[450px] overflow-y-scroll`}
          >
            {products?.map((product) => (
              <div class="w-full list-none ">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchNotFound;
