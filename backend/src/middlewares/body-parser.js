function bodyParser(app) {
  // body parser (allowing json being parser by the server)
  app.use(json());
}

export default bodyParser;
