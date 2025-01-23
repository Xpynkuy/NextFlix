import { CardData } from "@/types/types";
import axios from "axios";


const API_URL = "https://api.kinopoisk.dev/v1.4/movie";

const API_TOKEN = "EY9T3A6-DBDMSBK-NAP8P7D-EJH4AG1";

export const getAnimeByVotes = async(limit : number = 4): Promise<CardData[]> => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                type: 'animated-series',
                sortField: 'votes.kp',
                sortType: "-1",
                limit
            },
            headers: {
                'X-API-KEY': API_TOKEN
            }
        })

       
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

export const getAnimeByRating = async(limit : number = 5): Promise<CardData[]> => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                type: 'animated-series',
                sortField: 'rating.kp',
                sortType: "-1",
                limit
            },
            headers: {
                'X-API-KEY': API_TOKEN
            }
        })

       
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