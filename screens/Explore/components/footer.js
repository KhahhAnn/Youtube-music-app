import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const videoList = [
   {
      img: "https://tse4.mm.bing.net/th?id=OIP.ZKMYg8RsIyPU8XPDCw1lUwHaHa&pid=Api&P=0&h=180",
      name: "B RAY - Anh luôn như vậy (feat.cậu bảo) | Official music video",
      desc: "Bray • 2.3M views"
   },
   {
      img: "https://tse4.mm.bing.net/th?id=OIP.ZKMYg8RsIyPU8XPDCw1lUwHaHa&pid=Api&P=0&h=180",
      name: "KARIK - Bạn đời (feat. GDucky) | Official music video",
      desc: "Karic • 6.2M views"
   },
   {
      img: "https://tse4.mm.bing.net/th?id=OIP.ZKMYg8RsIyPU8XPDCw1lUwHaHa&pid=Api&P=0&h=180",
      name: "Mẹ biết mẹ buồn - OgeNus - Rap Việt 2023",
      desc: "Ogenus • 252K views"
   },
   {
      img: "https://tse4.mm.bing.net/th?id=OIP.ZKMYg8RsIyPU8XPDCw1lUwHaHa&pid=Api&P=0&h=180",
      name: "Vô tri",
      desc: "HuyR • 251K views"
   },
]

const Footer = () => {
   return (
      <ScrollView >
         <View style={styles.videoContainer}>
            <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
               <Text style={styles.videoText}>New music videos</Text>
            </View>
         </View>
         <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.videoListContainer}>
               { 
                  videoList.map((video, index) => (
                     <View key={index} style={{display:"flex", gap: 5}} >
                        <AntDesign name="caretright" size={24} color="#918ca9" style={styles.icon} />
                        <Image source={{ uri: video.img }} style={styles.videoImg} />
                        <Text style={{fontSize: 18, fontWeight: '600', color: "#fff", maxWidth: 180}}>{video.name}</Text>
                        <Text style={{fontSize: 14, color: "#ccc", maxWidth: 180}}>{video.desc}</Text>
                     </View>
                  ))
               }
            </View>
         </ScrollView>
      </ScrollView>
   );
}


const styles = StyleSheet.create({
   videoContainer: {
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
      left: 72,
      top: 70,
      padding: 5,
      backgroundColor: "rgba(255,255,255, 0.8)",
      borderRadius: 50
   },
   videoText: {
      fontSize: 30,
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
   videoListContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 20,
      marginTop: 20,
      marginLeft: 5,
      marginRight: 5,
      maxHeight: 300,
   },
   videoImg: {
      width: 180,
      height: 180
   }
})

export default Footer;