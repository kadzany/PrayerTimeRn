import React from 'react'

import styles from '../styles'

import Carousel from '../../components/Carousel'

import {
    View,
    Text,
    Dimensions,
    Image
} from 'react-native'

const {width, height} = Dimensions.get('window');

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            size: { width, height },
        };
    }

    render() {
        return <View style={styles.container}>
            <Carousel
                style={[{ backgroundColor: 'transparent' }, this.state.size]} >
                <View style={[this.state.size]}>
                    <Text>Subuh</Text>
                </View>
                <View style={[this.state.size]}>
                    <Text>Dzuhur</Text>
                </View>
                <View style={[this.state.size]}>
                    <Text>Ashar</Text>
                </View>
                <View style={[this.state.size]}>
                    <Text>Maghrib</Text>
                </View>
                <View style={[this.state.size]}>
                    <Text>Isya</Text>
                </View>
            </Carousel>
        </View>
    }
}

