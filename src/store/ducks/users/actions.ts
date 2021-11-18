import { action } from 'typesafe-actions';
import { ArrayUsers, TypesUsers } from './types'

export const getUsers = (payload: ArrayUsers) => action(TypesUsers.GET_USERS, payload)
