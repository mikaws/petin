import bodyParser from "./body-parser.js";
import cors from "./cors.js";

/**
 * Essa função serve para adicionar os middlewares em nossas rotas,
 * assim sempre que alguém bater em qualquer rota da aplicação, o
 * middleware será executado. Nesse caso temos dois exemplos:
 * o bodyParser para conseguirmos manipular json e o cors para
 * o frontend não bloquear nossa aplicação
 * @param {Express} app 
 */
function setupMiddlewares(app) {
  app.use(bodyParser);
  app.use(cors);
}

export default setupMiddlewares;
