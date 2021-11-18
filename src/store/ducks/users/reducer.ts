import { ArrayUsers, TypesUsers } from './types'

const initialStateUsers: ArrayUsers = {
    arrayUsers: []
}

function reducerUnits(state = initialStateUsers, action: any) {
    switch(action.type) {
        case TypesUsers.GET_USERS:

            return {
                arrayUsers: action.payload
            }

        default:
            return state
    }
}

export default reducerUnits