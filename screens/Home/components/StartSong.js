import { Feather } from '@expo/vector-icons';
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import YoutubeMusicLogo from "../../../logo/logMusic";

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
   {
      img: YoutubeMusicLogo,
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND"
   },
]
const StartSong = () => {
   return (
      <ScrollView>
         <View style={styles.headerBodyContainer}>
            <Image style={styles.icon} source={{ uri: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg" }} />
            <View>
               <Text style={styles.headerBodyText}>MUSIC TO GET YOU STARTED</Text>
               <Text style={styles.headerBodyTextBold}>Welcome Khánh An</Text>
            </View>
            <View style={styles.buttonContainer}>
               <Text>Phát tất cả</Text>
            </View>
         </View>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.startSongs}>
               {
                  listStartSong.map((startSong, index) => (
                     <View key={index} style={styles.startSong}>
                        <View style={styles.startSongText}>
                           <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                              <Image source={{ uri: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg" }} style={styles.startSongImage} />
                              <View style={{ marginLeft: 10 }}>
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
                           <Feather name="more-vertical" size={24} color="black" style={{ marginLeft: 40 }} />
                        </View>
                     </View>
                  ))
               }
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
      marginLeft: 5

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
      justifyContent: "space-between"
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
      borderColor: "white"
   }
})

export default StartSong;