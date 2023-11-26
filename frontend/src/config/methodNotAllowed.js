import { getFile } from './getFile.js'

export function methodNotAllowed(req, res) {
  if (req.method === "GET") return;
  const methodNotAllowedHTML = getFile("/pages/not-allowed/index.html");
  res.writeHead(405, { "Content-Type": "text/html", Allow: "GET" });
  return res.end(methodNotAllowedHTML);
}
