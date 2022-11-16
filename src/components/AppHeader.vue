<template>
    <header>
        <div class="title">
            <h1 class="my-5">BooFlix</h1>
            <div class="d-flex p-4">
                <input type="text" id="search-title" placeholder="Cerca titolo" v-model.trim="store.search.title" />
                <button type="submit" @click="searchTitles">Cerca</button>
            </div>
        </div>

    </header>
</template>

<script>
import { store } from "../store";

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        };
    },
    methods: {
        searchTitles() {
            this.$emit("filterTitle");
        },
    },
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.title {
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    background-color: black;
    justify-content: space-between;
}

h1 {
    color: red;
}
</style>