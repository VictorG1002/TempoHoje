import axios from 'axios'

const api = axios.create({
  baseURL: 'http://dataservice.accuweather.com'
  // headers: {
  //   'Access-Control-Allow-Origin': '4SIFhGz1AG5RJMIJRLmPBC5sO0onkV6O'
  // }
})

// api.defaults.headers.common['Authorization'] =
//   '4SIFhGz1AG5RJMIJRLmPBC5sO0onkV6O'

export default api
