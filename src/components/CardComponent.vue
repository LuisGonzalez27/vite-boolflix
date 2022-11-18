<template>
    <div class="my-container-card">
        <div class="my-card">
            <div class="front">
                <img :src="item.poster_path ? imgFilm + item.poster_path : '/img/imgNotFound.png'">
            </div>
            <div class="back">
                <ul class="list-unstyled">
                    <li>
                        <h4>Titolo&colon; {{ item.original_title || item.original_name }}</h4>
                    </li>
                    <li>
                        <p>Titolo originale&colon; {{ item.title || item.name }}</p>
                    </li>
                    <li>
                        <p v-if="availableFlag.includes(item.original_language)" class="icon-flag">
                            Lingua&colon;
                            <img :src="'/img/' + item.original_language + '.png'"
                                :alt="item.original_language + 'Flag'">
                        </p>
                        <p v-else>Lingua&colon; {{ item.original_language }}</p>
                    </li>
                    <li>
                        Voto&colon;
                        <span v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></span>
                    </li>
                </ul>
            </div>
        </div>
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

.my-container-card {
    width: 342px;
    height: 513px;
    background-color: transparent;
    perspective: 1000px;
}

.my-card {
    position: relative;
    width: 100%;
    height: 100%;
    color: $white;

    h4 {
        padding-top: 10px;
        font-size: 15px;
    }

    ul {
        margin: 20px 20px;

        li {
            p {
                margin-bottom: 0rem;
            }
        }
    }

    img {
        max-width: 100%;
        height: 100%;
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

.my-card .front {
    transform: rotateY(0deg);
}

.my-card .back {
    transform: rotateY(180deg);
    background-color: $black;
}

.my-card .front,
.back {
    position: absolute;
    backface-visibility: hidden;
    transition: 0.4s linear;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.my-card:hover .front {
    transform: rotateY(-180deg);
}

.my-card:hover .back {
    transform: rotateY(0deg);
}
</style>