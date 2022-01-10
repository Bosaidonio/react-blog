import { LoadingAction } from '@/store/action-types'
import { ActionTypes } from '@/store/action-types'
const initLoading = false

const loadingReducer = (state: boolean = initLoading, action: LoadingAction) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return action.payload
    default:
      return state
  }
}

export default loadingReducer
