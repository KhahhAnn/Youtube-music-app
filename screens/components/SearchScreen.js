import React, { useCallback, useEffect, useState, useRef } from "react";
import { FlatList, Image, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Feather, Entypo, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = ({ route }) => {
   // const ipv4 = "192.168.43.194";
   // const ipv4 = "172.20.10.3";
   // const ipv4 = "172.20.10.4";
   // const ipv4 = "192.168.51.102";
   // const ipv4 = "10.0.37.50";
   const ipv4 = "192.168.1.22";


   const { query: initialQuery } = route.params;
   const navigation = useNavigation();
   const [searchSong, setSearchSong] = useState([]);
   const [newQuery, setNewQuery] = useState(initialQuery);
   const [searchMode, setSearchMode] = useState(false);
   const ref = useRef();

   const onSearch = (query) => {
      if (searchMode) {
         topList(query);
      } else {
         navigation.navigate('SearchScreen', { query });
      }
      if (query.trim() === "") {
         setSearchMode(false)
      }
   };

   const handleSearch = (event) => {
      event.preventDefault();
      onSearch(newQuery);
      Keyboard.dismiss();
   };
   const topList = async (searchQuery) => {
      try {
         const response = await fetch(`http://${ipv4}:8080/song/search/findBySongNameContaining?songName=${searchQuery}`);
         const json = await response.json();
         setSearchSong(json._embedded.songs);
      } catch (error) {
         console.error("Error:", error);
      }
   };

   useEffect(() => {
      console.log(newQuery);
      topList(newQuery);
   }, [newQuery]);

   const renderSongItem = ({ item }) => {
      return (
         <View style={styles.songItem}>
            <View style={styles.songItemText}>
               <TouchableOpacity style={styles.songItemTouchable} onPress={() => navigation.navigate("SongDetail", { song: item })}>
                  <Image source={{ uri: item.image }} style={styles.songItemImage} />
                  <View style={{ marginLeft: 10, width: 240 }}>
                     <Text style={styles.songItemTitle}>{item.songName}</Text>
                     <Text style={styles.songItemAuthor}>{item.author}</Text>
                  </View>
               </TouchableOpacity>
               <Feather name="more-vertical" size={24} color="white" style={{ marginLeft: 40 }} />
            </View>
         </View>
      );
   };

   const renderHeader = () => {
      return (
         <View style={styles.headerContainer}>
            <View style={styles.headerItem}>
               <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                  <Entypo name="youtube-with-circle" size={60} color="red" />
               </TouchableOpacity>
               <Text style={styles.headerTitle}>Music</Text>
            </View>
            <View style={styles.headerItem}>
               {!searchMode && (
                  <View>
                     <TouchableOpacity onPress={() => setSearchMode(true)}>
                        <AntDesign name="search1" size={22} color="white" style={{ marginRight: 20 }} />
                     </TouchableOpacity>
                  </View>
               )}
               {searchMode && (
                  <View style={styles.container}>
                     <TextInput
                        style={styles.input}
                        placeholder="Search for a song"
                        value={newQuery}
                        onChangeText={(text) => setNewQuery(text)}
                        onSubmitEditing={(event) => handleSearch(event)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        ref={ref}
                     />
                  </View>
               )}
               {!searchMode && (
                  <Image
                     style={styles.icon}
                     source={{
                        uri: 'https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg',
                     }}
                  />
               )}

            </View>
         </View>
      );
   };

   return (
      <LinearGradient colors={["#040306", "#131624"]} style={styles.container}>
         {renderHeader()}
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.songList}>
               <FlatList
                  data={searchSong}
                  renderItem={renderSongItem}
                  numColumns={1}
                  keyExtractor={(item, index) => index.toString()}
               />
            </View>
         </ScrollView>
      </LinearGradient>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 20,
   },
   songList: {
      marginTop: 30,
      paddingHorizontal: 5,
   },
   songItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 5,
   },
   songItemText: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flex: 1,
      justifyContent: "space-between",
      marginBottom: 20,
   },
   songItemTouchable: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
   },
   songItemImage: {
      width: 60,
      height: 60,
   },
   songItemTitle: {
      fontSize: 16,
      color: "#fff",
   },
   songItemAuthor: {
      fontSize: 16,
      color: "rgba(255,255,255,0.7)",
   },
   headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   headerItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
   },
   headerTitle: {
      fontSize: 22,
      fontWeight: '700',
      color: 'white',
   },
   headerIcon: {
      width: 50,
      height: 50,
      borderRadius: 50,
   },
   input: {
      color: 'white',
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      marginRight: 10,
      marginBottom: 20,
      marginLeft: 10,
      flex: 1,
      fontSize: 18
   },
   icon: {
      width: 30,
      height: 30,
      borderRadius: 50,
   },
});

export default SearchScreen;
