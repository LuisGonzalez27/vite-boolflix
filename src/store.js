import { reactive } from "vue";

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/',
    endpoint: {
        movie: 'search/movie',
        tv: 'search/tv',
    },
    params: {
        // parametri obbligatori del API
        api_key: '392a39c3c1cdf80661f2e6e2e080e8e0',
        query: '',
        // invece optional
        language: 'it-IT',
    },
    movie: [],
    tv: [],
});