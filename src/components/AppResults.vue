<template>
    <div class="container">
        <div class="row">
            <div class="col" v-for="(item, index) in store.movieList" :key="index">
                <CardComponent :resObtained="item" />
            </div>
        </div>
    </div>
</template>
  
<script>
import { store } from "../store";
import CardComponent from "./CardComponent.vue";

export default {
    name: "AppResults",
    data() {
        return {
            store,
        };
    },
    components: {
        CardComponent
    },
};
</script>
  
<style lang="scss" scoped>
.row {
    .col {
        flex-basis: calc(100% / 6);
        padding-top: 20px;
    }
}
</style>