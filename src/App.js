import React from 'react'

import {
    Navigator,
    TouchableHighlight,
    Text
} from 'react-native'

import Main from './scenes/Main'
import Settings from './scenes/Settings'

import { createStore } from 'redux'
import AppNavs from './reducers/AppNavs' // incomplete implementation of navigation since not used on child scene

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

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.FloatFromBottom 
    }

    render() {
        return <Navigator
            style={{ flex: 1 }}
            initialRoute={this.state.routes.filter(r => r.selected)[0]}
            renderScene={this.renderScene}
            configureScene={this.configureScene}
            />
    }
}

export default App;