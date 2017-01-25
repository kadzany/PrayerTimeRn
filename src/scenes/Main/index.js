import React from 'react'

import styles from './styles'

import Carousel from '../../components/Carousel'

import PraytimeLabel from '../../components/PraytimeLabel'

import PrayerList from '../../components/PrayerList'

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
                <PraytimeLabel name="Fajr" time="05:00 AM" />
                <PraytimeLabel name="Dhuhr" time="12:11 AM" />
                <PraytimeLabel name="Asr" time="03:10 PM" />
                <PraytimeLabel name="Maghrib" time="06:10 PM" />
                <PraytimeLabel name="Isya" time="07:03 PM" />
            </Carousel>
            <View>
                <Image source={require('./path2.png')} style={[styles.positionIcon]} resizeMode="contain" />
                <Text style={[styles.cityName, { width: this.state.size.width }]}>Bandung, Indonesia</Text>
            </View>
            <View>
                <Image source={require('./path2.png')} style={[styles.positionIcon]} resizeMode="contain" />
                <Text style={[styles.cityName, { width: this.state.size.width }]}>Bandung, Indonesia</Text>
            </View>
            <View style={[styles.bottomList]}>
                <PrayerList></PrayerList>
            </View>
        </View>
    }
}

