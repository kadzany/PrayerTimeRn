import React from 'react'

import styles from './styles'

import Carousel from '../../components/Carousel'

import PraytimeLabel from '../../components/PraytimeLabel'

import PrayerList from '../../components/PrayerList'

import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native'

const {width, height} = Dimensions.get('window');

/* city and date information label */
const InformationLabel = class extends React.Component {
    constructor(props){
        super(props)
        
    }
    _onPressButton() {
        alert('button pressed')
    }

    render() {
        return <View style={[styles.infoContainer, styles.bottomInfoContainer]}>
            <View style={[{ width: width * 0.5 }, styles.infoContainer]}>
                <Image source={require('./g6.png')} style={[styles.calendarIcon]} resizeMode="contain" />
                <Text style={[styles.dateName]}>January 26th, 2017</Text>
            </View>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={[{ width: width * 0.5 }, styles.infoContainer]}>
                    <Text style={[styles.cityName]}>Bandung, Indonesia</Text>
                    <Image source={require('./path2.png')} style={[styles.positionIcon]} resizeMode="contain" />
                </View>
            </TouchableOpacity>
        </View>
    }
}

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            size: { width, height },
        };

        console.log(this.props.navigator)
    }

    render() {
        return <View style={styles.container}>
            <Carousel style={[styles.carousel, this.state.size]} >
                <PraytimeLabel name="Fajr" time="05:00 AM" />
                <PraytimeLabel name="Dhuhr" time="12:11 AM" />
                <PraytimeLabel name="Asr" time="03:10 PM" />
                <PraytimeLabel name="Maghrib" time="06:10 PM" />
                <PraytimeLabel name="Isya" time="07:03 PM" />
                <InformationLabel />
            </Carousel>
            <View style={[styles.bottomList]}>
                <PrayerList></PrayerList>
            </View>
        </View>
    }
}

