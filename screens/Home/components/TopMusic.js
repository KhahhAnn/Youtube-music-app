import { Feather } from '@expo/vector-icons';
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const TopMusicList = [
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Không muốn yêu lại càng say đắm",
      auth: "Mr.Siro",
      chart: <Entypo name="chevron-thin-up" size={20} color="#01F702" />
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Sinh nhật của mùa thu",
      auth: "Nguyenn",
      chart: <Entypo name="chevron-thin-up" size={20} color="#01F702" />
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Nếu biết đó là lần cuối",
      auth: "Đức Trường & BMZ",
      chart: <Entypo name="chevron-thin-down" size={20} color="#FD2D2B" />
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND",
      chart: <Entypo name="chevron-thin-down" size={20} color="#FD2D2B" />

   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Chuyện đôi ta hợp tan",
      auth: "WIND",
      chart: <Ionicons name="remove-outline" size={20} color="black" />
   },
]
const TopMusic = () => {
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
            <View style={styles.topMusics}>
               {
                  TopMusicList.map((topMusic, index) => (
                     <View key={index} style={styles.topMusic}>
                        <View style={styles.topMusicText}>
                           <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                              <View style={styles.change}>
                                 <Text style={{ fontSize: 26, color: "#eee", marginBottom: 5 }}>{index + 1}</Text>
                                 {topMusic.chart}
                              </View>
                              <Image source={{ uri: topMusic.img }} style={styles.topMusicImage} />
                              <View style={{ marginLeft: 10 }}>
                                 <Text style={{
                                    fontSize: 16,
                                    color: "rgba(255,255,255,0.6)"
                                 }}>{topMusic.name}</Text>
                                 <Text style={{
                                    fontSize: 16,
                                    color: "rgba(255,255,255,0.7)"
                                 }}>{topMusic.auth}</Text>
                              </View>
                           </View>
                           <Feather name="more-vertical" size={24} color="white" style={{ marginLeft: 20 }} />
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
      fontSize: 22,
      fontWeight: "700",
      color: "white"
   },
   topMusics: {
      marginTop: 30,
      display: "flex",
      gap: 20
   },
   topMusic: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      textAlign: "center",
      justifyContent: "space-between",
      alignSelf: "stretch",
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
      justifyContent: "space-between"
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