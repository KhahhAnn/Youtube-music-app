import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const moodList = [
   {
      text: "Mandopop & Cantopop 1",
      color: "red"
   },
   {
      text: "Mandopop & Cantopop 2",
      color: "#E6E6FA"
   },
   {
      text: "Mandopop & Cantopop 3",
      color: "#E6E6FA"
   },
   {
      text: "Mandopop & Cantopop 4",
      color: "#4B0082"
   },
   {
      text: "Mandopop & Cantopop 5",
      color: "#FFA07A"
   },
   {
      text: "Mandopop & Cantopop 6",
      color: "#E6E6FA"
   },
   {
      text: "Mandopop & Cantopop 7",
      color: "#FF4500"
   },
   {
      text: "Mandopop & Cantopop 8",
      color: "#FFD700"
   },
   {
      text: "Mandopop & Cantopop 9",
      color: "#7FFF00"
   },
   {
      text: "Mandopop & Cantopop 10",
      color: "#00FFFF"
   },
   {
      text: "Mandopop & Cantopop 11",
      color: "#5F9EA0"
   },
   {
      text: "Mandopop & Cantopop 12",
      color: "#5F9EA0"
   },
]
const Body = () => {
   const [mood, setMood] = useState([])

   useEffect(() => {
      setMood(moodList);
   }, [])
   const render = ({ item }) => {
      return (
         <View style={{ ...styles.row, borderTopColor: item.color, width: 250 }}>
            <TouchableOpacity style={{ ...styles.item, borderLeftColor: item.color }}>
               <Text style={styles.itemText}>{item.text}</Text>
            </TouchableOpacity>
         </View>
      );
   }
   return (
      <View>
         <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 30, marginTop: 40, marginLeft: 5 }}>Moods & genres</Text>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
               data={mood}
               renderItem={render}
               numColumns={4}
               keyExtractor={(item, index) => index.toString()}
               columnWrapperStyle={{ flex: 1, justifyContent: 'space-between' }}
            />
         </ScrollView>
      </View>
   );
}


const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: "row",
      gap: 10
   },
   item: {
      padding: 10,
      backgroundColor: "rgba(100,100,100,0.7)",
      borderLeftWidth: 8,
      borderRadius: 8,
      marginRight: 15,
      marginTop: 10
   },
   itemText: {
      color: "#ddd",
      fontWeight: "600",
      fontSize: 15
   }
})
export default Body;