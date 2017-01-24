import { StyleSheet } from 'react-native'

const PraytimeLabelStyle = StyleSheet.create({
    prayerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    prayerNameLabel: {
        color: 'rgba(255,255,255,0.75)',
        fontSize: 28,
        fontWeight: '100',
        textAlign: 'center',
        textShadowColor: 'rgba(0,0,0,0.25)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
    },
    prayerTimeLabel: {
        color: 'rgba(255,255,255,0.75)',
        fontSize: 68,
        fontWeight: '100',
        textAlign: 'center',
        textShadowColor: 'rgba(0,0,0,0.25)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
    }
})

export default PraytimeLabelStyle