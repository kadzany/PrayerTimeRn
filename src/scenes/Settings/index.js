import React from 'react'

import styles from './styles'

import LinearGradient from 'react-native-linear-gradient'

import PrayerLocation from '../../components/PrayerLocation'

import {
    View,
    Text,
    Button
} from 'react-native'

export default class Settings extends React.Component {
    constructor(props) {
        super(props)
    }

    _onPressButton() {
        this.props.navigator.pop();
    }

    render() {
        return <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.25, y: 1.0 }}
            colors={['#FDFFF7', '#FEFFED', '#FFFFFF']} style={styles.linearGradient}>
            <View style={styles.container}>
                <View style={styles.settingsPage}>
                    <Text style={styles.heading}>Select your location:</Text>
                </View>
                <PrayerLocation/>
                <Button
                    title="Back"
                    onPress={this._onPressButton.bind(this)}
                    />
            </View>
        </LinearGradient>
    }
}