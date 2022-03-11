/*
 * @Author: Mario
 * @Date: 2022-03-05 13:26:13
 * @LastEditTime: 2022-03-05 14:38:53
 * @LastEditors: Mario
 * @Description: 目录树
 */
import { CategoryAction, CategoryTypes } from '@/store/action-types'
const initCategory: any[] = []
const categoryReducer = (state: any[] = initCategory, action: CategoryAction) => {
  switch (action.type) {
    case CategoryTypes.SET_CATEGORY:
      return action.payload
    default:
      return state
  }
}

export default categoryReducer
