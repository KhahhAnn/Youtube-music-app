import React, { useEffect, useState, useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const Recap = () => {
   const [recap, setRecap] = useState([]);

   const recapList = async () => {
      try {
         const response = await fetch("http://192.168.51.102:8080/albums/search/findByIsRecapTrue");
         const json = await response.json();
         if (JSON.stringify(json._embedded.albums) !== JSON.stringify(recap)) {
            setRecap(json._embedded.albums);
         } else {
            console.log("No change in recap data.");
         }
      } catch (error) {
         console.error("Error:", error);
      }
   };
   useEffect(() => {
      recapList();
   }, [recap]);
   const render = ({ item }) => {
      console.log("Rendering item:", item);
      return (
         <View style={styles.recapListContainer}>
            <TouchableOpacity style={{ display: "flex", gap: 5 }} >
               <Image source={{ uri: item.image }} style={styles.recapImg} />
               <Text style={{ fontSize: 18, fontWeight: '600', color: "#fff", maxWidth: 180 }}>{item.albumName}</Text>
               <Text style={{ fontSize: 14, color: "#ccc", maxWidth: 180 }}>{item.description}</Text>
            </TouchableOpacity>
         </View>
      );
   }
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
         <View>
            <FlatList
               data={recap}
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
      justifyContent: "center"
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