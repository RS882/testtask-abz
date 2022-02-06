import axios from "axios"


const instance = axios.create({
	baseURL: `https://frontend-test-assignment-api.abz.agency/api/v1/`,
});


export const userAPI = {
	getUsers: (pageSize = 3, currentPage = 1) => instance.get(`users?page=${currentPage}&count=${pageSize}`),
	getNextPage: url => axios.get(url),

}