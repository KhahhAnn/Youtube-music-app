import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const RecommendRadio = ({item}) => {
   const ipv4 = "192.168.43.194";
   const [recommend, setRecommend] = useState([]);
   const navigation = useNavigation();
   const recommendList = async () => {
      try {
         const response = await fetch(`http://${ipv4}:8080/albums/search/findByIsRadioTrue`);
         const json = await response.json();
         if (JSON.stringify(json._embedded.albums) !== JSON.stringify(recommend)) {
            setRecommend(json._embedded.albums);
         } else {
            console.log("No change in recomment data.");
         }
      } catch (error) {
         console.error("Error:", error);
      }
   };
   useEffect(() => {
      recommendList();
   }, [recommend]);
   const render = ({ item }) => {
      return (
         <View style={styles.RecommendedListContainer}>
            <TouchableOpacity style={{ display: "flex", gap: 5 }} onPress={() => navigation.navigate("AlbumDetail", { album: item })}>
               <AntDesign name="playcircleo" size={16} color="#918ca9" style={styles.icon} />
               <Image source={{ uri: item.image }} style={styles.RecommendedImg} />
               <Text style={{ fontSize: 18, fontWeight: '600', color: "#fff", maxWidth: 180 }}>{item.albumName}</Text>
               <Text style={{ fontSize: 14, color: "#ccc", maxWidth: 180 }}>{item.description}</Text>
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
      height: "100%"
   },
   RecommendedImg: {
      width: "100%",
      height: "100%",
      maxWidth: 180,
      maxHeight: 180
   }
})

export default RecommendRadio;