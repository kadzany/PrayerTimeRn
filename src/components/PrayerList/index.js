import React from 'react'

import PrayTime from '../../containers/PrayTime'

import styles from './styles'

import {
    ListView,
    View,
    Text,
    Dimensions
} from 'react-native'

const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

const {width, height} = Dimensions.get('window');

const Row = (props) => (
    <View style={styles.prayerItem}>
        <Text style={[styles.prayerName, {width: width * 0.5}]}>{toTitleCase(props.name)}</Text>
        <Text style={[styles.prayerTime, {width: width * 0.5}]}>{props.value}</Text>
    </View>
)

export default class PrayerList extends React.Component {
    constructor() {
        super()
        var pTimes = new PrayTime();
        var times = pTimes.computeTime();
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        var entries = Object.entries(times)
        var map = []
        entries.forEach((value) => {
            map.push({
                name: value[0],
                value: value[1]
            })
        });

        this.state = {
            dataSource: ds.cloneWithRows(map)
        }
    }
    render() {
        return <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={(data) => <Row {...data} />}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}>
        </ListView>
    }
}