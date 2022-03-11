import { combineReducers } from 'redux'
import loadingReducer from '@/store/reducers/modules/loadingReducer'
import categoryReducer from '@/store/reducers/modules/categoryReducer'

const reducers = combineReducers({
  loading: loadingReducer,
  category: categoryReducer,
})
export default reducers
export type State = ReturnType<typeof reducers>
