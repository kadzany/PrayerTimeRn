import React from 'react'

import styles from './styles'

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
                style={[styles.carousel, this.state.size]} >
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
            <View>
                <Image source={require('./path2.png')} style={[styles.positionIcon]}  resizeMode="contain"/>
                <Text style={[styles.cityName, {width: this.state.size.width}]}>Bandung, Indonesia</Text>
            </View>
            <View style={[styles.bottomList]}>
                <Text>This is the list</Text>
            </View>
        </View>
    }
}

