<template>
  <AppHeader />
  <main>
    <ItemList :items="store.movie" title="Movies" />
    <ItemList :items="store.tv" title="Tv Series" />
  </main>
</template>

<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import ItemList from './components/ItemList.vue';

export default {
  components: {
    AppHeader,
    ItemList
  },
  data() {
    return {
      store
    }
  },
  // osserva la chiamata
  watch: {
    'store.params.query'(newVal, oldVal) {
      // controllo per non ripetere la ricerca
      if (newVal != oldVal) {
        this.getMovie();
        this.getSeries();
      }
    }
  },
  methods: {
    // metodo per prendere il movie
    getMovie() {
      // perscorso fino a movie
      const apiurl = store.baseUrl + store.endpoint.movie;
      const params = store.params;
      axios.get(apiurl, { params }).then((res) => {
        // i dati sono in
        console.log(res.data.results);
        store.movie = res.data.results;
      });
    },
    getSeries() {
      // perscorso fino a tv
      const apiurl = store.baseUrl + store.endpoint.tv;
      const params = store.params;
      axios.get(apiurl, { params }).then((res) => {
        console.log(res.data.results);
        store.tv = res.data.results;
      });
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  background-color: gray;
}
</style>