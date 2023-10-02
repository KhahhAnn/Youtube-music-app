import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
const options = [
   { content: "Relax" },
   { content: "Energize" },
   { content: "Workout" },
   { content: "Commute" },
   { content: "Focus" },
]

const Option = () => {
   return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ maxWidth: 500 }}>
         <View style={{ marginTop: 30, display: "flex", flexDirection: "row", justifyContent: "center" }}>
            {
               options.map((option, index) => (
                  <View key={index} style={styles.optionContainer}>
                     <Text style={styles.optionText}>{option.content}</Text>
                  </View>
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
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      borderRadius: 10,
      flex: 1,
      marginHorizontal: 5
   },
   optionText: {
      width: 90,
      height: 50,
      textAlign: "center",
      textAlignVertical: "center"
   },
})

export default Option;