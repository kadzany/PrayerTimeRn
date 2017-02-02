import { StyleSheet } from 'react-native'

const CarouselStyle = StyleSheet.create({
    arrowBottom: {
        position: 'relative',
        borderBottomWidth: 5,
        borderBottomColor: 'transparent',
        borderTopWidth: 5,
        borderTopColor: 'rgba(128,128,128,0.75)',
        borderRightWidth: 5,
        borderRightColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftColor: 'transparent',
        width: 0,
        height: 0
    },
    bubbleBody: { 
        backgroundColor: 'rgba(128, 128, 128, 0.75)', 
        padding: 10, 
        color: '#ffffff', 
        borderRadius: 10 
    }
})

export default CarouselStyle