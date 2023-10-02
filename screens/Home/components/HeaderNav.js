
import { AntDesign, Entypo } from '@expo/vector-icons';
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HeaderNav = () => {
   return (
      <View style={styles.headerContainer}>
         <View style={styles.headerItem}>
            <Entypo name="youtube-with-circle" size={60} color="red" />
            <Text style={{ fontSize: 22, fontWeight: "700" }}>Music</Text>
         </View>
         <View style={styles.headerItem}>
            <AntDesign name="iconfontdesktop" size={26} color="black" style={{ marginRight: 20 }} />
            <AntDesign name="search1" size={26} color="black" style={{ marginRight: 20 }} />
            <Image style={styles.icon} source={{ uri: "https://yt3.ggpht.com/-63rHscXfHaY/AAAAAAAAAAI/AAAAAAAAAAA/i1lzd-3WrDU/s108-c-k-no-mo-rj-c0xffffff/photo.jpg" }} />
         </View>
      </View>
   );
}
const styles = StyleSheet.create({
   headerContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
   },
   headerItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
   },
})
export default HeaderNav;