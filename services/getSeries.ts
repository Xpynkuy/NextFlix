import { CardData } from "@/types/types";
import axios from "axios";

// Базовый URL API
const API_URL = "https://api.kinopoisk.dev/v1.4/movie";

// Ваш API-токен
const API_TOKEN = "EY9T3A6-DBDMSBK-NAP8P7D-EJH4AG1";

// Тип данных фильма


// Функция для получения фильмов
export const getSeriesByVotes = async (limit: number = 4): Promise<CardData[]> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        type: 'tv-series',
        sortField: 'votes.kp',
        sortType: '-1',
        limit
      },
      headers: {
        "X-API-KEY": API_TOKEN,
      },
    });

    // Возвращаем данные
    return response.data.docs;
  } catch (error) {
    console.error("Error fetching new releases:", error);
    throw new Error("Failed to fetch movies.");
  }
};

export const getSeriesByRating = async (limit: number = 5): Promise<CardData[]> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        type: 'tv-series',
        sortField: 'top10',
        sortType: '-1',
        limit
      },
      headers: {
        "X-API-KEY": API_TOKEN,
      },
    });

    // Возвращаем данные
    return response.data.docs;
  } catch (error) {
    console.error("Error fetching new releases:", error);
    throw new Error("Failed to fetch movies.");
  }
};
