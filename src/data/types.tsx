// types.ts
export interface Game {
    id: string; // Ou number, conforme o seu uso
    name: string;
    img: string;
  };

  export interface Foto {
    id: string;
    path: string;
    titulo?: string;
    fonte?: string;
    tagId?: number;
}
