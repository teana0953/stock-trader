<template>
    <b-navbar toggleable="lg" type="dark" variant="secondary">
        <b-navbar-brand to="/">Stock Trader</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/portfolio">Portfolio</b-nav-item>
                <b-nav-item to="/stocks">Stocks</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item right @click="endDay">End Day</b-nav-item>
                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                        Save & Load
                    </template>
                    <b-dropdown-item @click="saveData">Save Data</b-dropdown-item>
                    <b-dropdown-item @click="loadData">Load Data</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-text right>
                    <strong>Funds: {{ funds | currency }}</strong>
                </b-nav-text>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { mapActions } from 'vuex';
import { MainServer } from '../server/index';

export default {
    computed: {
        funds: function() {
            return this.$store.getters.funds;
        },
    },
    methods: {
        ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData'
        }),
        endDay() {
            this.randomizeStocks();
        },
        saveData() {
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks,
            };

            MainServer.put('data.json', data);
        },
        loadData() {
            this.fetchData();
        }
    },
};
</script>
