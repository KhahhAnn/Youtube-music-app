import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const StartSong = ({item}) => {
   const navigation = useNavigation();
   const ipv4 = "192.168.43.194";
   const [startSong, setStartSong] = useState([])
   const topList = async () => {
      try {
         const response = await fetch(`http://${ipv4}:8080/song/search/findByIsStartSongTrue`);
         const json = await response.json();
         if (JSON.stringify(json._embedded.songs) !== JSON.stringify(startSong)) {
            setStartSong(json._embedded.songs);
         } else {
            console.log("No change in top music data.");
         }
      } catch (error) {
         console.error("Error:", error);
      }
   };
   useEffect(() => {
      topList();
   }, [startSong]);
   const render = ({ item }) => {
      return (
         <View style={styles.startSong}>
            <View style={styles.startSongText}>
               <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate("SongDetail", { song: item })}>
                  <Image source={{ uri: item.image }} style={styles.startSongImage} />
                  <View style={{ marginLeft: 10, width: 240 }}>
                     <Text style={{ fontSize: 16, color: "#fff" }}>{item.songName}</Text>
                     <Text style={{ fontSize: 16, color: "rgba(255,255,255,0.7)" }}>{item.author}</Text>
                  </View>
               </TouchableOpacity>
               <Feather name="more-vertical" size={24} color="white" style={{ marginLeft: 40 }} />
            </View>
         </View>
      );
   }
   return (
      <ScrollView>
         <View style={styles.headerBodyContainer}>
            <Image style={styles.icon} source={{ uri: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg" }} />
            <View style={{ marginTop: 5 }}>
               <Text style={styles.headerBodyText}>MUSIC TO GET YOU STARTED</Text>
               <Text style={styles.headerBodyTextBold}>Welcome Khánh An</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
               <Text style={{ color: "#fff" }}>Play all</Text>
            </TouchableOpacity>
         </View>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.startSongs}>
               <FlatList
                  data={startSong}
                  renderItem={render}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={4}
                  columnWrapperStyle={{ justifyContent: 'space-between' }}
               />    
            </View>
         </ScrollView>
      </ScrollView>
   );
}
const styles = StyleSheet.create({
   headerBodyContainer: {
      marginLeft: 5,
      marginTop: 40,
      display: "flex",
      flexDirection: "row",
      gap: 10
   },
   headerBodyText: {
      fontSize: 12,
      color: "rgba(200,200,200,0.9)"
   },
   headerBodyTextBold: {
      fontSize: 18,
      fontWeight: "700",
      color: "white"
   },
   startSongs: {
      marginTop: 30,
      display: "flex",
      paddingHorizontal: 5,
      flexWrap: "nowrap",
      paddingHorizontal: 5,
   },
   startSong: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 5,
   },
   startSongImage: {
      width: 60,
      height: 60,
   },
   startSongText: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flex: 1,
      justifyContent: "space-between",
      marginBottom: 20
   },
   buttonContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      width: 100,
      height: 30,
      marginLeft: 50,
      borderWidth: 1,
      borderColor: "white",
      marginTop: 10
   },
   icon: {
      width: 50,
      height: 50,
      borderRadius: 50,
   }
})

export default StartSong;