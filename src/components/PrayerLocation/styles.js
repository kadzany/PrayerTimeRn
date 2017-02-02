import {StyleSheet} from 'react-native'

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
  overlayContainer:{ 
    flexDirection: 'column', 
    position: 'absolute' 
  },
  textBubble:{
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 0,
  }
});

export default styles