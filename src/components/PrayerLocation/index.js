import React from 'React'

import styles from './styles'

import {
    Text,
    View,
    Image
} from 'react-native';

import MapView from 'react-native-maps';

const LATITUDE_DELTA = 0
const LONGITUDE_DELTA = 0

export default class PrayerLocation extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            currentRegion: {}
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

    render() {
        return <View style={[{ flex: 1 }]}>
            <MapView
                style={[{ flex: 1 }]}
                initialRegion={this.state.currentRegion}
                onRegionChange={this.onRegionChange.bind(this)}
                mapType="standard"
                >
                <MapView.Marker
                    coordinate={this.state.currentRegion}
                    />
            </MapView>
            <Text>{JSON.stringify(this.state.currentRegion)}</Text>
        </View>
    }
}