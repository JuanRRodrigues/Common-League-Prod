import ApiService from "../apiService";

interface Team {
  id: number;
  [key: string]: any; // Caso a equipe tenha outros campos
}

class TeamService extends ApiService {
  constructor() {
    super('api/team.json');
  }

  findById(id: number) {
    return this.get(`/${id}`);
  }

  save(team: Team) {
    return this.post(`/`, team);
  }

  update(team: Team) {
    return this.put(`/${team.id}`, team);
  }

  consult() {
    return this.get('');
  }

  delete(id: number) {
    return this.delete(`/${id}`);
  }

  autoComplete() {
    return this.get(`/1`);
  }
}

export default TeamService;
