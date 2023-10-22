function cors(app) {
  // cors middleware (allowing any IP's to request this server)
  app.use((req, res, next) => {
    res.set("access-control-allow-origin", "*");
    res.set("access-control-allow-headers", "*");
    res.set("access-control-allow-methods", "*");
    next();
  });
}
export default cors;
