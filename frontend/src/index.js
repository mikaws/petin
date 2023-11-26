import http from "http";
import { getPageByRoute } from "./config/getPageByRoute.js";
import { methodNotAllowed } from "./config/methodNotAllowed.js";
import { notFound } from "./config/notFound.js";
import { internalServerError } from "./config/internalServerError.js";
import { getFile } from "./config/getFile.js";


const app = http.createServer();

app.on("request", (req, res) => {
  try {
    // if method isn't GET, return not allowed
    const notAllowed = methodNotAllowed(req, res);
    if (notAllowed) return notAllowed;
    // if route is ok, return page
    const page = getPageByRoute(req, res);
    if (page) return page;
    // if is requesting a file and not a page, return file
    const file = getFile(req, res);
    if (file) return file;
    // if nothing is found, return not found
    return notFound(res);
  } catch (err) {
    console.error(err);
    // if any error occurs, return internal server error
    internalServerError(res);
  }
});

app.listen(3000, () => console.log("Server running at port 3000"));
