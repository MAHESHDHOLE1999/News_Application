import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_URL = import.meta.env.VITE_NEWS_API_URL;

export const fetchNews = async (page = 1)=>{
    try {
        if (!API_KEY) {
    throw new Error('NewsData API key is not configured. Please add VITE_NEWS_API_KEY to .env');
  }


        const response = await axios.get(API_URL,{
            params: {
                apikey: API_KEY,
                country : 'us',
                category : 'technology',
                // page: page,
                // pagesize : 10,
                // sort: 'latest'
            },
            timeout: 10000,
        });
        return {
            results : response.data.results || [],
            totalResults : response.data.totalResults || 0,
            status : response.data.status || 'error',
        };
    } catch (error) {
        console.error('API Error:', error.message);
    
    if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your NewsData.io credentials.');
    }
    if (error.response?.status === 429) {
      throw new Error('API rate limit exceeded. Please try again later.');
    }
    
    throw new Error('Failed to fetch news. Please try again later.');
    }
}