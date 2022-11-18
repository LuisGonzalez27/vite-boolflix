<template>
    <header>
        <div class="container title ">
            <img class="logo" src="/img/netflixLogo.png" alt="Logo">
            <AppSearch />
        </div>
    </header>
</template>

<script>
import AppSearch from './AppSearch.vue';

export default {
    name: "AppHeader",
    components: { AppSearch }
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

header {
    background-color: $black;
}

.title {
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    justify-content: space-between;
}

.logo {
    height: 40px;
}
</style>