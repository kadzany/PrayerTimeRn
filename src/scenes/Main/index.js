import React from 'react'

import styles from '../styles'

import Carousel from '../../components/Carousel'

import {
    View,
    Text,
    Dimensions
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
            <Text>Carousel</Text>
            <Carousel
                style={this.state.size}
                >
                <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}><Text>1</Text></View>
                <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>2</Text></View>
                <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Text>3</Text></View>
            </Carousel>
        </View>
    }
}

