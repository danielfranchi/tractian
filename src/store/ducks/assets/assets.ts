import { action } from 'typesafe-actions'
import {ArrayActions, TypesActive} from './types'

export const getActions = (payload: ArrayActions) => action(TypesActive.GET_ASSETS, payload)

export const searchAssets = (payload: string) => action(TypesActive.SEARCH_ASSETS, payload)

export const updateAssets = (payload: string) => action(TypesActive.UPDATE_ASSETS, payload)

export const addAssets = (payload: ArrayActions) => action(TypesActive.ADD_ASSETS, payload)

export const deleteAssets = (payload: any) => action(TypesActive.DELETE_ASSETS, payload)

export const deleteNew = (payload: ArrayActions) => action(TypesActive.DELETE_NEW, payload)





