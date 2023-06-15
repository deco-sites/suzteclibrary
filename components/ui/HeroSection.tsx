import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { Video as LiveVideo } from "deco-sites/std/components/types.ts";
import Video from "deco-sites/std/components/Video.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface VideoProps {
  /**
   * @description ID of video mobile
   */
  videoMobile: LiveVideo;

  /**
   * @description ID of video desktop
   */
  videoDesktop: LiveVideo;
}

export interface ImageProps {
  /** @description Seu banner Mobile */
  mobile: {
    banner: LiveImage;
    imageWidth: number;
    imageHeight: number;
  };
  /** @description Seu banner Desktop */
  desktop: {
    banner: LiveImage;
    imageWidth: number;
    imageHeight: number;
  };
}

export interface CTAProps {
  title: {
    richtext: HTML;
    sizeDesktop: string;
    sizeMobile: string;
    lineHeightDesktop?: string;
    lineHeightMobile?: string;
    moreStyles?: string;
  };
  subTitle?: {
    showSubtitle: boolean;
    richtext: HTML;
    sizeDesktop: string;
    sizeMobile: string;
    lineHeightDesktop?: string;
    lineHeightMobile?: string;
    moreStyles?: string;
  };
  TitleFont: "Nunito" | "Lusitana";
  buttons: Button[];

  position: {
    vertical: "bottom" | "center";
    horizontal: "left" | "center" | "right";
  };

  bannerHref?: string;
  bannerMoreStyles?: string;
}

export interface Button {
  title: string;
  link: string;
  variant: "blue" | "white" | "black" | "outline";
}

export interface Props {
  media: VideoProps | ImageProps;
  cta: CTAProps;
}

function BannerComponent({ media, alt }: { media: ImageProps; alt: string }) {
  return (
    <>
      <Picture class="w-full" preload={true}>
        <Source
          media="(max-width: 1024px)"
          fetchPriority={"high"}
          src={media?.mobile.banner}
          width={media?.mobile.imageWidth}
          height={media?.mobile.imageHeight}
        />
        <Source
          media="(min-width: 1025px)"
          fetchPriority={"high"}
          src={media?.desktop.banner}
          width={media?.desktop.imageWidth}
          height={media?.desktop.imageHeight}
        />
        <img
          class="object-cover w-full sm:h-full"
          loading={"eager"}
          src={media?.desktop.banner}
          alt={alt}
        />
      </Picture>
    </>
  );
}

function VideoComponent({ media }: { media: VideoProps }) {
  return (
    <>
      <div class="block lg:hidden">
        <Video
          src={media.videoMobile}
          width={150}
          height={150}
          class="w-full h-auto"
          loop
          muted
          autoPlay
          playsInline
          loading={"eager"}
        >
        </Video>
      </div>
      <div class="hidden lg:block">
        <Video
          src={media.videoDesktop}
          width={150}
          height={150}
          class="w-full h-auto"
          loop
          muted
          autoPlay
          playsInline
          loading={"eager"}
        >
        </Video>
      </div>
    </>
  );
}

function buttonVariantClass(variant: string) {
  switch (variant) {
    case "white":
      return "bg-white text-black";
    case "black":
      return "bg-black text-white";
    case "outline":
      return "bg-transparent text-white border-1 border-white";
  }
  return "bg-primary text-white";
}

export default function HeroSectionComponent({ media, cta }: Props) {
  const horizontal = cta?.position?.horizontal === "left"
    ? "justify-start"
    : cta?.position?.horizontal === "center"
    ? "justify-center"
    : "justify-end";
  const horizontalText = cta?.position?.horizontal === "left"
    ? "text-left"
    : cta?.position?.horizontal === "center"
    ? "text-center"
    : "text-right";
  const vertical = cta?.position?.vertical === "center"
    ? "items-start"
    : "items-end";

  const {
    TitleFont,
    title: _title,
    subTitle,
    buttons,
  } = cta ?? {};

  const title = _title ?? {};
  return (
    <section
      class={`relative overflow-hidden ${
        cta.bannerHref ? "cursor-pointer" : ""
      }`}
      onClick={() =>
        cta.bannerHref ? window.location.href = cta.bannerHref : null}
    >
      {(media as VideoProps)?.videoMobile
        ? <VideoComponent media={media as VideoProps} />
        : <BannerComponent media={media as ImageProps} alt={title.richtext} />}
      <div
        style={cta.bannerMoreStyles}
        class={`flex absolute w-full top-[50vw] h-[calc(100%-50vw)] px-[10%] pb-[40px] lg:(top-[14vw] h-[calc(100%-14vw)] px-[95px] pb-[85px]) ${horizontal} ${horizontalText} ${vertical}`}
      >
        <div>
          <h2
            style={title.moreStyles}
            class={`textShadow text-[${title.sizeMobile}] lg:(text-[${title.sizeDesktop}]) leading-${
              `[${title.lineHeightMobile}]` ?? "normal"
            } lg:leading-${`[${title.lineHeightDesktop}]` ?? "normal"} ${
              TitleFont == "Lusitana"
                ? "font-['Lusitana',sans-serif]"
                : "font-['Nunito&ensp;Sans',sans-serif]"
            }`}
            dangerouslySetInnerHTML={{ __html: title.richtext }}
          >
          </h2>
          {subTitle?.showSubtitle &&
            (
              <span
                style={subTitle?.moreStyles}
                class={`text-[${subTitle?.sizeMobile}] block mt-3 lg:(text-[${subTitle?.sizeDesktop}]) leading-${
                  `[${title.lineHeightMobile}]` ?? "normal"
                } lg:leading-${`[${title.lineHeightDesktop}]` ?? "normal"}`}
                dangerouslySetInnerHTML={{ __html: subTitle?.richtext }}
              >
              </span>
            )}
          <div class={`flex flex-wrap gap-5 ${horizontal}`}>
            {(buttons ?? []).map(({ link, title, variant }) => {
              return (
                <a
                  class={`flex justify-center items-center mt-[20px] font-bold w-[150px] lg:w-[200px]! p-2.5 text-[12px] lg:text-[14px]! rounded-[50px] tracking-[0.7px] transition duration-300 lg:hover:(scale-110 bg-primary text-white border-none) ${
                    buttonVariantClass(variant)
                  }`}
                  href={link}
                >
                  {title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
