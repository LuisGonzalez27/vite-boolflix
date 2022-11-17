<template>
    <div class="my-card" style="height: 520px;">
        <img :src="imgFilm + resObtained.poster_path" :alt="resObtained.title">
        <ul class="style-none">
            <li>
                <h4>Titolo: {{ resObtained.title }}</h4>
            </li>
            <li>
                <p>Titolo originale: {{ resObtained.original_title }}</p>
            </li>
            <li>
                <p>Voto: {{ resObtained.vote_average }}</p>
            </li>
            <li>
                <p v-if="availableFlag.includes(resObtained.original_language)" class="icon-flag">
                    <img :src="'/img/' + resObtained.original_language + '.png'"
                        :alt="resObtained.original_language + 'Flag'">
                </p>
                <p v-else> Lingua :{{ resObtained.original_language }}</p>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: "CardComponent",
    props: {
        resObtained: Object,
    },
    data() {
        return {
            availableFlag: [
                'it', 'de', 'en', 'es', 'fr'
            ],
            imgFilm: 'https://image.tmdb.org/t/p/w342'
        }
    }
};
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

.icon-flag {
    img {
        height: 20px;
        width: 30px
    }
}
</style>