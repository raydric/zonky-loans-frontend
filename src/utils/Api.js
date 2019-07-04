import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.zonky.cz/',
    timeout: 1000,
    headers: {
        'X-Size': 100,
        'User-Agent': 'AverageLoans/1.0 https://github.com/raydric/zonky-loans-frontend'
    }
});
