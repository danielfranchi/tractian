import { ArrayActions, ItensActive, TypesActive } from './types'

const initialStateActions: ArrayActions = {
    array: [],
    search: []
}

function reducerActions(state = initialStateActions, action: any) {
    switch(action.type) {
        case TypesActive.GET_ASSETS:

            return {
                array: action.payload
            }
        
        case TypesActive.SEARCH_ASSETS:
          
            return {
                ...state,
                search: action.payload
            }

        case TypesActive.UPDATE_ASSETS:
        
              return {
                search: action.payload
              };

        case TypesActive.ADD_ASSETS:
    
        return {
            ...state,
            array: [...state.array, action.payload]
        };

        case TypesActive.DELETE_ASSETS:
            
            const newArray = [...state.array].filter((item: ItensActive) => {
                return item.id !== action.payload;
            });

            return {
                array: newArray,
              };


        case TypesActive.DELETE_NEW:
    
        return {
            array: action.payload

        };
    
        default:
            return state
        }
}

export default reducerActions