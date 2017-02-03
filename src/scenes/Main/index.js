import React from 'react'

import styles from './styles'

import Carousel from '../../components/Carousel'

import PraytimeLabel from '../../components/PraytimeLabel'

import PrayerList from '../../components/PrayerList'

import PrayTime from '../../containers/PrayTime'

import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'

const {width, height} = Dimensions.get('window');

/* city and date information label */
class InformationLabel extends React.Component {
    constructor(props) {
        super(props)
    }

    _onPressButton() {
        this.props.navigator.push({ index: 1 })
    }

    render() {
        return <View style={[styles.infoContainer, styles.bottomInfoContainer]}>
            <View style={[{ width: width * 0.5 }, styles.infoContainer]}>
                <Image source={require('./g6.png')} style={[styles.calendarIcon]} resizeMode="contain" />
                <Text style={[styles.dateName]}>January 26th, 2017</Text>
            </View>
            <TouchableOpacity onPress={this._onPressButton.bind(this)}>
                <View style={[{ width: width * 0.5 }, styles.infoContainer]}>
                    <Text style={[styles.cityName]}>{this.props.location.subAdminArea == "" ? "" : this.props.location.subAdminArea + ", "}{this.props.location.country}</Text>
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
            location: {
                subAdminArea: "No location",
                country: "tap to select"
            },
            times: {}
        };

        this.pTimes = new PrayTime();
    }



    _updateLocation() {
        AsyncStorage.getItem("locationInfo").then((value) => {

            var obj = JSON.parse(value);

            if (obj == null) return
            if (!obj.hasOwnProperty('subAdminArea') && !obj.hasOwnProperty('country')) return

            if (this.state.location.subAdminArea != obj.subAdminArea || this.state.location.country != obj.country) {

                var t = this.pTimes.computeTime(obj.latitude, obj.longitude)
                this.setState({
                    location: {
                        subAdminArea: obj.subAdminArea == null ? "" : obj.subAdminArea,
                        country: obj.country
                    },
                    times: t
                })

                console.log(t)

            }
        }).done()
    }

    componentWillMount() {
        this._updateLocation()
    }

    componentDidUpdate() {
        this._updateLocation()
    }

    render() {
        return <View style={styles.container}>
            <Carousel style={[styles.carousel, this.state.size]} >
                <PraytimeLabel name="Fajr" time="05:00 AM" />
                <PraytimeLabel name="Dhuhr" time="12:11 AM" />
                <PraytimeLabel name="Asr" time="03:10 PM" />
                <PraytimeLabel name="Maghrib" time="06:10 PM" />
                <PraytimeLabel name="Isya" time="07:03 PM" />
                <InformationLabel navigator={this.props.navigator} location={this.state.location} />
            </Carousel>
            <View style={[styles.bottomList]}>
                <PrayerList times={this.state.times}></PrayerList>
            </View>
        </View>
    }
}

