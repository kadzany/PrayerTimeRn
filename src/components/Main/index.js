import React from 'react'

import styles from './Styles'

import {
    View,
    Text
} from 'react-native'

export default class Main extends React.Component {
    render() {
        return <View style={styles.container}>
            <Text>
                This is the main content
            </Text>
        </View>
    }
}

