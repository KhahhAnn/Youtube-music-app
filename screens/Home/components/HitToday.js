import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const hits = [
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Better Off",
      auth: "(Alone, Pt.III)"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Spectre",
      auth: ""
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Love Is A Drug",
      auth: "(feat. Anne Gudr...)"
   },
]

const HitToday = () => {
   return (
      <ScrollView>
         <LinearGradient colors={["rgba(202,239,215,0.7)", "rgba(245,191,215,0.7)", "rgba(171,201,233,0.7)"]} style={styles.container}>
            <View style={styles.headerContainer}>
               <Image source={{ uri: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg" }} style={{ width: 100, height: 100 }} />
               <View>
                  <Text style={styles.text}>Chroma: Today's Dance Hits</Text>
                  <Text style={styles.text}>Youtube Music</Text>
               </View>
            </View>
            {
               hits.map((hit, index) => (
                  <TouchableOpacity key={index} style={{ display: "flex", flexDirection: "row", marginBottom: 20, alignItems: "center", gap: 10 }}>
                     <Image source={{ uri: hit.img }} style={{ width: 50, height: 50 }} />
                     <Text style={{ fontWeight: "500" }}>{hit.name} {hit.auth}</Text>
                  </TouchableOpacity>
               ))
            }
            <View style={{ display: "flex", flexDirection: "row", marginBottom: 20, alignItems: "center", gap: 30 }}>
               <TouchableOpacity>
                  <AntDesign name="caretright" size={16} color="black" style={{ ...styles.icon, backgroundColor: "rgba(160,160,160,0.9)", color: "white" }} />
               </TouchableOpacity>
               <TouchableOpacity>
                  <Feather name="radio" size={16} color="black" style={styles.icon} />
               </TouchableOpacity>
               <TouchableOpacity>
                  <Entypo name="add-to-list" size={16} color="black" style={styles.icon} />
               </TouchableOpacity>
            </View>
         </LinearGradient>
      </ScrollView>
   );
}
const styles = StyleSheet.create({
   container: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 40,
      backgroundColor: "rgba(0,0,0, 0.6)",
      margin: "auto",
      padding: 20,
      borderRadius: 10,
   },
   headerContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 20,
      marginBottom: 40,
      alignItems: "center"
   },
   text: {
      fontWeight: "bold",
      fontSize: 19,
      marginBottom: 5
   },
   iconPlay: {
      backgroundColor: "rgba(255,255,255,0.5)"
   },
   icon: {
      color: "#ccc",
      padding: 10,
      borderRadius: 50,
      backgroundColor: "rgba(0,0,0,0.5)",
      borderWidth: 0.5,
      borderColor: "#ccc",
      textAlign: "center",
      alignItems: "center"
   }
})
export default HitToday;