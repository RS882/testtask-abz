import axios from "axios"
// базовый URL
axios.defaults.baseURL = `https://frontend-test-assignment-api.abz.agency/api/v1/`;
// API для  списка подбзователей
export const userAPI = {
	// стартовый запрос
	getUsers: (pageSize = 3, currentPage = 1) => axios.get(`users?page=${currentPage}&count=${pageSize}`),
	// при нажатие кнопки show more
	getNextPage: url => axios.get(url),
};
// API для регистарции нового пользователя
export const regAPI = {
	// получение списка позиций
	getPosition: () => axios.get(`positions`),
	// получение токена для post запроса
	getToken: () => axios.get(`token`),
	//  post запрос
	regUser: (data, token) => axios.post(`users`, data,
		{ headers: { 'Token': token, 'Content-Type': 'multipart/form-data', } })
};