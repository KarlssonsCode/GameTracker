import axios from 'axios';

const API_KEY = '';
const BASE_URL = 'https://api.rawg.io/api/';

export const getSearchedGames = async (query: string): Promise<any> => {
    try {
        const response = await axios.get(`${BASE_URL}games?key=${API_KEY}&search=${query}`);
        console.log('GAMES FETCHED', response)
        return response.data;
    }
    catch (error) {
        console.error('ERROR FETCHING GAMES', error);
        throw error;
    }
}

export const getStartPageGames = async (): Promise<any> => {
    try {
        const response = await axios.get(`${BASE_URL}games?key=${API_KEY}`);
        console.log('START PAGE GAMES FETCHED', response)
        return response.data;
    }
    catch (error) {
        console.error('ERROR FETCHING START PAGE GAMES', error);
        throw error;
    }
}
