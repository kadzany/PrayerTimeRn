import { StyleSheet } from 'react-native'

const DefaultStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    carousel: {
        flex: 1.368,
        backgroundColor: 'transparent'
    },
    bottomList: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    infoContainer: {
        flexDirection: 'row',
    },
    bottomInfoContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0
    },
    cityName: {
        flex: 1,
        backgroundColor: 'transparent',
        color: 'white',
        paddingBottom: 4,
        paddingLeft: 0,
        fontSize: 14,
        textAlign: 'right'
    },
    positionIcon: {
        backgroundColor: 'transparent',
        height: 16,
        width: 20
    },
    dateName: {
        flex: 1,
        backgroundColor: 'transparent',
        color: 'white',
        paddingBottom: 4,
        fontSize: 14,
        textAlign: 'left'
    },
    calendarIcon: {
        backgroundColor: 'transparent',
        height: 16,
        width: 28
    },
})

export default DefaultStyle