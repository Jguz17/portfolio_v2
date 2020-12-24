import {
    SET_NAV_STATUS,
    REMOVE_NAV_STATUS
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_NAV_STATUS:
            return {
                ...state,
                navType: action.payload
            }
        case REMOVE_NAV_STATUS:
            return {
                ...state,
                navType: ''
            }
        default:
            return state
    }
}