import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
   FlatList,
   Image,
   Pressable,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from "react-native";

import { AntDesign, Entypo, Ionicons, Feather } from "@expo/vector-icons";


const AlbumDetail = ({ route }) => {
   const { album } = route.params;
   const navigation = useNavigation();

   const [menuVisibility, setMenuVisibility] = useState({});
   const [songList, setSongList] = useState([]);
   const fetchSongList = async () => {
      try {
         const response = await fetch(album._links.songList.href);
         const json = await response.json();
         setSongList(json._embedded.songs);
      } catch (error) {
         console.error("Error fetching song list:", error);
      }
   };
   useEffect(() => {
      fetchSongList();
   }, [])

   const toggleMenu = (itemId) => {
      setMenuVisibility({
         ...menuVisibility,
         [itemId]: !menuVisibility[itemId],
      });
   };

   const playTrack = async () => { };

   const render = ({ item }) => {
      return (
         <View style={styles.startSong}>
            <View style={styles.startSongText}>
               <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
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
      <>
         <LinearGradient colors={["#403B4A", "#E7E9BB"]} style={styles.header}>
            <Pressable
               onPress={() => navigation.goBack()}
               style={{ marginHorizontal: 14 }}
            >
               <AntDesign name="left" size={22} color="white" />
            </Pressable>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
               <Image
                  style={{ width: 180, height: 180, borderRadius: 5 }}
                  source={{ uri: album.image }}
               />
               <Text style={{ color: 'white' }} >{album.albumName}</Text>
            </View>
            <View style={{ marginHorizontal: 14 }}>
               <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white' }}>
                  {album.description}
               </Text>
            </View>
            <Pressable style={styles.handleButton}>
               <View style={{ flexDirection: "row", alignItems: "center", gap: 28 }}>
                  <AntDesign name="hearto" size={24} color="white" />
                  <AntDesign name="download" size={24} color="white" />
                  <Ionicons name="md-ellipsis-vertical" size={24} color="white" />
               </View>

               <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <Entypo name="shuffle" size={24} color="#1DB954" />
                  <TouchableOpacity
                     onPress={playTrack}
                     style={styles.controlPlayIcon}
                  >
                     <Entypo name="controller-play" size={24} color="black" />
                  </TouchableOpacity>
               </View>
            </Pressable>
         </LinearGradient>
         <View style={styles.bottom}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               <FlatList
                  data={songList}
                  renderItem={render}
                  keyExtractor={(item, index) => index.toString()}
               />
            </ScrollView>
         </View>
      </>
   );
};

export default AlbumDetail;

const styles = StyleSheet.create({
   header: {
      paddingTop: 20,
      paddingBottom: 20
   },
   bottom: {
      flex: 1,
      backgroundColor: "#131624",
   },
   nameSong: {
      fontSize: 17,
      fontWeight: "bold",
      marginTop: 7,
   },
   nameArtists: {
      fontSize: 12,
      fontWeight: "500",
      color: "#E0E0E0",
      marginTop: 7,
   },
   textTitle: {
      textAlign: "center",
      fontSize: 22,
      fontWeight: "bold",
      marginVertical: 12,
   },
   itemContainer: {
      padding: 14,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   handleButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: 14,
   },
   controlPlayIcon: {
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1DB954",
   },
   menuItem: {
      fontWeight: "bold",
   },
   startSong: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 5,
      marginTop: 20,
      width: "100%"
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
});