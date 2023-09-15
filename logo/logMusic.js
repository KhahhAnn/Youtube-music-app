import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const YoutubeMusicLogo = () => {
   return (
      <View style={styles.logoContainer}>
         <View style={styles.redCircle}>
            <AntDesign
               name="youtube"
               size={60}
               color="white"
               style={styles.youtubeIcon}
            />
         </View>
         <View style={styles.musicNote}></View>
      </View>
   );
};

const styles = StyleSheet.create({
   logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   redCircle: {
      backgroundColor: 'red',
      borderRadius: 50,
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
   },
   youtubeIcon: {
      position: 'absolute',
   },
   // musicNote: {
   //    // backgroundColor: 'white',
   //    width: 20,
   //    height: 40,
   //    borderTopLeftRadius: 10,
   //    borderTopRightRadius: 10,
   //    borderBottomLeftRadius: 10,
   //    position: 'relative',
   //    transform: [{ rotate: '45deg' }],
   // },
});

export default YoutubeMusicLogo;