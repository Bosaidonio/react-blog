import { Dispatch } from 'redux'
import { LoadingAction } from '@/store/action-types'

export const editLoadingState = (loadingState: boolean) => {
  return (dispatch: Dispatch<LoadingAction>) => {
    dispatch({
      type: 'loading',
      payload: loadingState,
    })
  }
}
