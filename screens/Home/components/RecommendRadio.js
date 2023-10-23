import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const recommendList = [
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Phuong Linh Radio",
      desc: "Hồ Phương Liên, Ngọc Liên, Tuấn Anh, Hà"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Vương Anh Tú Radio",
      desc: "Vương Anh Tú, Khải Đăng, Thanh Hưng, Quân"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Freadk D Radio",
      desc: "Freak D & 1 9 6 7"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "W/n Radio",
      desc: "Tăng Duy Tân, Củ Cải, Flepy, NamLee"
   },
]

const RecommendRadio = () => {
   const [recommend, setRecommend] = useState([]);
   useEffect(() => {
      setRecommend(recommendList)
   }, [])
   const render = ({ item }) => {
      return (
         <View style={styles.RecommendedListContainer}>
            <TouchableOpacity style={{ display: "flex", gap: 5 }} >
               <AntDesign name="playcircleo" size={16} color="#918ca9" style={styles.icon} />
               <Image source={{ uri: item.img }} style={styles.RecommendedImg} />
               <Text style={{ fontSize: 18, fontWeight: '600', color: "#fff", maxWidth: 180 }}>{item.name}</Text>
               <Text style={{ fontSize: 14, color: "#ccc", maxWidth: 180 }}>{item.desc}</Text>
            </TouchableOpacity>
         </View>
      );
   }
   return (
      <ScrollView >
         <View style={styles.RecommendedContainer}>
            <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
               <Text style={styles.RecommendedText}>Recommended radios</Text>
            </View>
         </View>
         <View>
            <FlatList
               data={recommend}
               renderItem={render}
               keyExtractor={(item, index) => index.toString()}
               horizontal={true}
               showsHorizontalScrollIndicator={false}
            />
         </View>
      </ScrollView>
   );
}


const styles = StyleSheet.create({
   RecommendedContainer: {
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
      left: 10,
      top: 5,
      padding: 5,
      backgroundColor: "rgba(255,255,255, 0.8)",
      borderRadius: 50
   },
   RecommendedText: {
      fontSize: 30,
      color: "#ccc",
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
   RecommendedListContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 20,
      marginTop: 20,
      marginLeft: 5,
      marginRight: 5,
      maxHeight: 300,
   },
   RecommendedImg: {
      width: 180,
      height: 180
   }
})

export default RecommendRadio;