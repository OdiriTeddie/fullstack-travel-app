import axios from "axios";

const url = "/api/v1";

export const customFetch = axios.create({
  baseURL: url,
});
