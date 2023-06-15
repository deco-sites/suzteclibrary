const css = `
#open-infobox { 
  display: none !important;
}
`;

const js = () => {
  const init = () => {
    const node = document.createElement("script");

    node.id = "ze-snippet";
    node.async = true;
    node.src =
      "https://static.zdassets.com/ekr/snippet.js?key=20c26558-14a7-480a-b33c-4fd73dbaaa59";
    node.addEventListener(
      "load",
      () =>
        // deno-lint-ignore no-explicit-any
        (window as any).zE("webWidget", "helpCenter:setSuggestions", {
          search: "troca devolucao",
        }),
    );

    document.head.appendChild(node);
  };

  addEventListener(
    "load",
    () =>
      typeof requestIdleCallback !== "undefined"
        ? requestIdleCallback(() => setTimeout(init, 5_500))
        : init(),
  );
};

function ZendeskIntegration() {
  return (
    <>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: `(${js})()` }}
      />

      <style dangerouslySetInnerHTML={{ __html: css }} />
    </>
  );
}

export default ZendeskIntegration;
