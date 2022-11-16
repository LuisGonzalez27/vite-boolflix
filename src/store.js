import { reactive } from "vue";

export const store = reactive({
    apiURL: "https://api.themoviedb.org/3/",
    movieList: [],
    search: {
        title: "",
    },
});

// 392a39c3c1cdf80661f2e6e2e080e8e0

// https://api.themoviedb.org/3/genre/movie/list?api_key=392a39c3c1cdf80661f2e6e2e080e8e0

// https://api.themoviedb.org/3/search/movie?api_key=392a39c3c1cdf80661f2e6e2e080e8e0&query=a