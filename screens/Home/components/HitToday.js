import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MYIP } from '../../constant/Utils';
import SkeletonLoader from '../../components/SkeletonLoader';

const HitToday = ({ item }) => {
   const ipv4 = MYIP.Myip;

   const [hitTodayList, setHitTodayList] = useState([])
   const [loading, setLoading] = useState(true);
   const navigation = useNavigation();

   const hitList = async () => {
      try {
         const response = await fetch(`http://${ipv4}:8080/song/search/findByIsHitTodayTrue?page=&size=${hitTodayList.length}`);
         const json = await response.json();
         if (JSON.stringify(json._embedded.songs) !== JSON.stringify(hitTodayList)) {
            setHitTodayList(json._embedded.songs);
         } else {
            console.log("No change in hit today data.");
         }
      } catch (error) {
         console.error("Error:", error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      hitList();
   }, [hitTodayList]);

   return (
      <ScrollView>
         <LinearGradient colors={["rgba(202,239,215,0.7)", "rgba(245,191,215,0.7)", "rgba(171,201,233,0.7)"]} style={styles.container}>
            <View style={styles.headerContainer}>
               <Image source={{ uri: "https://cdn.tgdd.vn/Files/2021/10/20/1392306/10-bai-nhac-buon-tik-tok-co-loi-giai-dieu-da-diet-thon-thuc-nguoi-nghe-202110202351463368.jpg" }} style={{ width: 100, height: 100 }} />
               <View>
                  <Text style={styles.text}>Chroma: Today's Dance Hits</Text>
                  <Text style={styles.text}>Youtube Music</Text>
               </View>
            </View>
            {loading ? (
               <SkeletonLoader />
            ) : (
               hitTodayList.map((hit, index) => (
                  <TouchableOpacity key={index} style={{ display: "flex", flexDirection: "row", marginBottom: 20, alignItems: "center", gap: 10 }} onPress={() => navigation.navigate("SongDetail", { song: hit })}>
                     <Image source={{ uri: hit.image }} style={{ width: 50, height: 50 }} />
                     <View>
                        <Text style={{ fontWeight: "500" }}>{hit.songName}</Text>
                        <Text style={{ fontWeight: "500" }}>{hit.author}</Text>
                     </View>
                  </TouchableOpacity>
               ))
            )}
            <View style={{ display: "flex", flexDirection: "row", marginBottom: 20, alignItems: "center", gap: 30 }}>
               <TouchableOpacity>
                  <AntDesign name="caretright" size={16} color="black" style={{ ...styles.icon, color: "white" }} />
               </TouchableOpacity>
               <TouchableOpacity>
                  <Feather name="radio" size={16} color="black" style={styles.icon} />
               </TouchableOpacity>
               <TouchableOpacity>
                  <Entypo name="add-to-list" size={16} color="black" style={styles.icon} />
               </TouchableOpacity>
            </View>
         </LinearGradient>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 40,
      backgroundColor: "rgba(0,0,0, 0.6)",
      margin: "auto",
      padding: 20,
      borderRadius: 10,
   },
   headerContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 20,
      marginBottom: 40,
      alignItems: "center"
   },
   text: {
      fontWeight: "bold",
      fontSize: 16,
      marginBottom: 5
   },
   iconPlay: {
      backgroundColor: "rgba(255,255,255,0.5)"
   },
   icon: {
      color: "#ccc",
      padding: 10,
      borderRadius: 20,
      borderWidth: 0.5,
      borderColor: "#ccc",
      textAlign: "center",
      alignItems: "center"
   }
})

export default HitToday;
