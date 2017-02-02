import React from 'react'

import styles from './styles'

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <View style={[{alignItems: 'center'}]}>
            <Text style={[{backgroundColor: 'rgba(128,128,128,0.5)', padding: 10, color: '#ffffff', borderRadius: 10}]}>This is a bubble</Text>
            <View style={[{}, styles.arrowBottom]}>
            </View>
        </View>
    }
}