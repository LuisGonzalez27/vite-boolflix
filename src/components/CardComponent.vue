<template>
    <div class="my-card" style="height: 460px;">
        <h4>Titolo: {{ resObtained.title }}</h4>
        <p>Titolo originale: {{ resObtained.original_title }}</p>
        <p>Lingua: {{ resObtained.original_language }}</p>
        <p>Voto: {{ resObtained.vote_average }}</p>
    </div>
</template>
  
<script>
export default {
    name: "CardComponent",
    props: {
        resObtained: Object,
    },
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
        text-transform: uppercase;
    }
}
</style>