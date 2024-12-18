import axios from 'axios'

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL || 'http://localhost:3000';

export const api = axios.create({
  baseURL: BASE_API_URL,
})