import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MYIP } from '../../constant/Utils';
import SkeletonLoader from '../../components/SkeletonLoader';


const Footer = ({ item }) => {
   const ipv4 = MYIP.Myip;
   const navigation = useNavigation();
   const [video, setVideo] = useState([]);
   const [loading, setLoading] = useState(true);

   const videoList = async () => {
      try {
         const response = await fetch(`http://${ipv4}:8080/video`);
         const json = await response.json();
         if (JSON.stringify(json._embedded.videos) !== JSON.stringify(video)) {
            setVideo(json._embedded.videos);
         } else {
            console.log("No change in  data.");
         }
      } catch (error) {
         console.error("Error:", error);
      } finally {
         setLoading(false);
      }
   };
   useEffect(() => {
      videoList();
   }, [video]);
   const render = ({ item }) => {
      return (
         <TouchableOpacity style={styles.videoListContainer} onPress={() => navigation.navigate("VideoDetail", { video: item })}>
            <View style={{ display: "flex", gap: 5 }} >
               <AntDesign name="caretright" size={24} color="#918ca9" style={styles.icon} />
               <Image source={{ uri: item.image }} style={styles.videoImg} />
               <Text style={{ fontSize: 18, fontWeight: '600', color: "#fff", maxWidth: 180 }}>{item.description}</Text>
               <Text style={{ fontSize: 14, color: "#ccc", maxWidth: 180 }}>{item.author}</Text>
            </View>
         </TouchableOpacity>
      );
   }
   return (
      <ScrollView >
         <View style={styles.videoContainer}>
            <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
               <Text style={styles.videoText}>New music videos</Text>
            </View>
         </View>
         <View>
            {loading ? (
               <SkeletonLoader />
            ) : (
               <FlatList
                  data={video}
                  renderItem={render}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
               />
            )}
         </View>
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
      marginBottom: 30
   },
   videoImg: {
      width: 180,
      height: 180
   }
})

export default Footer;