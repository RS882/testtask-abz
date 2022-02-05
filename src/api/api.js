import axios from "axios"

const baseURL = `https://frontend-test-assignment-api.abz.agency/api/v1/`;

const instance = axios.create({

	baseURL: `https://frontend-test-assignment-api.abz.agency/api/v1/`,
});


export const userAPI = {
	getUsers: (currentPage = 1, pageSize = 3) => instance.get(`users?page=${currentPage}&count=${pageSize}`)

}