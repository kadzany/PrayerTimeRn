import { StyleSheet } from 'react-native'

const PraytimeLabelStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    prayerName: {
        color: 'rgba(96, 128, 128, 1)',
        fontSize: 18,
        fontWeight: '100',
        textAlign: 'left',
        padding: 10,
    },
    prayerTime: {
        color: 'rgba(148, 148, 124, 1)',
        fontSize: 15,
        fontWeight: '500',
        alignSelf: 'flex-end',
        textAlign: 'right',
        padding: 10,
    },
    prayerItem: {
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#aaa',
    },
    linearGradient: {
        flex: 1,
    },
    buttonText: {
        backgroundColor: 'transparent',
    },
})

export default PraytimeLabelStyle