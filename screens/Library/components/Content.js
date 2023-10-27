import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Content = ({item}) => {
   const ipv4 = "192.168.43.194";
   // const ipv4 = "192.168.51.102";

   const [albums, setAlbums] = useState([]);
   const navigation = useNavigation();
   let prevAlbums;

   const trendingList = async () => {
      try {
         const response = await fetch(`http://${ipv4}:8080/albums/search/findByIsAlbumTrue`);
         console.log("Response Status:", response.status);
         const json = await response.json();
         console.log("Response JSON:", json._embedded.albums);
         prevAlbums = albums;
         return setAlbums(json._embedded.albums);
      } catch (error) {
         console.error("Error:", error);
      }
   };

   useEffect(() => {
      if (albums !== prevAlbums) {
         trendingList();
      }
   }, [prevAlbums]);

   return (
      <View style={[styles.ml5, styles.mr5, styles.mt20]}>
         <View style={{ ...styles.flexRow, justifyContent: "space-between" }}>
            <View style={{ ...styles.flexRow, gap: 10 }}>
               <Text style={styles.primText}>Recent activity</Text>
               <AntDesign name="down" size={18} color="white" />
            </View>
            <TouchableOpacity>
               <AntDesign name="appstore-o" size={24} color="white" />
            </TouchableOpacity>
         </View>
         {albums.map((item, index) => (
            <View key={index} style={styles.trendingListContainer}>
               <View style={styles.flexRow}>
                  <TouchableOpacity style={{ display: "flex", gap: 5, flexDirection: "row", alignItems: "center" }}  onPress={() => navigation.navigate("AlbumDetail", { album: item })}>
                     <Image source={{ uri: item.image }} style={{ width: 70, height: 70, borderRadius: 5 }} />
                     <View style={styles.flexCol}>
                        <Text style={styles.primText}>{item.albumName}</Text>
                        <Text style={styles.descText}>{item.description}</Text>
                     </View>
                  </TouchableOpacity>
                  <Feather name="more-vertical" size={24} color="white" style={{ marginLeft: 20 }} />
               </View>
            </View>
         ))}
         <TouchableOpacity style={{ display: 'flex', flexDirection: "row", alignItems: "center", backgroundColor: "white", maxWidth: 150, padding: 10, borderRadius: 20, left: 230 }}>
            <AntDesign name="plus" size={20} color="black" />
            <Text style={{ color: "black", fontSize: 18 }}>New playlists</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   mt20: {
      marginTop: 20,
   },
   mr5: {
      marginRight: 5,
   },
   ml5: {
      marginLeft: 5,
   },
   flexRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
      justifyContent: "space-between"
   },
   flexCol: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      marginLeft: 10,
   },
   primText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600"
   },
   descText: {
      color: "#ccc",
   },
});

export default Content;
