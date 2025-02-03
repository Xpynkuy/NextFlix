import { CardData} from "@/types/types";
import axios from "axios";


const API_URL = "https://api.kinopoisk.dev/v1.4/movie";

const API_TOKEN = "EY9T3A6-DBDMSBK-NAP8P7D-EJH4AG1";



export const getTitles = async (type?: string, limit: number = 250): Promise<CardData[]> => { // Получаем тайтлы для каталога
  try {
    const response = await axios.get(API_URL, {
      params: {
        type: type === 'movies' ? 'movie' : type === 'series' ? 'tv-series' : undefined, 
        sortField: 'top250',
        sortType: '-1',
        limit,
      },
      headers: {
        'X-API-KEY': API_TOKEN,
      },
    });

    if (response.data?.docs) {
      return response.data.docs;
    }

    return [];
  } catch (error) {
    console.error('Ошибка при запросе данных:', error);
    return [];
  }
};

export const getTitleSearch = async (limit: number = 200): Promise<CardData[]> => { // Все тайтлы для поиска
  try {
    const response = await axios.get(API_URL, {
      params: {
        sortField: 'top250',
        sortType: '-1',
        limit
      },
      headers: {
        'X-API-KEY': API_TOKEN
    }
});

if (response.data && response.data.docs) {
    return response.data.docs;
  }

  return [];
} catch (error) {
    console.error("Ошибка при запросе фильмов:", error);
    return [];
  }
};


  export const getTitleById = async (id: string): Promise<CardData | null> => { // Получаем тайтлы по id
    try {
      const response = await axios.get(`${API_URL}/${id}`, {
        headers: {
          'X-API-KEY': API_TOKEN,
        },
      });
  
      if (response.data) {
        return response.data;
      }
  
      return null;
    } catch (error) {
      console.error('Ошибка при запросе тайтла:', error);
      return null;
    }
  };




export const getTitleByRating = async (limit: number = 10): Promise<CardData[]> => { 
    try {
        const response = await axios.get(API_URL, {
            params: {
                sortField: 'top10',
                sortType: '-1',
                limit
            },
            headers: {
                'X-API-KEY': API_TOKEN
            }
        });
        
        if (response.data && response.data.docs) {
            return response.data.docs;
          }
      
          return [];
        } catch (error) {
            console.error("Ошибка при запросе фильмов:", error);
            return [];
          }
};

export const getCriticsTitle = async (limit: number = 5): Promise<CardData[]> => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                sortField: 'votes.filmCritics',
                sortType: '-1',
                limit
            },
            headers: {
                'X-API-KEY': API_TOKEN
            }
        });
        
        if (response.data && response.data.docs) {
            return response.data.docs;
          }
      
          return [];
        } catch (error) {
            console.error("Ошибка при запросе фильмов:", error);
            return [];
          }
};

export const getTitlesByVotes = async (limit: number = 5): Promise<CardData[]> => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                sortField: 'votes.imdb',
                sortType: '-1',
                limit
            },
            headers: {
                'X-API-KEY': API_TOKEN
            }
        });
        
        if (response.data && response.data.docs) {
            return response.data.docs;
          }
      
          return [];
        } catch (error) {
            console.error("Ошибка при запросе фильмов:", error);
            return [];
          }
};









