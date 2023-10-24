
import { Feather, Entypo } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HTML from 'react-native-render-html';

const TopMusic = () => {
   const [topMusicList, setTopMusicList] = useState([])
   const topList = async () => {
      try {
         const response = await fetch("http://192.168.51.102:8080/song/search/findByRankingLessThanOrderByRanking?ranking=11");
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
         <View style={styles.topMusics}>
            <View style={styles.music}>
               <View style={styles.topMusicText}>
                  <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                     <View style={styles.change}>
                        <Text style={{ fontSize: 20, color: "#eee", marginBottom: 5 }}>{item.ranking}</Text>
                        
                     </View>
                     <Image source={{ uri: item.image }} style={styles.topMusicImage} />
                     <View style={{ marginLeft: 10, width: 240 }}>
                        <Text style={{ fontSize: 16, color: "rgba(255,255,255,0.6)" }}>{item.songName}</Text>
                        <Text style={{ fontSize: 16, color: "rgba(255,255,255,0.7)" }}>{item.author}</Text>
                     </View>
                  </TouchableOpacity>
                  <Feather name="more-vertical" size={24} color="white" style={{ marginLeft: 20 }} />
               </View>
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
   topMusics: {
      marginTop: 30,
      display: "flex",
      gap: 20,
   },
   music: {
      display: "flex",
      gap: 10,
      textAlign: "center",
      justifyContent: "space-between",
      marginLeft: 5
   },
   topMusicImage: {
      width: 60,
      height: 60,
   },
   topMusicText: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flex: 1,
      justifyContent: "space-between",
      marginLeft: 2
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
   }
})

export default TopMusic;