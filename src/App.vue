<template>
    <b-container class="app">
        <app-header />
        <b-row class="app__content">
            <b-col xs="12">
                <router-view />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Header from './components/Header.vue';
export default {
    components: {
        appHeader: Header,
    },
    created() {
        this.$store.dispatch('initStocks');
    },
};
</script>

<style>
body {
    padding: 30px;
}

.app__content {
    margin-top: 20px;
}
</style>
