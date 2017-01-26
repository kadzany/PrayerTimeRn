import { StyleSheet } from 'react-native'

const PraytimeLabelStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    prayerName: {
        color: 'rgba(64,64,64,1)',
        fontSize: 19,
        fontWeight: '100',
        textAlign: 'left',
        padding: 10,
    },
    prayerTime: {
        color: 'rgba(64,64,64,1)',
        fontSize: 19,
        fontWeight: '500',
        alignSelf: 'flex-end',
        textAlign: 'right',
        padding: 10,
    },
    prayerItem: {
        flexDirection: 'row',
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#aaa',
    },
})

export default PraytimeLabelStyle