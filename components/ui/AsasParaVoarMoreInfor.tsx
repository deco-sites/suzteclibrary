import Button from "./Button.tsx";

export interface Props {
  title?: string;
  videoUrlCode: string;
  videoLoop: boolean;
  buttonName: string;
  buttonUrl: string;
}

export default function AsasParaVoarMoreInfor(props: Props) {
  const urlToFetch =
    `https://player.vimeo.com/video/${props.videoUrlCode}?&byline=0&portrait=0&autoplay=0&loop=${
      props.videoLoop ? "1" : "0"
    }`;

  return (
    <div class="flex flex-col justify-center  items-center">
      <div class="m-auto">
        {!props.title
          ? null
          : (
            <h2 class="font-bold text-center text-[18px] mt-[50px] mb-[30px] lg:text-[30px]">
              {props.title}
            </h2>
          )}
      </div>
      <iframe
        class={`object-contain w-full h-[56.1vw] py-[20px] px-[30px] lg:px-[100px]`}
        width="860"
        height="615"
        src={urlToFetch}
        title={props.title}
        frameBorder="0"
        loop={props.videoLoop || false}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"
        allowFullScreen
      >
      </iframe>
      <a
        class="lg:mb-[65px]"
        href={props.buttonUrl}
        target="_blank"
        rel="noopener"
      >
        <Button
          type="button"
          as="button"
          variant="primary"
          style="font-size:12px"
          class="w-[250px] my-[35px] mt-3 hover:scale-110 !transition-all tracking-[0.7px] font-nunito-sans capitalize"
        >
          {props.buttonName || "Assistir"}
        </Button>
      </a>
    </div>
  );
}
