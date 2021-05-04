import { handleActions, Action, Reducer } from "redux-actions"
import { GET_TABBAR_STATE } from "../actions/home"

export interface HomeState {
  tabbarState: number
}

let defaultStatus = {
  tabbarState: 0
}

function getTabbarStateHandleAction(state: HomeState, action: Action<any>) {
  return Object.assign({}, state, action.payload)
}

// Reducer
export const HomeReducer: Reducer<HomeState, any> = handleActions<any>(
  {
    [GET_TABBAR_STATE]: getTabbarStateHandleAction,
  },
  defaultStatus
)
