import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const trendingList = [
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Nhạc của tui",
      desc: "Nguyễn Xuân Trường • 68 views",
      icon: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-meo-con-khung-long.jpg"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "newthang",
      desc: "Perry Nguyễn • 541 views",
      icon: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-meo-con-khung-long.jpg"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Hỗn Loạn",
      desc: "Hải Thanh • 87 views",
      icon: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-meo-con-khung-long.jpg"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "VN - Rap",
      desc: "Việt • 2.2K views",
      icon: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-meo-con-khung-long.jpg"
   },
]

const TrendingPlaylists = () => {
   return (
      <ScrollView >
         <View style={styles.trendingContainer}>
            <View style={{ display: "flex", flexDirection: "column", gap: 10}}>
               <Text style={{fontSize:14, color:"#ccc", fontWeight:"bold"}}>FOR YOU</Text>
               <Text style={styles.trendingText}>Trending community playlists</Text>
            </View>
         </View>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.trendingListContainer}>
               {
                  trendingList.map((trending, index) => (
                     <View key={index} style={{ display: "flex", gap: 5 }} >
                        <Image source={{ uri: trending.img }} style={styles.img} />
                        <Text style={{ fontSize: 18, fontWeight: '600', color: "#fff", maxWidth: 180 }}>{trending.name}</Text>
                        <Text style={{ fontSize: 14, color: "#ccc", maxWidth: 180 }}>{trending.desc}</Text>
                        <Image source={{ uri: trending.icon }} style={styles.icon} />
                     </View>
                  ))
               }
            </View>
         </ScrollView>
      </ScrollView>
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