import { ArrayUnits, TypesUnits } from './types'

const initialStateUnits: ArrayUnits = {
    arrayUnits: [],
    companies: []
}

function reducerUnits(state = initialStateUnits, action: any) {
    switch(action.type) {
        case TypesUnits.GET_UNITS:

            return {
                ...state,
                arrayUnits: action.payload
            }

        case TypesUnits.GET_COMPANIES:

            return {
                ...state,
                companies: action.payload
            }

        default:
            return state
    }
}

export default reducerUnits