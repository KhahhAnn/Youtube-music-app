import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { MYIP } from "../constant/Utils";

const SearchScreen = ({ route }) => {
   const ipv4 = MYIP.Myip;
   
   const { query: initialQuery } = route.params;
   const navigation = useNavigation();
   const [searchSong, setSearchSong] = useState([]);
   const [displayedSongs, setDisplayedSongs] = useState([]);
   const [newQuery, setNewQuery] = useState(initialQuery);
   const [searchMode, setSearchMode] = useState(false);
   const [isLoadingMore, setIsLoadingMore] = useState(false);
   const ref = useRef();

   useEffect(() => {
      topList(newQuery);
   }, [newQuery]);

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
         // Ban đầu, hiển thị 10 bài hát đầu tiên
         setDisplayedSongs(json._embedded.songs.slice(0, 10));
      } catch (error) {
         console.error("Error:", error);
      }
   };

   // Hàm để thêm bài hát mới vào danh sách hiển thị
   const loadMoreSongs = async () => {
      try {
         setIsLoadingMore(true);
         const currentLength = displayedSongs.length;
         const newSongs = searchSong.slice(currentLength, currentLength + 10);
         // Giả lập thời gian chờ khi tải thêm (nên thay thế bằng hàm fetch thực tế)
         await new Promise(resolve => setTimeout(resolve, 2000));
         setDisplayedSongs((prevSongs) => [...prevSongs, ...newSongs]);
      } catch (error) {
         console.error("Error loading more songs:", error);
      } finally {
         setIsLoadingMore(false);
      }
   };

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

   const renderFooter = () => {
      if (isLoadingMore) {
         return (
            <View style={styles.loadMoreButton}>
               <Text style={styles.loadMoreText}>Loading...</Text>
            </View>
         );
      } else {
         return null;
      }
   };

   return (
      <LinearGradient colors={["#040306", "#131624"]} style={styles.container}>
         {renderHeader()}
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.songList}>
               <FlatList
                  data={displayedSongs}
                  renderItem={renderSongItem}
                  numColumns={1}
                  keyExtractor={(item, index) => index.toString()}
                  onEndReached={loadMoreSongs} 
                  onEndReachedThreshold={0.1} 
                  ListFooterComponent={renderFooter} 
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
      width: 400
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
   loadMoreButton: {
      alignItems: 'center',
      paddingVertical: 10,
      backgroundColor: '#ddd',
      borderRadius: 10,
   },
   loadMoreText: {
      color: '#000',
      fontSize: 16
   },
});

export default SearchScreen;
