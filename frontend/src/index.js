import http from "http";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = http.createServer();

function getHtmlFile(filePath) {
  return fs.readFileSync(
    path.join(__dirname, filePath),
    (err, data) => {
      if (err) throw err;
      return data;
    }
  );
}

app.on("request", (req, res) => {
  try {
    // tela caso método HTTP seja diferente de GET
    if (req.method !== "GET") {
      const methodNotAllowedHTML = getHtmlFile(
        "/pages/not-allowed/index.html"
      );
      res.writeHead(405, { "Content-Type": "text/html", Allow: "GET" });
      return res.end(methodNotAllowedHTML);
    }
    // tela inicial
    if (req.url === "/") {
      const homeHTML = getHtmlFile("/pages/home/index.html");
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(homeHTML);
    }
    // se requisitado um arquivo javascript, retorna o arquivo
    else if (req.url.match(/.js/g)) {
      const js = getHtmlFile(req.url);
      res.writeHead(200, { "Content-Type": "application/javascript" });
      return res.end(js);
    }
    // se requisitado um arquivo css, retorna o arquivo
    else if (req.url.match(/.css/g)) {
      const css = getHtmlFile(req.url);
      res.writeHead(200, { "Content-Type": "text/css" });
      return res.end(css);
    }
    // tela caso rota não exista no sistema
    else {
      const pageNotFoundHTML = getHtmlFile("/pages/not-found/index.html");
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end(pageNotFoundHTML);
    }
  } catch (err) {
    // caso algum erro aconteça, retorna uma tela de error
    console.error(err);
    const internalServerErrorHTML = getHtmlFile(
      "pages/server-error/index.html"
    );
    return res.end(internalServerErrorHTML);
  }
});

app.listen(3000, () => console.log("Server running at port 3000"));
