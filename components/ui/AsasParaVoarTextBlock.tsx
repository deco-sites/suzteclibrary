export interface Props {
    title: string;
    description: string;
    BackgroundColor?: string;
  }
  
  export default function AsasParaVoarTextBlock(props: Props) {
    return (
      <div
        class={`py-[50px] px-[15px] lg:(py-[100px] px-[15vw]) bg-[${
          props?.BackgroundColor ?? "#fff"
        }]`}
      >
        <h2 class="text-center pb-[32px] font-Palatino font-body text-[50px] lg:(text-[85px]) text-[#0033A0]">
          {props.title}
        </h2>
        <p class="max-w-[960px] m-auto text-center text-[18px] font-light font-Avenir lg:text-[30px]">
          {props.description}
        </p>
      </div>
    );
  }
  