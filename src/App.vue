<template>
    <b-container>
        <app-header />
        <b-row>
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
};
</script>

<style>
body {
    padding: 30px;
}
</style>
