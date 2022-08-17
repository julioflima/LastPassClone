import { ICard } from '../interfaces/ICard';
import ApiService from './ApiService';

export default class CardsService extends ApiService {
  constructor() {
    const baseUrl = String(process.env.NEXT_PUBLIC_BASE_URL);
    const path = '/cards';

    super({}, baseUrl + path);
  }

  public async getAll(): Promise<ICard[]> {
    return this.api.get('');
  }

  public async get(id: number): Promise<ICard> {
    return this.api.get(`/${id}`);
  }

  public async put(id: number, data: ICard): Promise<void> {
    return this.api.put(`/${id}`, data);
  }

  public async post(data: ICard): Promise<void> {
    return this.api.post('', data);
  }

  public async delete(id: number): Promise<void> {
    return this.api.delete(`/${id}`);
  }
}
