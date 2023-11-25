import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MYIP } from '../../constant/Utils';
import SkeletonLoader from '../../components/SkeletonLoader';

const Recap = ({ item }) => {
   const ipv4 = MYIP.Myip;

   const [recap, setRecap] = useState([]);
   const [loading, setLoading] = useState(true);
   const navigation = useNavigation();

   const recapList = async () => {
      try {
         const response = await fetch(`http://${ipv4}:8080/albums/search/findByIsRecapTrue`);
         const json = await response.json();
         if (JSON.stringify(json._embedded.albums) !== JSON.stringify(recap)) {
            setRecap(json._embedded.albums);
         } else {
            console.log("No change in recap data.");
         }
      } catch (error) {
         console.error("Error:", error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      recapList();
   }, [recap]);

   const render = ({ item }) => {
      return (
         <View style={styles.recapListContainer}>
            <TouchableOpacity style={{ display: "flex", gap: 5 }} onPress={() => navigation.navigate("AlbumDetail", { album: item })}>
               <>
                  <Image source={{ uri: item.image }} style={styles.recapImg} />
                  <Text style={{ fontSize: 18, fontWeight: '600', color: "#fff", maxWidth: 180 }}>{item.albumName}</Text>
                  <Text style={{ fontSize: 14, color: "#ccc", maxWidth: 180 }}>{item.description}</Text>
               </>
            </TouchableOpacity>
         </View>
      );
   };

   return (
      <SafeAreaView>
         <ScrollView>
            <View style={styles.recapContainer}>
               <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                  <AntDesign name="banckward" size={24} color="black" style={styles.icon} />
                  <Text style={styles.recapText}>Recap</Text>
               </View>
               <TouchableOpacity>
                  <Text style={styles.moreText}>Xem Thêm</Text>
               </TouchableOpacity>
            </View>
            {loading ? (
               <SkeletonLoader />
            ) : (
               <View>
                  <FlatList
                     data={recap}
                     renderItem={render}
                     keyExtractor={(item, index) => index.toString()}
                     horizontal={true}
                     showsHorizontalScrollIndicator={false}
                  />
               </View>
            )}
         </ScrollView>
      </SafeAreaView>
   );
};

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
      borderRadius: 25,
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
      borderRadius: 15,
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
      height: 180,
      borderRadius: 10,
   }
});

export default Recap;
