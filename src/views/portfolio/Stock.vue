<template>
    <b-col class="stock" sm="6" md="4">
        <b-card class="stock__card" header-tag="header" header-bg-variant="light">
            <template v-slot:header>
                <strong>{{ stock.name }} </strong>
                <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
            </template>
            <b-row align-content="center">
                <b-col lg="8" class="stock__card__col">
                    <b-form-input number="true" v-model.number="quantity" :state="!insufficientQuantity ? null : false" class="stock__card__col__input" type="number" placeholder="Quantity"  debounce="500"></b-form-input>
                    <b-form-invalid-feedback>
                        Quantity not enough
                    </b-form-invalid-feedback>
                </b-col>
                <b-col class="stock__card__col stock__card__col--center">
                    <b-button class="stock__card__col__button" variant="info" @click="sellStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)">Sell</b-button>
                </b-col>
            </b-row>
        </b-card>
    </b-col>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0,
        };
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity;
        },
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock',
        }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };

            this.placeSellOrder(order);

            this.quantity = 0;
        },
    },
};
</script>

<style scoped>
.stock__card {
    margin-bottom: 20px;
}

.stock__card__col--center {
    text-align: center;
}

.stock__card__col__input {
    margin-bottom: 10px;
}

.stock__card__col__button {
    width: 100%;
    max-width: 100px;
}
</style>
