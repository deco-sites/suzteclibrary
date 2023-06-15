export interface ThemeStyles {
    SelectThemeStyle?: "Default" | "Aviator" | "Aviator PIMA";
  }
  export default function QuillTextCustomStyles(props: ThemeStyles) {
    const isTheme = props.SelectThemeStyle === "Aviator";
    const isThemePIMA = props.SelectThemeStyle === "Aviator PIMA";
  
    if (isTheme) {
      return (
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .ql-editor h1 .ql-size-huge {
              font-size: clamp(3.125rem, 1.4769rem + 5.9932vw, 5.3125rem)!important;
                color:#0033A0;
                display:block;
                margin-bottom:10px;
            }
            .ql-editor h2 .ql-size-huge {
              font-size: clamp(1.1875rem, 0.1986rem + 3.5959vw, 2.5rem);
              line-height: 28.5px  
            }
            .ql-editor h2 strong .ql-size-huge{
              line-height: normal;
            }
            
            .ql-editor h2 em.ql-size-large {
                color:#0033A0;
                font-weight: 500;
                line-height:normal;
            }
            .ql-editor h2 .ql-size-large {
              font-size: clamp(1.25rem, 0.7791rem + 1.7123vw, 1.875rem);
              line-height:30px
            }
            .ql-editor h2 strong.ql-size-large{
              line-height:30px
            }
            .ql-editor h2 strong.ql-size-large em{
              color:#0033A0;
            }
            @media screen and (min-width:1024px){
              .ql-editor h2 .ql-size-huge{
                line-height:60px
              }
              .ql-editor h2 .ql-size-large {
                line-height:45px
              }
              .ql-editor h2 strong.ql-size-large{
                line-height:normal
              }
            }
            .ql-editor p.ql-align-center {
              margin: 0 auto;
              padding: 0 15px;
              max-width: 1000px;  
            }
            .ql-editor p .ql-size-huge {
                font-size: clamp(1.125rem, 0.7321rem + 1.4286vw, 1.875rem);
                line-height: 1.5;
                font-family: Avenir Next LT W02 medium,-apple-system,BlinkMacSystemFont,'Roboto',Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
                font-weight: 300;          
            }
            .ql-editor p strong.ql-size-huge {
                font-weight: bolder !important;
            }
            .ql-editor p .ql-size-large {
                font-size: clamp(1rem, 0.869rem + 0.4762vw, 1.25rem);
                line-height: 1.5;
            }
            #content-block1-mobile p, #content-block2-mobile p {
                width: 85% !important;
                padding-left: 15px !important;
                padding-right: 15px !important;
            } 
        `,
          }}
        >
        </style>
      );
    }
  
    if (isThemePIMA) {
      return (
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .ql-editor h1 .ql-size-huge {
              text-align: center;
              color: #0033A0;
              font-weight: normal;
              font-size: 50px !important;
              font-family: Palatino Linotype,Palatino,Palladio,'Lusitana', URW Palladio L,Book Antiqua,Baskerville,Bookman Old Style,Bitstream Charter,Nimbus Roman No9 L,Garamond,Apple Garamond,ITC Garamond Narrow,New Century Schoolbook,Century Schoolbook,Century Schoolbook L,Georgia,serif!important;
            }
            .ql-editor p.ql-align-center {
              font-family: Avenir Next LT W02 medium,-apple-system,BlinkMacSystemFont,'Roboto',Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
              font-size: 19px !important;
              font-weight: 350 !important;
              line-height: 1.5 !important;
              text-align: center !important;
              width: 100% !important;
            }
            .ql-editor p.ql-align-center strong { 
              font-weight: bold !important;
            }
  
            .ql-editor h3.ql-align-center strong { 
              font-family: Avenir Next LT W02 medium,-apple-system,BlinkMacSystemFont,'Roboto',Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
              font-size: 19px !important;
              font-weight: 350 !important;
              line-height: 1.5 !important;
              text-align: center !important;
              width: 100% !important;
              font-weight: bold !important;
            }
  
            .ql-editor h2.ql-align-center strong { 
              font-family: Avenir Next LT W02 medium,-apple-system,BlinkMacSystemFont,'Roboto',Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
              font-size: 25px !important;
              font-weight: 350 !important;
              line-height: 1.5 !important;
              text-align: center !important;
              width: 100% !important;
              font-weight: bold !important;
            }
  
            @media screen and (min-width:1024px){
              .ql-editor h1 .ql-size-huge {
                font-size: 100px !important;
              }
              .ql-editor p.ql-align-center {
                margin: 0 auto;
                padding: 0 15px;
                max-width: 1000px;
                font-size: 30px !important;
                font-weight: 300 !important;
                line-height: 1.5 !important;
                text-align: center !important;
              }
              .ql-editor h3.ql-align-center strong {
                margin: 0 auto;
                padding: 0 15px;
                max-width: 1000px;
                font-size: 30px !important;
                font-weight: 300 !important;
                line-height: 1.5 !important;
                text-align: center !important;
                font-weight: bold !important;
              }
              .ql-editor h2.ql-align-center strong {
                margin: 0 auto;
                padding: 0 15px;
                max-width: 1000px;
                font-size: 30px !important;
                font-weight: 300 !important;
                line-height: 1.5 !important;
                text-align: center !important;
                font-weight: bold !important;
              }
            }
        `,
          }}
        >
        </style>
      );
    }
  
    return <></>;
  }
  