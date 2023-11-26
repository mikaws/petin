import { getFile } from './getFile.js'

export function internalServerError(res) {
  const internalServerErrorHTML = getFile("pages/server-error/index.html");
  return res.end(internalServerErrorHTML);
}
