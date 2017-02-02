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
    backgroundColor: 'rgba(128,128,128,0.5)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 0,
  }
});

export default styles