import React from 'React'

import styles from './styles'

import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    AsyncStorage
} from 'react-native';

import MapView from 'react-native-maps';

import Geocoder from 'react-native-geocoder';

import Bubble from '../Bubble'

import renderIf from './renderif.js'

const LATITUDE_DELTA = 0
const LONGITUDE_DELTA = 0
const ICON_WIDTH = 64
const ICON_HEIGHT = 64

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
            currentAddress: {},
            showBubble: false
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
            (error) => console.log(JSON.stringify(error)),
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
            },
            showBubble: false
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
                        formattedAddress: res[0].formattedAddress,
                        country: res[0].country,
                        subAdminArea: res[0].subAdminArea
                    }
                })
            })
            .catch(err => console.log(err))
    }

    _onSelectLocationButton() {
        // this.props.navigator.pop()
        this.setState({
            showBubble: true
        })
    }

    _onTapLocation() {
        try {
            AsyncStorage.setItem("locationInfo", JSON.stringify(Object.assign({}, this.state.currentAddress, this.state.currentRegion)))
            this.props.navigator.pop()
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return <View style={[{ flex: 1 }]}>
            <MapView
                style={[{ flex: 1 }]}
                initialRegion={this.state.currentRegion}
                onRegionChange={this.onRegionChange.bind(this)}
                onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                showsCompass={false}
                mapType="standard" />
            <View style={[styles.overlayContainer]}>
                {
                    renderIf(this.state.showBubble)(
                        <TouchableOpacity style={[{ position: 'absolute', top: (height * 0.5) - (ICON_HEIGHT * 1.65), left: 0, width: width, alignItems: 'center' }]}
                            onPress={this._onTapLocation.bind(this)}>
                            <Bubble text="Tap here to pick this location" />
                        </TouchableOpacity>
                    )
                }
                <TouchableOpacity style={[{ position: 'absolute', top: (height * 0.5) - ICON_HEIGHT, left: (width * 0.5) - (ICON_WIDTH * 0.5) }]}
                    onPress={this._onSelectLocationButton.bind(this)}>
                    <Image style={[{ height: ICON_HEIGHT, width: ICON_WIDTH }]} source={require('./g4891.png')} resizeMode="contain" />
                </TouchableOpacity>
                <View style={[{ flex: 1, width: width }, styles.textBubble]}>
                    <Text style={[{ fontWeight: '500', color: '#ffffff' }]}>Current Location:</Text>
                    <Text style={[{ color: '#ffffff' }]}>{this.state.currentAddress.formattedAddress}</Text>
                </View>
            </View>
        </View>
    }
}

// <Text style={[{ flex: 1, fontSize: 8 }, styles.textBubble]}>{"Lat: " + JSON.stringify(this.state.currentRegion.latitude) + ", Lon: " + JSON.stringify(this.state.currentRegion.longitude)}</Text>