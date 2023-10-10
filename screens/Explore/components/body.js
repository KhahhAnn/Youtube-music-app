import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const moodList = [
   {
      text: "Mandopop & Cantopop 1",
      color: "red"
   },
   {
      text: "Mandopop & Cantopop 2",
      color: "	#FF1493"
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
      color: "	#8B0000"
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
      color: "	#5F9EA0"
   },
   {
      text: "Mandopop & Cantopop 12",
      color: "	#5F9EA0"
   },
]
const Body = () => {
   return (
      <View>
         <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 30, marginTop: 40, marginLeft: 5 }}>Moods & genres</Text>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {moodList.map((mood, index) => (
               <View key={index} style={{ ...styles.row, borderTopColor: mood.color }}>
                  {Array.from({ length: 3 }).map((_, i) => {
                     const newIndex = index * 3 + i;
                     if (newIndex < moodList.length) {
                        return (
                           <View key={i} style={{ ...styles.item, borderLeftColor: moodList[newIndex].color }}>
                              <Text style={styles.itemText}>{moodList[newIndex].text}</Text>
                           </View>
                        );
                     }
                     return null;
                  })}
               </View>
            ))}
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
      backgroundColor: "rgba(0,0,0,0.5)",
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