import { getFile } from './getFile.js'

export function notFound(res) {
  const pageNotFoundHTML = getFile("/pages/not-found/index.html");
  res.writeHead(404, { "Content-Type": "text/html" });
  return res.end(pageNotFoundHTML);
}
