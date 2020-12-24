import React, { useReducer } from 'react'
import NavContext from './navContext'
import navReducer from './navReducer'

import {
    SET_NAV_STATUS,
    REMOVE_NAV_STATUS
} from '../types'

const NavState = props => {
    const initialState = {
        navStatus: ''
    }

    const [state, dispatch] = useReducer(navReducer, initialState)

    const setNavStatus = (navStatus) => {
        dispatch({
            type: SET_NAV_STATUS,
            payload: navStatus
        })
    }

    const removeNavStatus = () => {
        dispatch({ type: REMOVE_NAV_STATUS })
    }

    return (
        <NavContext.Provider value={{
            navType: state.navStatus,
            setNavStatus,
            removeNavStatus
        }}>
            {props.children}
        </NavContext.Provider>
    )
}

export default NavState