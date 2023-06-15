import type { HTML } from "$store/components/types.ts";
import QuillTextCustomStyles, {
  ThemeStyles,
} from "$store/components/ui/QuillTextCustomStyles.tsx";

export interface ContentBlock {
  /**
   * @description use este bloco para escrever o conteúdo do bloco.
   */
  ContentEditor: HTML;

  /**
   * @description habilite para usar as cores e formatações do thema da loja
   */
  ThemeStyles: ThemeStyles;
}

export default function QuillText(props: ContentBlock) {
  return (
    <>
      <QuillTextCustomStyles {...props.ThemeStyles} />
      {/* TODO: figure out a way to dedupe links on render page */}
      <link
        href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
        rel="stylesheet"
      >
      </link>
      <div
        class="ql-editor"
        dangerouslySetInnerHTML={{ __html: props.ContentEditor }}
      >
      </div>
    </>
  );
}
