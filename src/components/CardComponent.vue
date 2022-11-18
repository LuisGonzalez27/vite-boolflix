<template>
    <div class="my-card" style="height: 520px;">
        <img :src="item.poster_path ? imgFilm + item.poster_path : '/img/imgNotFound.png'">
        <ul class="style-none">
            <li>
                <h4>{{ item.original_title || item.original_name }}</h4>
            </li>
            <li>
                <p>{{ item.title || item.name }}</p>
            </li>
            <li>
                <span v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></span>
            </li>
            <li>
                <p v-if="availableFlag.includes(item.original_language)" class="icon-flag">
                    <img :src="'/img/' + item.original_language + '.png'" :alt="item.original_language + 'Flag'">
                </p>
                <p v-else>Lingua :{{ item.original_language }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    },
    data() {
        return {
            availableFlag: [
                'it', 'de', 'en', 'es', 'fr'
            ],
            imgFilm: 'https://image.tmdb.org/t/p/w342'
        }
    },
    computed: {
        star() {
            return Math.ceil(this.item.vote_average / 2);
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as*;

.my-card {
    width: 220px;
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    background-color: $black;
    color: $white;

    h4 {
        padding-top: 10px;
        font-size: 15px;
        text-transform: uppercase;
    }

    ul {
        list-style-type: none;

        li {
            p {
                margin-bottom: 0rem;
            }
        }
    }
}

.icon-flag {
    img {
        height: 20px;
        width: 30px
    }
}

.fa-star {
    color: yellow;
}
</style>