import axios from "axios"

axios.defaults.baseURL = `https://frontend-test-assignment-api.abz.agency/api/v1/`;

export const userAPI = {
	getUsers: (pageSize = 3, currentPage = 1) => axios.get(`users?page=${currentPage}&count=${pageSize}`),
	getNextPage: url => axios.get(url),

};
export const regAPI = {
	getPosition: () => axios.get(`positions`),
	getToken: () => axios.get(`token`),
	regUser: (data, token) => axios.post(`users`, data,
		{ headers: { 'Token': token, 'Content-Type': 'multipart/form-data', } })
};