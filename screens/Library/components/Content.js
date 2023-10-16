import React from 'react';
import { Image, ScrollView, StyleSheet, Text, Touchable, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Content = () => {
   return (
      <ScrollView style={[styles.ml5, styles.mr5, styles.mt20]}>
         <View style={{ ...styles.flexRow, justifyContent: "space-between" }}>
            <View style={{ ...styles.flexRow, gap: 10 }}>
               <Text style={styles.primText}>Recent activity</Text>
               <AntDesign name="down" size={18} color="white" />
            </View>
            <AntDesign name="appstore-o" size={24} color="white" />
         </View>
         <View style={styles.mt20}>
            <View style={styles.flexRow}>
               <View style={styles.flexRow}>
                  <Image source={{ uri: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-meo-con-khung-long.jpg" }} style={{ width: 70, height: 70, borderRadius: 5 }} />
                  <View style={styles.flexCol}>
                     <Text style={styles.primText}>Mr Siro</Text>
                     <Text style={styles.descText}>Artist • 2.07M subscribers</Text>
                  </View>
               </View>
               <Feather name="more-vertical" size={24} color="white" />
            </View>
            <View style={styles.flexRow}>
               <View style={styles.flexRow}>
                  <Image source={{ uri: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-meo-con-khung-long.jpg" }} style={{ width: 70, height: 70, borderRadius: 5 }} />
                  <View style={styles.flexCol}>
                     <Text style={styles.primText}>Mr Siro</Text>
                     <Text style={styles.descText}>Artist • 2.07M subscribers</Text>
                  </View>
               </View>
               <Feather name="more-vertical" size={24} color="white" />
            </View>
            <View style={styles.flexRow}>
               <View style={styles.flexRow}>
                  <Image source={{ uri: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-meo-con-khung-long.jpg" }} style={{ width: 70, height: 70, borderRadius: 5 }} />
                  <View style={styles.flexCol}>
                     <Text style={styles.primText}>Mr Siro</Text>
                     <Text style={styles.descText}>Artist • 2.07M subscribers</Text>
                  </View>
               </View>
               <Feather name="more-vertical" size={24} color="white" />
            </View>
            <View style={styles.flexRow}>
               <View style={styles.flexRow}>
                  <Image source={{ uri: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-meo-con-khung-long.jpg" }} style={{ width: 70, height: 70, borderRadius: 5 }} />
                  <View style={styles.flexCol}>
                     <Text style={styles.primText}>Mr Siro</Text>
                     <Text style={styles.descText}>Artist • 2.07M subscribers</Text>
                  </View>
               </View>
               <Feather name="more-vertical" size={24} color="white" />
            </View>
         </View>
         <View style={{display:'flex', flexDirection:"row", alignItems:"center", backgroundColor: "white", maxWidth: 150, padding: 10, borderRadius: 20, left: 240}}>
            <AntDesign name="plus" size={20} color="black" />
            <Text style={{color: "black", fontSize: 18}}>New playlists</Text>
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   mt20: {
      marginTop: 20,
   },
   mr5: {
      marginRight: 5,
   },
   ml5: {
      marginLeft: 5,
   },
   flexRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
      justifyContent: "space-between"
   },
   flexCol: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      marginLeft: 10,
   },
   primText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600"
   },
   descText: {
      color: "#ccc",
   }
})

export default Content;