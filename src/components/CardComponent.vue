<template>
    <div class="my-card" style="height: 520px;">
        <img :src="imgFilm + item.poster_path" :alt="item.title">
        <ul class="style-none">
            <li>
                <h4>Titolo: {{ item.title }}</h4>
            </li>
            <li>
                <p>Titolo originale: {{ item.original_title }}</p>
            </li>
            <li>
                <p>Voto: {{ item.vote_average }}</p>
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
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as*;

.my-card {
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

img {
    width: 100%;
}

.icon-flag {
    img {
        height: 20px;
        width: 30px
    }
}
</style>