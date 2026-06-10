import { codeToHtml } from "shiki";

export async function highlightCode(code, lang = "javascript") {
  const html = await codeToHtml(code, {
    lang,
    theme: "github-dark",
  });

  return html;
}