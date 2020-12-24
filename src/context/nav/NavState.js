import React, { useReducer } from 'react'
import NavContext from './navContext'
import navReducer from './navReducer'

import {
    SET_NAV_TYPE,
    REMOVE_NAV_TYPE
} from '../types'

const NavState = props => {
    const initialState = {
        navType: ''
    }

    const [state, dispatch] = useReducer(navReducer, initialState)

    const setNavType = (navType) => {
        dispatch({
            type: SET_NAV_TYPE,
            payload: navType
        })
    }

    const removeNavType = () => {
        dispatch({ type: REMOVE_NAV_TYPE })
    }

    return (
        <NavContext.Provider value={{
            navType: state.navType,
            setNavType,
            removeNavType
        }}>
            {props.children}
        </NavContext.Provider>
    )
}

export default NavState