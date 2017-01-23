import React from 'react'

import {
    Navigator,
    TouchableHighlight,
    Text
} from 'react-native'

import Main from './components/Main'
import Settings from './components/Settings'

import { createStore } from 'redux'
import AppNavs from './reducers/AppNavs'

let store = createStore(AppNavs)

class App extends React.Component {
    constructor() {
        super();
        store.dispatch({
            type: 'GO_TO_MAIN'
        })
        this.state = {
            routes: store.getState().routes
        }
    }

    renderScene(route, navigator) {
        switch (route.index) {
            case 0:
                return <Main navigator={navigator} />
            case 1:
                return <Settings navigator={navigator} />
            default:
                break
        }
    }

    render() {
        return <Navigator
            style={{ flex: 1 }}
            initialRoute={this.state.routes.filter(r => r.selected)[0]}
            renderScene={this.renderScene}
            />
    }
}

export default App;