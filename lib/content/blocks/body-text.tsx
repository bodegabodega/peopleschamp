import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { BLOCKS } from "@contentful/rich-text-types";
import { JSX } from "react";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, next: any) => {
      return `<p class="mb-4 text-base leading-relaxed text-slate-800">${next(
        node.content
      )}</p>`;
    },
  },
};

type BodyTextProps = {
  block: BodyText
}

export default function BodyTextComponent(props: BodyTextProps): JSX.Element {
  const htmlString = documentToHtmlString(props.block.content.json, options)
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}