import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => {
   return (
      <View style={styles.container}>
         <TouchableOpacity style={styles.itemContainer}>
            <MaterialIcons name="new-releases" size={24} color="#ccc" />
            <View>
               <Text style={styles.text}>New</Text>
               <Text style={styles.text}>releases</Text>   
            </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.itemContainer}>
            <Ionicons name="trending-up-outline" size={24} color="#ccc" />
            <Text style={styles.text}>Charts</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.itemContainer}>
            <MaterialCommunityIcons name="emoticon-excited-outline" size={24} color="#ccc" />
            <View>
               <Text style={styles.text}>Moods &</Text>
               <Text style={styles.text}>genres</Text>   
            </View>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      display: "flex",
      flexDirection: "row",
      marginLeft: 5,
      marginTop: 40,
      justifyContent:'space-between',
   },
   itemContainer: {
      display: 'flex',
      flexDirection:"column",
      backgroundColor: "rgba(100,100,100,0.7)",
      width: 120,
      height: 100,
      justifyContent: "space-between",
      borderRadius: 5,
      padding: 10
   },
   text: {
      color: "#fff",
      fontSize: 16,
      fontWeight:"bold"
   }
})
export default Header;