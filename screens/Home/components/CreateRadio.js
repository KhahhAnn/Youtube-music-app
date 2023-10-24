import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const CreateRadio = () => {
   return (
      <View style={styles.container}>
         <Text style={{ fontSize: 12, color: "#ccc", fontWeight: "bold" }}>CREATE A RADIO</Text>
         <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>Your music tuner</Text>
         <TouchableOpacity>
            <Image
               source={{ uri: "https://png.pngtree.com/png-clipart/20201226/ourlarge/pngtree-music-cassette-used-in-the-radio-png-image_2633425.jpg" }}
               style={styles.image}
            />
            <Feather name="plus" size={24} color="black" style={styles.icon} />
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginTop: 40,
      marginLeft: 5,
      marginRight: 5,
      display: "flex",
      gap: 10
   },
   image: {
      maxWidth: 400,
      height: 200,
   },
   icon: {
      position: 'absolute',
      bottom: 70,
      left: 180,
      padding: 15,
      borderRadius: 35,
      backgroundColor: "#ddd",
      borderColor: "#fff"
   },

});

export default CreateRadio;
