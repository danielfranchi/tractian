import { action } from 'typesafe-actions';
import { ArrayUnits, TypesUnits } from './types'

export const getUnits = (payload: ArrayUnits) => action(TypesUnits.GET_UNITS, payload)

export const getCompanies = (payload: ArrayUnits) => action(TypesUnits.GET_COMPANIES, payload)


