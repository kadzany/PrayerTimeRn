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
    cityName: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        paddingBottom: 4,
        paddingLeft: 24,
        fontSize: 14,
        fontWeight: '100',
    },
    positionIcon: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 6,
        height: 16,
        width: 28
    }
})

export default DefaultStyle