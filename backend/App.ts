import express, { Express, Router } from "express";
import cors from "cors";

export default class App {
  routes: Router;
  server: Express;
  constructor(routes: Router) {
    this.routes = routes;
    this.server = express();
    this.middleware();
    this.router();
  }

  middleware() {
    this.server.use(
      cors()
      // origin: ''
    );
    this.server.use(express.json());
  }

  router() {
    this.server.use(this.routes);
  }
}
