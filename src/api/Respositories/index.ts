import { request } from '@/utils/request'

/**
 * @description: 获取Github仓库列表信息
 * @return {Promise<any>}
 */
export const getGithubRespoList = () => {
  return request({
    url: 'https://api.github.com/users/RedsMario/repos',
    method: 'GET',
    data: {
      a: 1,
    },
  })
}
