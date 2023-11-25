import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const options = [
   { content: "Playlist" },
   { content: "Songs" },
   { content: "Albums" },
   { content: "Artists" },
   { content: "Podcasts" },
]

const OptionLibrary = () => {
   return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ maxWidth: 500 }}>
         <View style={{ marginTop: 30, display: "flex", flexDirection: "row", justifyContent: "center" }}>
            {
               options.map((option, index) => (
                  <TouchableOpacity key={index} style={styles.optionContainer}>
                     <Text style={styles.optionText}>{option.content}</Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   optionContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: 10,
      flex: 1,
      marginHorizontal: 5
   },
   optionText: {
      width: 90,
      height: 50,
      textAlign: "center",
      textAlignVertical: "center",
      paddingTop: 15
   },
})

export default OptionLibrary;