
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { SafeAreaView } from 'react-native';
import { Image, StyleSheet, Text, View } from "react-native";

const HeaderLibary = ({user}) => {
   return (
      <SafeAreaView style={styles.headerContainer}>
         <View style={styles.headerItem}>
            <Text style={{ fontSize: 26, fontWeight: "700", color: "white" }}>Library</Text>
         </View>
         <View style={styles.headerItem}>
            <MaterialIcons name="history" size={28} color="white" style={{ marginRight: 20 }}/>
            <AntDesign name="search1" size={22} color="white" style={{ marginRight: 20 }} />
            <Image style={styles.icon} source={{ uri: user.image }} />
         </View>
      </SafeAreaView>
   );
}
const styles = StyleSheet.create({
   headerContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 60,
   },
   headerItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 5
   },
   icon: {
      width: 30,
      height: 30,
      borderRadius: 50
   }
})
export default HeaderLibary;