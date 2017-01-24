import React from 'React'

import styles from './styles'

import {
    Text,
    View,
    Image
} from 'react-native';

export default class PraytimeLabel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <View style={[styles.prayerContainer]}>
            <Text style={[styles.prayerNameLabel]}>{this.props.name}</Text>
            <Text style={[styles.prayerTimeLabel]}>{this.props.time}</Text>
        </View>
    }
}