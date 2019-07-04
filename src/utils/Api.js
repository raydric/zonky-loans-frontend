import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.zonky.cz/',
    timeout: 1000,
    headers: {'X-Size': 100}
});
