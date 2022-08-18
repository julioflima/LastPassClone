import express, { Router } from "express";
import CardController from "../controller/CardController";

export default class Routes {
  routes: Router;

  constructor() {
    this.routes = express.Router();
  }

  init() {
    this.map();
    return this.routes;
  }

  map() {
    this.routes.get("/password-cards/", CardController.getAll);
    this.routes.get("/password-cards/:id", CardController.get);
    this.routes.post("/password-cards", CardController.create);
    this.routes.put("/password-cards/:id", CardController.update);
    this.routes.delete("/password-cards/:id", CardController.delete);
  }
}
