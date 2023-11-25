import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MYIP } from '../../constant/Utils';
import SkeletonLoader from '../../components/SkeletonLoader';

const TrendingPlaylists = ({ item }) => {
   const ipv4 = MYIP.Myip;

   const [trending, setTrending] = useState([]);
   const navigation = useNavigation();
   const [loading, setLoading] = useState(true);

   const trendingList = async () => {
      try {
         const response = await fetch(`http://${ipv4}:8080/albums/search/findByIsPlaylistTrue`);
         const json = await response.json();
         if (JSON.stringify(json._embedded.albums) !== JSON.stringify(trending)) {
            setTrending(json._embedded.albums);
         } else {
            console.log("No change in trending data.");
         }
      } catch (error) {
         console.error("Error:", error);
      } finally {
         setLoading(false);
      }
   };
   useEffect(() => {
      trendingList();
   }, [trending]);
   const render = ({ item }) => {
      return (
         <View style={styles.trendingListContainer}>
            <TouchableOpacity style={{ display: "flex", gap: 5 }} onPress={() => navigation.navigate("AlbumDetail", { album: item })} >
               <Image source={{ uri: item.image }} style={styles.img} />
               <Text style={{ fontSize: 18, fontWeight: '600', color: "#fff", maxWidth: 180 }}>{item.albumName}</Text>
               <Text style={{ fontSize: 14, color: "#ccc", maxWidth: 180 }}>{item.description}</Text>
               <Image source={{ uri: item.icon }} style={styles.icon} />
            </TouchableOpacity>
         </View>
      );
   }
   return (
      <SafeAreaView>
         <ScrollView >
            <View style={styles.trendingContainer}>
               <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <Text style={{ fontSize: 14, color: "#ccc", fontWeight: "bold" }}>FOR YOU</Text>
                  <Text style={styles.trendingText}>Trending community playlists</Text>
               </View>
            </View>
            {loading ? (
               <SkeletonLoader />
            ) : (
               <View>
                  <FlatList
                     data={trending}
                     renderItem={render}
                     keyExtractor={(item, index) => index.toString()}
                     horizontal={true}
                     showsHorizontalScrollIndicator={false}
                  />
               </View>
            )}
         </ScrollView >
      </SafeAreaView>
   );
}
const styles = StyleSheet.create({
   trendingContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 5,
      marginRight: 5,
      marginTop: 40
   },
   icon: {
      position: "absolute",
      zIndex: 1,
      left: 15,
      bottom: 90,
      padding: 5,
      backgroundColor: "rgba(255,255,255, 0.8)",
      borderRadius: 50,
      height: 20,
      width: 20
   },
   trendingText: {
      fontSize: 28,
      color: "#fff",
      fontWeight: "bold"
   },
   moreText: {
      color: "#fff",
      padding: 5,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 20,
      textAlign: "center",
      alignItems: "center",
      marginTop: 10
   },
   trendingListContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 20,
      marginTop: 20,
      marginLeft: 5,
      marginRight: 5,
      maxHeight: 300,
   },
   img: {
      width: 180,
      height: 180
   }
})

export default TrendingPlaylists;