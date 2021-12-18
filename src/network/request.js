// import {request} from './request'
import axios from 'axios'

// export function getHomeMultidata(){
//   return request({
//     url:'/home/multidata'
//   })
// }    
export function request(config) {
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
      return res.data
    },
    err => {
      console.log(err);
    })
  return instance(config)
}
