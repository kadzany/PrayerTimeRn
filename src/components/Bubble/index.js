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
            <Text style={[styles.bubbleBody]}>{this.props.text}</Text>
            <View style={[{}, styles.arrowBottom]}>
            </View>
        </View>
    }
}