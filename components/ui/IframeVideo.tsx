export interface videoUrlProps {
    videoPlatform: "Vimeo" | "Yutube";
    /** @description o código do vídeo que fica no final da url ex: 539309773 */
    videoUrlCode: string;
    /** @description O título do seu vídeo */
    title: string;
    /** @description Como deseja exibir seu vídeo*/
    modo?: "Tela Cheia" | "Cinema" | "Abaixo da seção superior";
    /** @description Habilite para exibir os controles do player de vídeo */
    /** @description habilite para rodar o vídeo infinitas vezes automáticamente */
    loop: boolean;
    controls?: boolean;
  }
  
  export default function IframeVideo(
    {
      videoPlatform,
      videoUrlCode,
      title,
      loop = true,
      modo = "Tela Cheia",
      controls = false,
    }: videoUrlProps,
  ) {
    const urlToFetch = videoPlatform === "Yutube"
      ? `https://www.youtube.com/embed/${videoUrlCode}?&modestbranding=1&autoplay=1&loop=${
        loop ? "1" : "0"
      }&controls=${controls ? "1" : "0"}`
      : `https://player.vimeo.com/video/${videoUrlCode}?&byline=0&portrait=0&autoplay=1&loop=${
        loop ? "1" : "0"
      }`;
  
    return (
      <div class="w-full flex justify-center items-center relative bg-black overflow-x-hidden top-0 left-0 lg:(left-[0%])">
        <iframe
          class={`object-contain w-full h-[56.1vw] ${
            modo === "Cinema"
              ? "lg:h-[80%]"
              : modo === "Tela Cheia"
              ? "lg:(mt-[-5.4rem])"
              : "lg:(mt-0)"
          }`}
          width="860"
          height="615"
          src={urlToFetch}
          title={title}
          frameBorder="0"
          loop={loop}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"
          allowFullScreen
          controls={controls}
        >
        </iframe>
      </div>
    );
  }
  