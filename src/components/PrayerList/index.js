import React from 'react'

import styles from './styles'

import LinearGradient from 'react-native-linear-gradient';

import { toTitleCase } from '../../containers/Misc'

import {
    ListView,
    View,
    Text,
    Dimensions
} from 'react-native'

const {width, height} = Dimensions.get('window');

const Row = (props) => (
    <View style={styles.prayerItem}>
        <Text style={[styles.prayerName, { width: width * 0.5 }]}>{toTitleCase(props.name)}</Text>
        <Text style={[styles.prayerTime, { width: width * 0.5 }]}>{props.value}</Text>
    </View>
)

export default class PrayerList extends React.Component {
    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            dataSource: ds.cloneWithRows(this.props.times)
        }
    }

    componentWillReceiveProps(nextProps) {
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.setState({
            dataSource: ds.cloneWithRows(nextProps.times)
        })
    }

    render() {
        return <LinearGradient
            start={{ x: 0.0, y: 0.15 }} end={{ x: 0.15, y: 1.0 }}
            colors={['#EDFFF7', '#FEFFED', '#FFFFFF']} style={styles.linearGradient}>
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(data) => <Row {...data} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}>
            </ListView>
        </LinearGradient>
    }
}