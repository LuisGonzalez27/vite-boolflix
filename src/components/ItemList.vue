<template>
    <section class="container">
        <h2>Movies</h2>
        <div class="row">
            <div class="col" v-for="(item, index) in items" :key="item.id">
                <CardComponent :item="item" />
            </div>
        </div>
    </section>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
    name: "ItemList",
    props: {
        items: Array
    },
    components: {
        CardComponent
    },
}
</script>

<style lang="scss" scoped>
.row {
    .col {
        flex-basis: calc(100% / 6);
        padding-top: 20px;
    }
}
</style>