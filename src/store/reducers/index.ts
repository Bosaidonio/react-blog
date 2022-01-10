import { combineReducers } from 'redux'
import loadingReducer from '@/store/reducers/modules/loadingReducer'

const reducers = combineReducers({
  loading: loadingReducer,
})
export default reducers
export type State = ReturnType<typeof reducers>
