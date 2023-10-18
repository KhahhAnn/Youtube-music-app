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
               source={{ uri: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg" }}
               style={styles.image}
            />
         </TouchableOpacity>
         <Feather name="plus" size={24} color="black" style={styles.icon} />
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
      backgroundColor: "#fff",
      borderColor: "#fff"
   },

});

export default CreateRadio;
