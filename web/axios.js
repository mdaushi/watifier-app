import axios from 'axios'
export const HTTP = axios.create({
  baseURL: import.meta.env.VITE_URL_API + '/api'
})
