import axiosService from './../commons/axiosService'
import { API_ENPOIN } from './../constants'

const endpoin = 'task'

export const getListTask = () => {
  return axiosService.get(`${API_ENPOIN}${endpoin}`)
}
