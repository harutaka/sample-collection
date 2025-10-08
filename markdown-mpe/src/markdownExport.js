const path = require('path')
const { Notebook } = require("crossnote")


async function main() {
  const notebook = await Notebook.init({
    notebookPath: path.resolve(process.cwd()),
    config: {
      previewTheme: 'none.css',
      codeBlockTheme: 'auto.css',
      printBackground: true,
      enableScriptExecution: true, // <= For running code chunks.
    },
  });

  // Get the markdown engine for a specific note file in your notebook.
  const engine = notebook.getNoteMarkdownEngine('./docs/index.md');

  // markdown(gfm) export
  await engine.markdownExport({ runAllCodeChunks: true });

  return process.exit();
}

main();