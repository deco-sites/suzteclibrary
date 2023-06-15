function snippet() {
    // deno-lint-ignore no-explicit-any
    new (window as any).VLibras.Widget("https://vlibras.gov.br/app");
  }
  
  export default function Vlibras() {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .logoVLibras{
                  
              position: absolute;
              width: 99px;
              height: 29px;
              top: 344px;
              left: 34%;
              margin: 0 auto;
              z-index: 9;
              animation: fade-in 3s 3s both;
            }
            @keyframes fade-in{
              0%{
                  opacity:0%;
              }100%{
                  opacity:100%
              }
            }
        `,
          }}
        />
        <div class="enabled">
          <img
            class="logoVLibras"
            src="https://theme.zdassets.com/theme_assets/2324102/dbbbfd513766b6ce40cffd9db35c69180b0d7c7b.png"
            alt=""
          />
          <div vw-access-button class="active"></div>
          <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
          </div>
        </div>
        <script
          id="test"
          type="text/javascript"
          src="https://vlibras.gov.br/app/vlibras-plugin.js"
        />
  
        <script dangerouslySetInnerHTML={{ __html: `(${snippet})();` }} />
      </>
    );
  }
  