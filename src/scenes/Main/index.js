import React from 'react'

import styles from './styles'

import Carousel from '../../components/Carousel'

import PraytimeLabel from '../../components/PraytimeLabel'

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
            <Carousel style={[styles.carousel, this.state.size]} >
                <PraytimeLabel name="Fajr" time="05:00 AM"/>
                <PraytimeLabel name="Dhuhr" time="05:00 AM"/>
                <PraytimeLabel name="Asr" time="05:00 AM"/>
                <PraytimeLabel name="Maghrib" time="05:00 AM"/>
                <PraytimeLabel name="Isya" time="05:00 AM"/>
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

