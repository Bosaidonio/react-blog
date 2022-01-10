import { request } from '@/utils/request'

interface IResponse {
  code: number
  message: string
  timestamp: number
  executeTime: number
  data: any
}
/**
 * @description:
 * @param {IParams} data
 * @return {*}
 */
export const getData = (): Promise<IResponse> => {
  return request('/demo', {
    method: 'GET',
    data: {
      areaCode: 33
    }
  })
}
