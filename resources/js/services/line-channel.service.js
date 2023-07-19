import axios from 'axios'
import authHeader from './auth-header'

const API_URL = import.meta.env.VITE_BASE_PATH + 'api/'

class LineChannelService {
  getLineChannelSetting(id) {
    return axios.get(API_URL + 'user/getLineChannelSetting/' + id, { headers: authHeader() })
  }
  changeLineSetting(data, id) {
    return axios.put(API_URL + 'user/changeLineChannelSetting', data, { headers: authHeader() })
  }
}

export default new LineChannelService()
