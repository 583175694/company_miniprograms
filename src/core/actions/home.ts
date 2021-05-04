import Taro from '@tarojs/taro'
import {RootState} from '../reducers'
import {AnyAction} from 'redux'
import {ThunkDispatch} from 'redux-thunk'
import {createAction} from 'redux-actions'

const BASR_URL = ''
export function getPokemon(id: number) {
    return async (dispatch: ThunkDispatch<RootState, null, AnyAction>, getState: () => RootState) => {
        try {
            const response = await Taro.request({ url: BASR_URL + `/pokemon/get?id=${id}` })

            dispatch(getPokemonSuccess({
                pokemon: response.data
            }))

            return response.data.card
        } catch (error) {
            console.log('请求错误：', error)
        }
    }
}

export const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS"
export interface getPokemonSuccessPayload {
    pokemon: any
}
const getPokemonSuccess = createAction(
    GET_POKEMON_SUCCESS,
    (payload: getPokemonSuccessPayload) => {
        return payload
    }
)

/**
 * @tabbar状态
*/
export const GET_TABBAR_STATE = "GET_TABBAR_STATE"
export interface tabbarStatePayload {
    tabbarState: any
}
export const getTabbarState = createAction(
    GET_TABBAR_STATE,
    (payload: tabbarStatePayload) => {
        return payload
    }
)

