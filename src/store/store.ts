import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

import reducerActions from './ducks/assets/reducer'
import reducerUnits from './ducks/units/reducer'
import reducerUsers from './ducks/users/reducer'


const createRootReducer = () => combineReducers({
    assets: reducerActions,
    units: reducerUnits,
    users: reducerUsers
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }