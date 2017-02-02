import React from 'React'

import styles from './styles'

import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

import MapView from 'react-native-maps';

import Geocoder from 'react-native-geocoder';

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
            // { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
        )

        // this.watchId = navigator.geolocation.watchPosition((position) => {
        //     this.setState({
        //         currentRegion: {
        //             latitude: position.coords.latitude,
        //             longitude: position.coords.longitude,
        //             latitudeDelta: LATITUDE_DELTA,
        //             longitudeDelta: LONGITUDE_DELTA,
        //         }
        //     });
        // })
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

    render() {
        return <View style={[{ flex: 1 }]}>
            <MapView
                style={[...StyleSheet.absoluteFillObject, { flex: 1 }]}
                initialRegion={this.state.currentRegion}
                onRegionChange={this.onRegionChange.bind(this)}
                onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                mapType="standard" />
            <View style={[styles.overlayContainer]}>
                <Image style={[{ position: 'absolute', height: ICON_HEIGHT, width: ICON_WIDTH, top: (height * 0.5) - ICON_HEIGHT, left: (width * 0.5) - (ICON_WIDTH * 0.5) }]} source={require('./path4971.png')} resizeMode="contain" />
                <Text style={[{ flex: 1, fontSize: 8 }, styles.textBubble]}>{"Lat: " + JSON.stringify(this.state.currentRegion.latitude) + ", Lon: " + JSON.stringify(this.state.currentRegion.longitude)}</Text>
                <Text style={[{ flex: 1 }, styles.textBubble]}>{this.state.currentAddress.address}</Text>
            </View>
        </View>
    }
}