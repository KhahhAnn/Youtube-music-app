import { Feather } from '@expo/vector-icons';
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import YoutubeMusicLogo from "../../../logo/logoMusic";

const listStartSong = [
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Không muốn yêu lại càng say đắm",
      auth: "Mr.Siro"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Sinh nhật của mùa thu",
      auth: "Nguyenn"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Nếu biết đó là lần cuối",
      auth: "Đức Trường & BMZ"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
]
const StartSong = () => {
   return (
      <ScrollView>
         <View style={styles.headerBodyContainer}>
            <Image style={styles.icon} source={{ uri: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg" }} />
            <View style={{ marginTop: 5 }}>
               <Text style={styles.headerBodyText}>MUSIC TO GET YOU STARTED</Text>
               <Text style={styles.headerBodyTextBold}>Welcome Khánh An</Text>
            </View>
            <View style={styles.buttonContainer}>
               <Text>Phát tất cả</Text>
            </View>
         </View>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.startSongs}>
               {listStartSong.map((startSong, index) => (
                  <View key={index} style={styles.startSong}>
                     {Array.from({ length: 5 }).map((_, i) => {
                        const newIndex = index * 5 + i;
                        if (newIndex < listStartSong.length) {
                           return (
                              <View style={styles.startSongText} key={newIndex}>
                                 <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                    <Image source={{ uri: listStartSong[newIndex].img }} style={styles.startSongImage} />
                                    <View style={{ marginLeft: 10, width: 250 }}>
                                       <Text style={{ fontSize: 16, color: "#fff" }}>{listStartSong[newIndex].name}</Text>
                                       <Text style={{ fontSize: 16, color: "rgba(255,255,255,0.7)" }}>{listStartSong[newIndex].auth}</Text>
                                    </View>
                                 </View>
                                 <Feather name="more-vertical" size={24} color="white" style={{ marginLeft: 40 }} />
                              </View>
                           );
                        }
                        return null;
                     })}
                  </View>
               ))}
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
      flex: 1,
      justifyContent:"space-between",
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