// types/types.ts

export interface Trailer {
    url: string;
    name: string;
    site: string;
    size: number;
    type: string;
  }
  
  export interface Videos {
    trailers: Trailer[];
  }
  
  export interface Genre {
    id: number;
    name: string;
  }
  
  export interface Person {
    id: number;
    photo: string;
    name: string;
    profession: string;
  }
  
  export interface Rating {
    kp: number;
    imdb: number;
  }
  
  export interface CardData {
    id: number;
    name: string;
    year: number;
    description: string;
    shortDescription: string;
    genres: Genre[];
    type: string;
    rating: Rating;
    votes: {
        imdb:number;
    }
    ageRating: number;
    movieLength: string;
    poster: { url: string };
    backdrop: { url: string };
    persons: Person[];
    videos: Videos; // Добавляем тип Videos к CardData
  }