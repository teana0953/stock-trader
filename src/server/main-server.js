import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fir-88dae.firebaseio.com/',
});

instance.defaults.headers.get['Accepts'] = 'application/json';

// const reqInterceptor = HttpClient.interceptors.request.use((config) => {
//     console.log(config);
// });
// const resInterceptor = HttpClient.interceptors.response.use((res) => {
//     console.log(config);
//     return res;
// });

// HttpClient.interceptors.eject(reqInterceptor);
// HttpClient.interceptors.eject(resInterceptor);

export const MainServer = instance;
