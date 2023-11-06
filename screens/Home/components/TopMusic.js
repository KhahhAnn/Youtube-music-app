
import { Feather, Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";


const TopMusic = ({ item }) => {
   // const ipv4 = "192.168.43.194";
   // const ipv4 = "172.20.10.3";
   // const ipv4 = "172.20.10.4";
   // const ipv4 = "192.168.51.102";
   // const ipv4 = "10.0.37.50";
   const ipv4 = "192.168.1.22";

   const [topMusicList, setTopMusicList] = useState([])
   const navigation = useNavigation();
   const [menuVisibility, setMenuVisibility] = useState({});
   const toggleMenu = (itemId) => {
      setMenuVisibility({
         ...menuVisibility,
         [itemId]: !menuVisibility[itemId],
      });
   };
   const topList = async () => {
      try {
         const response = await fetch(`http://${ipv4}:8080/song/search/findByRankingLessThanOrderByRanking?ranking=11`);
         const json = await response.json();
         if (JSON.stringify(json._embedded.songs) !== JSON.stringify(topMusicList)) {
            setTopMusicList(json._embedded.songs);
         } else {
            console.log("No change in top music data.");
         }
      } catch (error) {
         console.error("Error:", error);
      }
   };
   useEffect(() => {
      topList();
   }, [topMusicList]);
   const render = ({ item }) => {
      return (
         <View style={styles.topSong}>
            <View style={[styles.topSongText]}>
               <TouchableOpacity
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "center",
                     alignItems: "center",
                     maxWidth: 500
                  }}
                  onPress={() => navigation.navigate("SongDetail", { song: item })}
                  t  >
                  <Text style={{ fontSize: 20, color: "#fff", marginRight: 20, marginLeft: 5 }}>{item.ranking}</Text>
                  <Image source={{ uri: item.image }} style={styles.topSongImage} />
                  <View style={{ marginLeft: 10, width: 240 }}>
                     <Text style={{ fontSize: 16, color: "#fff" }}>{item.songName}</Text>
                     <Text style={{ fontSize: 16, color: "rgba(255,255,255,0.7)" }}>
                        {item.author}
                     </Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row", marginLeft: 20 }}>
                     <TouchableOpacity onPress={() => toggleMenu(item.id)}>
                        <Ionicons name="md-ellipsis-vertical" size={24} color="white" />
                     </TouchableOpacity>
                     {menuVisibility[item.id] && (
                        <Animatable.View animation="slideInRight" duration={400} style={{ marginRight: 250, justifyContent: "center", marginLeft: 10 }}>
                           <TouchableOpacity
                              onPress={async () => {
                                 const songToAdd = item;
                                 try {
                                    const response = await fetch(`http://${ipv4}:8080/api/add-to-my-album`, {
                                       method: 'POST',
                                       headers: {
                                          'Content-Type': 'application/json',
                                       },
                                       body: JSON.stringify(songToAdd),
                                    });
                                 } catch (error) {
                                    console.log("");
                                 }
                              }}>
                              <Text style={{ ...styles.menuItem, color: "#fff" }}>
                                 Add to my album
                              </Text>
                           </TouchableOpacity>
                        </Animatable.View>
                     )}
                  </View>
               </TouchableOpacity>
            </View>
         </View>
      );
   }
   return (
      <ScrollView>
         <View style={styles.headerBodyContainer}>
            <View style={{ marginTop: 5 }}>
               <Text style={styles.headerBodyTextBold}>Top music videos</Text>
            </View>
            <View style={styles.buttonContainer}>
               <Text>Xem thêm</Text>
            </View>
         </View>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
               data={topMusicList}
               renderItem={render}
               numColumns={2}
               keyExtractor={(item, index) => index.toString()}
               columnWrapperStyle={{ flex: 1, justifyContent: 'space-between' }}
            />
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
      fontSize: 22,
      fontWeight: "700",
      color: "white"
   },
   buttonContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      width: 100,
      height: 30,
      marginLeft: 100,
      borderWidth: 1,
      borderColor: "white",
      marginTop: 10
   },
   icon: {
      width: 50,
      height: 50,
      borderRadius: 50,
   },
   change: {
      marginRight: 10,
      alignItems: "center",
      justifyContent: "center"
   },
   topSong: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 7,
      marginTop: 10
   },
   topSongImage: {
      width: 60,
      height: 60,
   },
   topSongText: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flex: 1,
      justifyContent: "space-between",
      marginBottom: 20
   },
   menuItem: {
      fontWeight: "bold",
   },
})

export default TopMusic;