import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getFile(req, res) {
  let contentType;
  if (req.url?.match(/.js/g)) {
    contentType = "application/javascript";
  } else if (req.url?.match(/.css/g)) {
    contentType = "text/css";
  } else if (req.url?.match(/.svg/g)) {
    contentType = "image/svg+xml";
  }
  if (!contentType) return;
  const file = fs.readFileSync(path.join(__dirname, '../' + req.url), (err, data) => {
    if (err) throw err;
    return data;
  });
  res.writeHead(200, { "Content-Type": contentType });
  return res.end(file);
}
