import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getHtmlFile(filePath) {
  return fs.readFileSync(path.join(__dirname, '../' + filePath), (err, data) => {
    if (err) throw err;
    return data;
  });
}

export function getPageByRoute(req, res) {
  let page;
  switch (req.url) {
    case req.url.match("/"):
      page = getHtmlFile("pages/home/index.html");
      break;
    case "/login":
      page = getHtmlFile("pages/login/index.html");
      break;
    default:
      break;
  }
  if (!page) return;
  res.writeHead(200, { "Content-Type": "text/html" });
  return res.end(page);
}
