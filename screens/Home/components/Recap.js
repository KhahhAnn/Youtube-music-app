import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const recapList = [
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Recap mùa hè năm 2023",
      desc: "Danh sách phát"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Recap mùa xuân năm 2023",
      desc: "Danh sách phát"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Recap mùa thu năm 2023",
      desc: "Danh sách phát"
   },
   {
      img: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg",
      name: "Recap mùa đông năm 2023",
      desc: "Danh sách phát"
   },
]

const Recap = () => {
   return (
      <ScrollView >
         <View style={styles.recapContainer}>
            <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
               <AntDesign name="banckward" size={24} color="black" style={styles.icon} />
               <Text style={styles.recapText}>Recap</Text>
            </View>
            <TouchableOpacity>
               <Text style={styles.moreText}>Xem Thêm</Text>
            </TouchableOpacity>
         </View>
         <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.recapListContainer}>
               { 
                  recapList.map((recap, index) => (
                     <TouchableOpacity key={index} style={{display:"flex", gap: 5}} >
                        <Image source={{ uri: recap.img }} style={styles.recapImg} />
                        <Text style={{fontSize: 18, fontWeight: '600', color: "#fff", maxWidth: 180}}>{recap.name}</Text>
                        <Text style={{fontSize: 14, color: "#ccc", maxWidth: 180}}>{recap.desc}</Text>
                     </TouchableOpacity>
                  ))
               }
            </View>
         </ScrollView>
      </ScrollView>
   );
}


const styles = StyleSheet.create({
   recapContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 5,
      marginRight: 5,
      marginTop: 40
   },
   icon: {
      padding: 10,
      borderWidth: 2,
      borderColor: "#ccc",
      borderRadius: 50,
      color: "#ccc",
      alignItems: "center",
      justifyContent:"center"
   },
   recapText: {
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
   recapListContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 20,
      marginTop: 20,
      marginLeft: 5,
      marginRight: 5
   },
   recapImg: {
      width: 180,
      height: 180
   }
})

export default Recap;