import axios from 'axios';

const instance = axios.create({
	baseURL :  'https://my-burger-app-32de9.firebaseio.com'
});

export default instance;