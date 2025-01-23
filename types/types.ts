export interface Genre {
    id: number;
    name: string;
}
export interface CardData {
    id: number;
    name: string;
    year: number;
    description: string;
    genres: Genre[];
    type: string;
    rating: { kp: number };
    poster: { url: string };
    backdrop: {url: string}
  }






  