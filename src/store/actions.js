import { MainServer } from '../server';

export const loadData = ({ commit }) => {
    MainServer.get('data.json').then((res) => {
        if (res.data) {
            let data = res.data;

            console.log(res.data);

            const stocks = data.stocks;
            const funds = data.funds;
            const stockPortfolio = data.stockPortfolio;

            const portfolio = {
                funds,
                stockPortfolio,
            };

            commit('SET_STOCKS', stocks);
            commit('SET_PORTFOLIO', portfolio);
        }
    });
};
