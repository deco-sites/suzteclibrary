import BannerDobble from "$store/components/ui/BannerDobble.tsx";
import type { BannerDobbleProps } from "$store/components/ui/BannerDobble.tsx";

export interface BannerDobbleContainerProps {
  bannerPrimary: BannerDobbleProps;
  bannerSecundary: BannerDobbleProps;
}

export default function BannerDobbleSection(props: BannerDobbleContainerProps) {
  return (
    <>
      <div class="text-white flex flex-col-reverse justify-center text-center md:(flex-row px-12 py-[10px]) 15xl:px-0">
        <BannerDobble {...props.bannerPrimary} />
        <BannerDobble {...props.bannerSecundary} />
      </div>
    </>
  );
}
