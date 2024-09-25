import ApiService from "../apiService";

interface Player {
  id: number;
  [key: string]: any; // Caso o jogador tenha outros campos
}

class PlayerService extends ApiService {
  constructor() {
    super('api/players.json');
  }

  findById(id: number): Promise<any> {
    return this.get(`/${id}`);
  }

  save(player: Player): Promise<any> {
    return this.post(`/`, player);
  }

  update(player: Player): Promise<any> {
    return this.put(`/${player.id}`, player);
  }

  consult(): Promise<any> {
    return this.get('');
  }

  remove(id: number): Promise<any> { // Renomeado para evitar conflito com o método 'delete'
    return this.delete(`/${id}`);
  }
}

export default PlayerService;
