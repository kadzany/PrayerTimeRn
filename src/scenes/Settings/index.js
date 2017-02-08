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

        this.state = {
            language: {}
        }
    }
    
    render() {
        return <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.25, y: 1.0 }}
            colors={['#FDFFF7', '#FEFFED', '#FFFFFF']} style={styles.linearGradient}>
            
            <View style={styles.container}>
                <PrayerLocation navigator={this.props.navigator} />
            </View>
        </LinearGradient>
    }
}

// <Button
//     title="Select this location"
//     onPress={this._onPressButton.bind(this)}
//     />

/*<View style={[{ flexDirection: 'column' }]}>
    <Text>Pick calculation method:</Text>
    <Picker
    style={[{ flex: 1 }]}
        selectedValue={this.state.language}
        onValueChange={(lang) => this.setState({ language: lang })}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="C#" value="cs" />
    </Picker>
</View>*/