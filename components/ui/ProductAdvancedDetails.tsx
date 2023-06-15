import Container from "$store/components/ui/Container.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

// TODO: Banner should be an object with image/text description
// (render intercat)

export interface BannerProp {
  image: LiveImage;
  title: string;
  text: string;
  side: "left" | "right";
}

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
  description: string;
  collectionId: string[];
  banners: BannerProp[];
}

function Banner({ image, title, text, side: Side }: BannerProp) {
  const side = Side == "left" ? "lg:flex-row" : "lg:flex-row-reverse";
  const marginLeft = Side == "right" && "lg:ml-[30px]";
  return (
    <div class={`flex flex-col ${side} py-[10px] my-[10px]`}>
      <Image
        src={image}
        width={820}
        class="w-full lg:w-1/2"
      />
      <div
        class={`w-full lg:w-1/2 p-[15px] lg:p-[30px] flex flex-col lg:justify-center ${marginLeft}`}
      >
        <h3 class="text-[24px] mb-[15px] font-bold text-[#252526] lg:text-[30px]">
          {title}
        </h3>
        <p class="text-[14px] lg:text-[18px] lg:max-w-[540px] tracking-[.45px] font-light text-[#7B7C80]">
          {text}
        </p>
      </div>
    </div>
  );
}

function Details(
  { page, banners, collectionId }: {
    page: ProductDetailsPage;
    banners: BannerProp[];
    collectionId: string[];
  },
) {
  const {
    product,
  } = page;
  const isMatch =
    (product.additionalProperty?.filter((x) =>
      x.name === "cluster" && x.propertyID &&
      collectionId.includes(x.propertyID)
    ).length ?? 0) > 0;
  return (
    <Container
      class={"py-0 max-w-[768px] lg:max-w-[calc(100%-100px)] 15xl:(max-w-[1660px]) lg:mb-[50px] lg:mt-[0] mt-[20px]"}
    >
      {isMatch && banners?.map((banner) => {
        return <Banner {...banner} />;
      })}
    </Container>
  );
}

function ProductDetails({ page, banners, collectionId }: Props) {
  if (page) {
    return (
      <Details page={page} banners={banners} collectionId={collectionId} />
    );
  }

  return <></>;
}

export default ProductDetails;
