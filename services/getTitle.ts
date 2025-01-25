import { CardData} from "@/types/types";
import axios from "axios";


const API_URL = "https://api.kinopoisk.dev/v1.4/movie";

const API_TOKEN = "EY9T3A6-DBDMSBK-NAP8P7D-EJH4AG1";


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
      
          // Если данных нет, возвращаем пустой массив
          return [];
        } catch (error) {
            console.error("Ошибка при запросе фильмов:", error);
            // Возвращаем пустой массив, чтобы избежать undefined
            return [];
          }
};

export const getCriticsTitle = async (limit: number = 5): Promise<CardData[]> => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                sortField: 'rating.filmCritics',
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
      
          // Если данных нет, возвращаем пустой массив
          return [];
        } catch (error) {
            console.error("Ошибка при запросе фильмов:", error);
            // Возвращаем пустой массив, чтобы избежать undefined
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
      
          // Если данных нет, возвращаем пустой массив
          return [];
        } catch (error) {
            console.error("Ошибка при запросе фильмов:", error);
            // Возвращаем пустой массив, чтобы избежать undefined
            return [];
          }
};

export const getAnimes = async (limit: number = 50): Promise<CardData[]> => {
try {
    const response = await axios.get(API_URL, {
        params: {
            type: 'anime', 
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
  
      // Если данных нет, возвращаем пустой массив
      return [];

}  catch (error) {
    console.error("Ошибка при запросе фильмов:", error);
    // Возвращаем пустой массив, чтобы избежать undefined
    return [];
  }
}

export const getMovies = async (limit: number = 50): Promise<CardData[]> => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                type: 'movie', 
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
      
          // Если данных нет, возвращаем пустой массив
          return [];
    
    }  catch (error) {
        console.error("Ошибка при запросе фильмов:", error);
        // Возвращаем пустой массив, чтобы избежать undefined
        return [];
      }
    }


    export const getSeries = async (limit: number = 50): Promise<CardData[]> => {
        try {
            const response = await axios.get(API_URL, {
                params: {
                    type: 'tv-series', 
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
          
              // Если данных нет, возвращаем пустой массив
              return [];
        
        }  catch (error) {
            console.error("Ошибка при запросе фильмов:", error);
            // Возвращаем пустой массив, чтобы избежать undefined
            return [];
          }
        }
