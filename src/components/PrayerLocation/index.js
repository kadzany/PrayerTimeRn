import React from 'React'

import styles from './styles'

import {
    Text,
    View,
    Image
} from 'react-native';

import MapView from 'react-native-maps';

export default class PrayerLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            initialPosition: '',
            lastPosition: '',
        }
        this.watchId = null
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position)
                this.setState({ initialPosition })
            },
            (error) => alert(JSON.stringify(error)),
            // { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
        )

        this.watchId = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({ lastPosition });
        })
    }

    componentWillMount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return <View style={[{flex: 1}]}>
            <MapView  style={[{flex: 1}]}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                />
            <Text>
                <Text style={styles.title}>Initial position: </Text>
                {this.state.initialPosition}
            </Text>
            <Text>
                <Text style={styles.title}>Current position: </Text>
                {this.state.lastPosition}
            </Text>
        </View>
    }
}