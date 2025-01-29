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
    profession: {
      value: string
    };
  }
  
  export interface Rating {
    kp: number;
    imdb: number;
  }

  export interface Country {
    name: string;
  }
  
  export interface CardData {
    id: number;
    name: string;
    alternativeName: string;
    enName: string;
    year: number;
    description: string;
    shortDescription: string;
    genres: Genre[];
    type: string;
    rating: Rating;
    votes: {
        imdb:number;
        kp: number;
    }
    logo: {
      url: string;
    }
    ageRating: number;
    movieLength: string;
    poster: { url: string };
    backdrop: { url: string };
    persons: Person[];
    countries: Country[];
    videos: Videos; // Добавляем тип Videos к CardData
  }