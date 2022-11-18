<template>

    <form class="d-flex justify-content-center align-items-center" @submit.prevent="performSearch">
        <div class="d-flex p-4">
            <input type="text" id="search-title" placeholder="Cerca titolo" v-model.trim="text" />
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-danger">Cerca</button>
        </div>
    </form>

</template>

<script>
import { store } from '../store';

export default {
    name: 'AppSearch',
    data() {
        return {
            // proprieta text vuota
            text: ''
        }
    },
    methods: {
        performSearch() {
            console.log(this.text);
            store.params.query = this.text;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>