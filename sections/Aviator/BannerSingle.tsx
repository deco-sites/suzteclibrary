import BannerDobble from "$store/components/ui/BannerDobble.tsx";
import type { BannerDobbleProps } from "$store/components/ui/BannerDobble.tsx";

export interface BannerSingleContainerProps {
  bannerPrimary: BannerDobbleProps;
}

export default function BannerSingleSection(props: BannerSingleContainerProps) {
  return (
    <>
      <div class="max-w-[1660px] mx-auto text-white flex flex-col-reverse justify-center text-center md:(flex-row px-12 py-[10px]) 15xl:px-0">
        <BannerDobble {...props.bannerPrimary} />
      </div>
    </>
  );
}
