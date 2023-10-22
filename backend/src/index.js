import express from "express";
import setupMiddlewares from "./middlewares/index.js";
import setupRoutes from "./routes/index.js";

function start() {
  const app = express();
  setupMiddlewares(app);
  setupRoutes(app);
  app.listen(3333, () => {
    console.log("Server is running at port 3333");
  });
}

start();
