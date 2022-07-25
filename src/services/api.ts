import axios from 'axios'

const api = axios.create({
  baseURL: 'http://apiadvisor.climatempo.com.br',
  headers: {
    'Access-Control-Allow-Origin': '1e4c111c74cbbfef85a7c61edc644ded'
  }
})

api.defaults.headers.common['Authorization'] =
  '1e4c111c74cbbfef85a7c61edc644ded'

export default api
