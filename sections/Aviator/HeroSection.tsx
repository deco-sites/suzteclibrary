import HeroBanner from "$store/components/ui/HeroBanner.tsx";
import type { HeroBannerProps } from "$store/components/ui/HeroBanner.tsx";

export default function HeroBannerSection(props: HeroBannerProps) {
  return <HeroBanner {...props} />;
}
