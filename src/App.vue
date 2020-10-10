<template>
    <b-container class="app">
        <app-header />
        <b-row class="app__content">
            <b-col xs="12">
                <transition name="slide" mode="out-in">
                    <router-view />
                </transition>
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

.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateY(-30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-30px);
        opacity: 0;
    }
}
</style>
