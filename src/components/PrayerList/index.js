import React from 'react'

import PrayTime from '../../containers/PrayTime'

import styles from './styles'

import {
    ListView,
    View,
    Text
} from 'react-native'

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
                key: value[0],
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
            renderRow={(data) => <View>
                <Text>{data.key}</Text>
                <Text>{data.value}</Text>
            </View>}>
        </ListView>
    }
}