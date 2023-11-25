// Import necessary components and libraries
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { MYIP } from '../../constant/Utils';
import SkeletonLoader from '../../components/SkeletonLoader';


const StartSong = ({ user }) => {
   const navigation = useNavigation();
   const ipv4 = MYIP.Myip;

   const [startSong, setStartSong] = useState([]);
   const [menuVisibility, setMenuVisibility] = useState({});
   const [loading, setLoading] = useState(true);
   const toggleMenu = (itemId) => {
      setMenuVisibility({
         ...menuVisibility,
         [itemId]: !menuVisibility[itemId],
      });
   };

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
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      topList();
   }, [startSong]);

   const render = ({ item }) => {
      return (
         <SafeAreaView style={styles.startSong}>
            <View style={[styles.startSongText]}>
               <TouchableOpacity
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "center",
                     alignItems: "center",
                     maxWidth: 500,
                  }}
                  onPress={() => navigation.navigate("SongDetail", { song: item })}
               >

                  <>
                     <Image source={{ uri: item.image }} style={styles.startSongImage} />
                     <View style={{ marginLeft: 10, width: 240 }}>
                        <Text style={{ fontSize: 16, color: "#fff" }}>{item.songName}</Text>
                        <Text style={{ fontSize: 16, color: "rgba(255,255,255,0.7)" }}>{item.author}</Text>
                     </View>
                     <View style={{ display: "flex", flexDirection: "row", marginLeft: 40 }}>
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
                  </>
               </TouchableOpacity>
            </View>
         </SafeAreaView>
      );
   };

   return (
      <ScrollView>
         <View style={styles.headerBodyContainer}>
            <Image style={styles.icon} source={{ uri: user.image }} />
            <View style={{ marginTop: 5 }}>
               <Text style={styles.headerBodyText}>MUSIC TO GET YOU STARTED</Text>
               <Text style={styles.headerBodyTextBold}>Welcome {user.userName}</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
               <Text style={{ color: "#fff" }}>Play all</Text>
            </TouchableOpacity>
         </View>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {loading ? (
               <SkeletonLoader />
            ) : (
               <View style={styles.startSongs}>
                  <FlatList
                     data={startSong}
                     renderItem={render}
                     keyExtractor={(item, index) => index.toString()}
                     numColumns={4}
                     columnWrapperStyle={{ justifyContent: 'space-between' }}
                  />
               </View>
            )}
         </ScrollView>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   menuItem: {
      fontWeight: "bold",
   },
   headerBodyContainer: {
      marginLeft: 5,
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
      marginLeft: 10,
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
      marginLeft: 40,
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

export default StartSong;
