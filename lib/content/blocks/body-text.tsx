import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { BLOCKS } from "@contentful/rich-text-types";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, next: any) => {
      return `<p class="mb-4 text-base leading-relaxed text-slate-800">${next(
        node.content
      )}</p>`;
    },
  },
};

export default function render(data: Record<string, any>, index: number) {
  const htmlString = documentToHtmlString(data.content.json, options)
  return <div key={index} dangerouslySetInnerHTML={{ __html: htmlString }} />;
}