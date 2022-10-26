import axios from "axios";
import { RegisterUserParams, User } from "./types";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001/api/",
});

export const registerUser = (data: RegisterUserParams) =>
  axiosClient.post<User>("/register", data);
