<template>
    <b-col class="stock" sm="6" md="4">
        <b-card class="stock__card" :header-html="headerHtml" header-tag="header" header-bg-variant="success">
            <b-row align-content="center">
                <b-col lg="8" class="stock__card__col">
                    <b-form-input class="stock__card__col__input" type="number" placeholder="Quantity"></b-form-input>
                </b-col>
                <b-col class="stock__card__col stock__card__col--center">
                    <b-button class="stock__card__col__button" variant="success">Buy</b-button>
                </b-col>
            </b-row>
        </b-card>
    </b-col>
</template>

<script>
export default {
    data() {
        return {
            headerHtml: `
            NAME <small>(Price: PRICE)</small>
            `,
        };
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
