import Text from "./Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { LoaderReturnType, SectionProps } from "$live/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Banner {
  /** @description A categoria que deseja exibir este banner. Use /feminino/* para exibir o banner na categoria feminino  */
  urlToDisplayBanner: string;
  /** @description text to be rendered on top of the image */
  title?: string;
  /** @description enable if you don't want to display the main text in the image and to maintain good SEO even with hidden text. */
  hiddenTitleSeo: boolean;
  /** @description text to be rendered on top of the image */
  bannerText?: {
    richtext: HTML;
    sizeDesktop: string;
    sizeMobile: string;
    moreStyles?: string;
  };
  image: {
    /** @description Image for big screens */
    desktop: LiveImage;
    /** @description Width of image for big screens */
    desktopWidth?: number;
    /** @description Height of image for big screens */
    desktopHeight?: number;
    /** @description Image for small screens */
    mobile?: LiveImage;
    /** @description Width of image for small screens */
    mobileWidth?: number;
    /** @description Height of image for small screens */
    mobileHeight?: number;
    /** @description image alt text */
    alt?: string;
    isLcp?: boolean;
  };
  isHeaderTransparent?: boolean;
}

export interface Props {
  page?: LoaderReturnType<ProductListingPage | null>;
  banners?: Banner[];
  activeBreadcrumb?: boolean;
}

function BannerUI({ banner }: { banner: Banner }) {
  const { displayAlert } = useUI();
  const {
    title,
    hiddenTitleSeo,
    bannerText,
    image,
    isHeaderTransparent,
  } = banner;

  return (
    <div>
      <div
        class={`flex flex-col relative ${
          !isHeaderTransparent ? "lg:mt-[99px] mt-[60px]" : "mt-0"
        }
        ${hiddenTitleSeo ? "mb-[16px]" : ""}`}
      >
        <Picture
          preload={image.isLcp ? true : false}
          class="col-start-1 col-span-1 row-start-1 row-span-1 w-full lg:inline"
        >
          <Source
            src={image.desktop}
            width={image.desktopWidth || 1920}
            height={image.desktopHeight || 450}
            media="(min-width: 767px)"
          />
          <Source
            src={image.mobile ?? image.desktop}
            width={image.mobileWidth || 706}
            height={image.mobileHeight || 318}
            media="(max-width: 766px)"
          />
          <img
            class="w-full"
            src={image.desktop}
            alt={image.alt ?? title}
            decoding={image.isLcp ? "sync" : "async"}
            loading={image.isLcp ? "eager" : "lazy"}
          />
        </Picture>

        <div
          class={`lg:absolute static bottom-0 flex flex-col items-center justify-center text-center w-full ${
            hiddenTitleSeo ? "" : "py-2"
          }`}
        >
          <h1 class={`${hiddenTitleSeo ? "w-0 h-0 overflow-hidden" : null}`}>
            <Text
              variant="heading-1"
              tone="default"
              class={`uppercase lg:text-default-inverse text-[41px] lg:text-[32px] ${
                hiddenTitleSeo ? "whitespace-nowrap pr-[200vw]" : null
              }`}
            >
              {title}
            </Text>
          </h1>
        </div>
        {!bannerText ? null : (
          <h2
            style={bannerText.moreStyles}
            class={`h-full w-full absolute flex justify-center items-center text-[${bannerText.sizeMobile}] lg:(text-[${bannerText.sizeDesktop}])`}
            dangerouslySetInnerHTML={{ __html: bannerText.richtext }}
          >
          </h2>
        )}
      </div>
    </div>
  );
}

function BannerCategory(
  { page, banner, activeBreadcrumb = true }: SectionProps<typeof loader>,
) {
  const { displayAlert } = useUI();
  const headingText = page?.breadcrumb.itemListElement.at(-1);

  if (!banner) {
    return (
      <>
        {page && (
          <div
            class={`w-[92%] lg:w-container max-w-[1660px] py-1 lg:mx-auto mt-[60px] lg:mt-[99px] ${
              activeBreadcrumb ? "" : "hidden"
            }`}
          >
            <Breadcrumb itemListElement={page.breadcrumb.itemListElement} />
          </div>
        )}
        {headingText && (
          <h1 class=" flex justify-center items-center font-bold w-full left-0 pt-[20px] tracking-normal text-[30px] lg:text-[50px] text-[#252526]">
            {headingText.name}
          </h1>
        )}
      </>
    );
  }

  return (
    <>
      <BannerUI banner={banner} />
      <div
        class={`max-w-[100%] 15xl:(max-w-[1660px]) lg:(w-container mx-auto) px-4 lg:px-[0px] mx-auto ${
          activeBreadcrumb && !!page ? "lg:py-[10px]" : "lg:pt-[15px]"
        }`}
      >
        {page && (activeBreadcrumb
          ? <Breadcrumb itemListElement={page.breadcrumb.itemListElement} />
          : null)}
      </div>
    </>
  );
}

export const loader = (props: Props, req: Request) => {
  const { banners = [], page, activeBreadcrumb } = props;

  const banner = banners.find(({ urlToDisplayBanner }) =>
    new URLPattern({ pathname: urlToDisplayBanner }).test(req.url)
  );

  return {
    page,
    banner,
    activeBreadcrumb,
  };
};

export default BannerCategory;
