
import { v4 as uuidv4 } from 'uuid';


import {types} from './action';
 // import initiate state
import {initialState} from "./initialState"

const postReducer = (state = initialState, action) => {

    switch(action.type){
        case types.ADD_ToDo:
            return {
                ...state, 
                state : state.list.push({
                    id : uuidv4(), 
                    title : action.title,
                    is_compelted : false
                })
            }
        case types.DELETE_ToDo:
            return {
                ...state, 
                list : state.list.filter(list => list.id !== action.id)
            }
        case types.UPDATE_ToDo:
                const listupdated = state.list.find(list => list.id === action.id)
                 listupdated['title'] = action.title ;
                 return {
                     ...state, 
                     state : state.listupdated
                    }
        case types.IS_COMPELETED:
            const list = state.list.find(list => list.id === action.id)
            list['is_compelted'] = true
            return {
                ...state,
                state : state.list
            }
        default :
            return state
    }
}
export default postReducer;