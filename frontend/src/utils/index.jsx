import axios from "axios";

const url = "http://localhost:5003/api/v1";

export const customFetch = axios.create({
  baseURL: url,
});
