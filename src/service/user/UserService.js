import axios from 'axios'
import serviceBase from '../serviceBase'
const CurrentInterface = serviceBase.url
const UserService = {
  // 创建新用户
  foundNewUser: (info) => {
    return axios.post(CurrentInterface + 'user', info)
  }

}
export default UserService
