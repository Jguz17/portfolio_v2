import {
    SET_NAV_TYPE,
    REMOVE_NAV_TYPE
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_NAV_TYPE:
            return {
                ...state,
                navType: action.payload
            }
        case REMOVE_NAV_TYPE:
            return {
                ...state,
                navType: ''
            }
        default:
            return state
    }
}