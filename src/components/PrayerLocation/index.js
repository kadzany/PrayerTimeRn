import React from 'React'

import styles from './styles'

import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import MapView from 'react-native-maps';

import Geocoder from 'react-native-geocoder';

import Bubble from '../Bubble'

const LATITUDE_DELTA = 0
const LONGITUDE_DELTA = 0
const ICON_WIDTH = 48
const ICON_HEIGHT = 48

const {width, height} = Dimensions.get('window');

export default class PrayerLocation extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentRegion: {
                latitude: LATITUDE_DELTA,
                longitude: LONGITUDE_DELTA,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            currentAddress: []
        }
        let watchId = null
    }

    componentDidMount() {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    currentRegion: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                });
            },
            (error) => alert(JSON.stringify(error)),
            //{ enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
        )

        this.watchId = navigator.geolocation.watchPosition((position) => {
            this.setState({
                currentRegion: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }
            });
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    onRegionChange(region) {
        this.setState({
            currentRegion: {
                latitude: region.latitude,
                longitude: region.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        });
    }

    onRegionChangeComplete(region) {
        var addressPosition = {
            lat: region.latitude,
            lng: region.longitude
        };

        Geocoder.geocodePosition(addressPosition)
            .then(res => {
                this.setState({
                    currentAddress: {
                        address: res[0].formattedAddress
                    }
                })
            })
            .catch(err => console.log(err))
    }

    _onSelectLocationButton() {
        // this.props.navigator.pop()
    }

    render() {
        return <View style={[{ flex: 1 }]}>
            <MapView
                style={[{ flex: 1 }]}
                initialRegion={this.state.currentRegion}
                onRegionChange={this.onRegionChange.bind(this)}
                onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                mapType="standard" />
            <View style={[styles.overlayContainer]}>
                <TouchableOpacity style={[{ position: 'absolute', top: (height * 0.5) - (ICON_HEIGHT * 1.9), left: 0, width: width, alignItems: 'center'}]}>
                    <Bubble />
                </TouchableOpacity>
                <TouchableOpacity style={[{ position: 'absolute', top: (height * 0.5) - ICON_HEIGHT, left: (width * 0.5) - (ICON_WIDTH * 0.5) }]}
                    onPress={this._onSelectLocationButton.bind(this)}>
                    <Image style={[{ height: ICON_HEIGHT, width: ICON_WIDTH }]} source={require('./g4891.png')} resizeMode="contain" />
                </TouchableOpacity>
                <View style={[{ flex: 1 }, styles.textBubble]}>
                    <Text style={[{ fontWeight: '500', fontSize: 11, color: '#ffffff' }]}>Current Location:</Text>
                    <Text style={[{ fontSize: 10, color: '#ffffff' }]}>{this.state.currentAddress.address}</Text>
                </View>
            </View>
        </View>
    }
}

// <Text style={[{ flex: 1, fontSize: 8 }, styles.textBubble]}>{"Lat: " + JSON.stringify(this.state.currentRegion.latitude) + ", Lon: " + JSON.stringify(this.state.currentRegion.longitude)}</Text>