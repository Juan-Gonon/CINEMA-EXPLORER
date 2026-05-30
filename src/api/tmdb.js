import axios from 'axios'

export const tmdbClient = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

//console.log(import.meta.env.VITE_TMDB_BASE_URL)

tmdbClient.interceptors.request.use(
  (config) => {
    // import api_key
    const apikey = import.meta.env.VITE_TMDB_API_KEY

    // validation api_key
    if (!apikey) {
      console.error('Error: api_key no está definida en el entorno')
    }

    // inicialización config.param
    config.params = {
      api_key: apikey,
      language: 'es-ES',
      ...config.params,
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
