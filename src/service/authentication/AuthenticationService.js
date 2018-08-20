import axios from 'axios'
import serviceBase from '../serviceBase'
const CurrentInterface = serviceBase.url + 'user/'
const AuthenticationService = {
  // 登录 name password
  login: (info) => {
    return axios.get(CurrentInterface + 'login', info)
  }

}
export default AuthenticationService
