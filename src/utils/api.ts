import axios, { AxiosRequestConfig } from 'axios'
import { CreatePlanParams, LoginUserParams, RegisterUserParams, User } from './types'

const axiosClient = axios.create({
  baseURL: 'http://localhost:3001/api/',
})

const config: AxiosRequestConfig = {
  withCredentials: true,
}

export const registerUser = (data: RegisterUserParams) =>
  axiosClient.post<User>('/register', data)

export const loginUser = (data: LoginUserParams) =>
  axiosClient.post<User>('/auth/login', data, config)

export const getAuthUser = () => axiosClient.post<User>('/auth/status', config)

export const createPlanAPI = (data: CreatePlanParams) => axiosClient.post('/plans', data, config)


