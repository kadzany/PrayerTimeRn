import { StyleSheet } from 'react-native'

const PraytimeLabelStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    prayerName: {
        color: 'rgba(64,64,64,1)',
        fontSize: 14,
        fontWeight: '100',
        textAlign: 'left',
        paddingLeft: 10,
        marginTop: 10
    },
    prayerTime: {
        color: 'rgba(64,64,64,1)',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'right',
        paddingRight: 10,
        marginTop: -20

    },
    prayerItem: {

    }
})

export default PraytimeLabelStyle