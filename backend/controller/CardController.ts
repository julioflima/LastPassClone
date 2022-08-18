import { Request, Response } from "express";
import CardsService from "../services/CardsService";

const cs = new CardsService();

export default class CardController {
  static async getAll(req: Request, res: Response) {
    try {
      const response = await cs.getAll();

      return res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
  }

  static async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const response = await cs.get(Number(id));

      return res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const dados = req.body;
      const response = cs.post(dados);

      return res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const dados = req.body;
      const response = cs.put(Number(id), dados);

      return res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const response = await cs.delete(Number(id));

      return res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
  }
}
