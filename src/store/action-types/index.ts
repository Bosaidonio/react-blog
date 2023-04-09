export interface LoadingAction {
  type: string
  payload: boolean
}
export enum ActionTypes {
  LOADING = 'LOADING',
}
export interface CategoryAction {
  type: string
  payload: any
}
export enum CategoryTypes {
  SET_CATEGORY = 'SET_CATEGORY',
}
