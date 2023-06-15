import IframeVideo, {
    videoUrlProps,
  } from "$store/components/ui/IframeVideo.tsx";
  
  export default function BannerVideoSection(props: videoUrlProps) {
    return <IframeVideo {...props} />;
  }
  