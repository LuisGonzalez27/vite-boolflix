<template>
  <AppHeader @filterTitle="takeTitles" />
  <main>
    <AppResults />
  </main>
</template>

<script>
import axios from 'axios';
import { store } from "./store";
import AppHeader from './components/AppHeader.vue';
import AppResults from './components/AppResults.vue';

export default {
  components: {
    AppHeader,
    AppResults,
  },
  data() {
    return {
      store,
      endPoint: "search/movie",
      apiKey: "?api_key=392a39c3c1cdf80661f2e6e2e080e8e0",
      apiQuery: "&query=",
      apiLanguage: "&language=it-IT",
    }
  },
  methods: {
    takeTitles() {
      let options = null;
      if (store.search.title) {
        options = {
          params: {
            title: store.search.title,
          },
        };
      };

      const movieApi = store.apiURL + this.endPoint + this.apiKey + this.apiQuery + this.store.search.title + this.apiLanguage;

      axios.get(movieApi, options).then((res) => {
        store.movieList = res.data.results;
      });
    },
  },
};

</script>

<style lang="scss" scoped>
main {
  background-color: gray;
}
</style>