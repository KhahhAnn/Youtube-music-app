import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Pressable, SafeAreaView, ScrollView, View, Image, Text, ImageBackground } from "react-native";
import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import YoutubeMusicLogo from "../logo/logMusic";
const options = [
   { content: "Relax" },
   { content: "Energize" },
   { content: "Workout" },
   { content: "Commute" },
   { content: "Focus" },
]

const listStartSong = [
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Không muốn yêu lại càng say đắm",
      auth: "Mr.Siro"
   },
   {
      img: YoutubeMusicLogo,
      name: "Sinh nhật của mùa thu",
      auth: "Nguyenn"
   },
   {
      img: YoutubeMusicLogo,
      name: "Nếu biết đó là lần cuối",
      auth: "Đức Trường & BMZ"
   },
   {
      img: YoutubeMusicLogo,
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
]

function HomeScreen() {
   const [userProfile, setUserProfile] = useState([]);
   const getProfile = async () => {

   }
   return (
      <LinearGradient colors={["#BBD2C5", "#536976", "#292E49"]} style={{ flex: 1 }}>
         <ScrollView style={{ marginTop: 50, marginRight: 5, marginLeft: 5 }}>
            <View style={styles.headerContainer}>
               <View style={styles.headerItem}>
                  <Entypo name="youtube-with-circle" size={60} color="red" />
                  <Text style={{ fontSize: 22, fontWeight: "700" }}>Music</Text>
               </View>
               <View style={styles.headerItem}>
                  <AntDesign name="iconfontdesktop" size={26} color="black" style={{ marginRight: 20 }} />
                  <AntDesign name="search1" size={26} color="black" style={{ marginRight: 20 }} />
                  <Image style={styles.icon} source={{ uri: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg" }} />
               </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ maxWidth: 500 }}>
               <View style={{ marginTop: 30, display: "flex", flexDirection: "row", justifyContent: "center" }}>
                  {
                     options.map((option, index) => (
                        <View key={index} style={styles.optionContainer}>
                           <Text style={styles.optionText}>{option.content}</Text>
                        </View>
                     ))
                  }
               </View>
            </ScrollView>
            <ScrollView>
               <View style={styles.headerBodyContainer}>
                  <Image style={styles.icon} source={{ uri: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg" }} />
                  <View>
                     <Text style={styles.headerBodyText}>MUSIC TO GET YOU STARTED</Text>
                     <Text style={styles.headerBodyTextBold}>Welcome clientName</Text>
                  </View>
               </View>
               <View style={styles.startSongs}>
                  {
                     listStartSong.map((startSong, index) => (
                        <View key={index} style={styles.startSong}>
                           <View style={styles.startSongText}>
                              <Image source={{ uri: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg" }} style={styles.startSongImage} />
                              <View>
                                 <Text style={{
                                    fontSize: 16,
                                    color: "rgba(0,0,0,0.6)"
                                 }}>{startSong.name}</Text>
                                 <Text style={{
                                    fontSize: 16,
                                    color: "rgba(0,0,0,0.7)"
                                 }}>{startSong.auth}</Text>
                              </View>
                           </View>
                           <Feather name="more-vertical" size={24} color="black" />
                        </View>
                     ))
                  }
               </View>
            </ScrollView>
         </ScrollView>
      </LinearGradient>
   );
}
const styles = StyleSheet.create({
   icon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      resizeMode: "cover"
   },
   headerContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
   },
   headerItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
   },
   optionContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      borderRadius: 10,
      flex: 1,
      marginHorizontal: 5
   },
   optionText: {
      width: 90,
      height: 50,
      textAlign: "center",
      textAlignVertical: "center"
   },
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
      fontWeight: "700"
   },
   startSongs: {
      marginTop: 30,
      display: "flex",
      gap: 20
   },
   startSong: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      textAlign: "center",
      justifyContent: "space-between",
      alignSelf: "stretch",

   },
   startSongImage: {
      width: 60,
      height: 60,
   },
   startSongText: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems:"center",
      justifyContent: "center"
   }
})
export default HomeScreen;