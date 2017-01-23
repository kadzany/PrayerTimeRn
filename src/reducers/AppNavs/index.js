import React from 'react'
import { createStore } from 'redux'

const DefaultState = {
    routes: [
        {
            title: 'Prayer Time',
            index: 0
        },
        {
            title: 'Settings',
            index: 1
        }
    ]
}

const GetNewRoute = (state, selectedIndex) => {
    return Object.assign({}, state, {
        routes: [...state.routes.slice(0, selectedIndex),
        Object.assign({}, state.routes[selectedIndex], { selected: true }),
        ...state.routes.slice(selectedIndex + 1)]
    })
}

const AppNavs = (state = DefaultState, action = {}) => {
    switch (action.type) {
        case 'GO_TO_MAIN':
            return GetNewRoute(state, 0)
        case 'GO_TO_SETTINGS':
            return GetNewRoute(state, 1)
        default:
            return state;
    }
}

export default AppNavs