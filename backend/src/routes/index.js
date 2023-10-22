import userRouter from "./user-routes.js";

/**
 * Essa função é responsável por aplicar as rotas
 * criadas na aplicação do Express. Sempre que necessário
 * adicionar novas rotas, faça "app.use(exampleRouter)"
 * @param {Express} app 
 */
function setupRoutes(app) {
  app.use(userRouter);
}

export default setupRoutes;
