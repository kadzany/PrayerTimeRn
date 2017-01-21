import React from 'react'
import { createStore } from 'redux'

const DefaultState = {
    routes: [
        {
            name: 'Main',
            index: 0
        },
        {
            name: 'Settings',
            index: 1
        }
    ]
}

const Navigation = (state = DefaultState, action = {}) => {
    switch (action.type) {
        case 'GO_TO_MAIN':
            return Object.assign({}, state, {
                routes: [...state.routes.slice(0, 0),
                state.routes.concat(state.routes[0].selected = true),
                ...state.routes.concat(state.routes.slice(1))]
            });
        case 'GO_TO_SETTINGS':
            return Object.assign({}, state, {
                routes: [...state.routes.slice(0, 1),
                state.routes.concat(state.routes[1].selected = true),
                ...state.routes.concat(state.routes.slice(2))]
            });
        default:
            return state;
    }
}
export default Navigation