import axiosService from './../commons/axiosService'
import { API_ENDPOIN } from './../constants'

const endpoin = 'task'

export const getListTask = () => {
  return axiosService.get(`${API_ENDPOIN}${endpoin}`)
}

export const deleteTask = id => {
  return axiosService.delete(`${API_ENDPOIN}${endpoin}/${id}`)
}
