import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const YoutubeMusicLogo = ({ size }) => {
   const customStyles = {
      logoContainer: {
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
      },
      redCircle: {
         backgroundColor: 'red',
         borderRadius: 50,
         width: size || 100,
         height: size || 100,
         alignItems: 'center',
         justifyContent: 'center',
         marginRight: 10,
      },
      youtubeIcon: {
         position: 'absolute',
      },
   };

   return (
      <View style={customStyles.logoContainer}>
         <View style={customStyles.redCircle}>
            <AntDesign
               name="youtube"
               size={size || 60} 
               color="white"
               style={customStyles.youtubeIcon}
            />
         </View>
      </View>
   );
};

export default YoutubeMusicLogo;
