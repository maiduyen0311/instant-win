import axios from 'axios'
import authHeader from './auth-header'

const API_URL = import.meta.env.VITE_BASE_PATH + 'api/auth/'

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        email: user.email,
        password: user.password,
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  checklogin() {
    return axios.get(API_URL + 'checklogin', { headers: authHeader() })
  }

  logout() {
    return axios.get(API_URL + 'logout', { headers: authHeader() })
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
    })
  }
}

export default new AuthService()
