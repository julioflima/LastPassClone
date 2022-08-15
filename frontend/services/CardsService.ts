import { ICard } from '../interfaces/ICard';
import ApiService from './ApiService';

export default class CardsService extends ApiService {
  constructor() {
    const baseUrl = String(process.env.BASE_URL);
    const path = '/cards';

    super({}, baseUrl + path);
  }

  public async get(): Promise<ICard[]> {
    return this.api.get('');
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
