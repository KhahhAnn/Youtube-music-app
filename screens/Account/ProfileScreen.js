import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const ProfileScreen = () => {
   return (
      <LinearGradient colors={["#000", "#001"]} style={{ flex: 1, paddingBottom: 60 }}>
         <ScrollView style={{ marginTop: 30}}>
            <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", gap: 10, paddingLeft: 20 }}>
               <Image source={{ uri: "https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/312646293_1544703666027061_1162130465255796089_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JuI871deAAYAX-z3wPt&_nc_ht=scontent.fhan1-1.fna&oh=00_AfCApp9L-bGz1Fh6nGt6gA4My0QmyxVI8As1AoJ13fnJRQ&oe=652CB06C" }} style={{ height: 50, width: 50, borderRadius: 50 }} />
               <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                     <View>
                        <Text style={{ color: "#fff", fontSize: 16 }}>Khánh An</Text>
                        <Text style={{ color: "#fff", fontSize: 16 }}>@khanhan898</Text>
                     </View>
                  </View>
               </View>
            </View>
            <View style={{ borderBottomWidth: 0.5, borderBottomColor: "#fff", paddingBottom: 40, marginTop: 10, paddingLeft: 80 }}>
               <Text style={{ color: "#7B68EE", fontSize: 16 }}>Manage your Google Account</Text>
            </View>
            <View style={{ display: 'flex', gap: 30, paddingBottom: 40, marginTop: 40, paddingLeft: 20 }}>
               <View style={{ display: 'flex', gap: 20, flexDirection: 'row', alignItems: "center" }}>
                  <FontAwesome name="user-circle-o" size={20} color="white" />
                  <Text style={{ color: "#fff", fontSize: 16 }}>Your channel</Text>
               </View>
               <View style={{ display: 'flex', gap: 20, flexDirection: 'row', alignItems: "center" }}>
                  <AntDesign name="download" size={20} color="white" />
                  <Text style={{ color: "#fff", fontSize: 16 }}>Downloads</Text>
               </View>
               <View style={{ display: 'flex', gap: 20, flexDirection: 'row', alignItems: "center" }}>
                  <FontAwesome5 name="history" size={20} color="white" />
                  <Text style={{ color: "#fff", fontSize: 16 }}>History</Text>
               </View>
               <View style={{ display: 'flex', gap: 20, flexDirection: 'row', alignItems: "center" }}>
                  <AntDesign name="banckward" size={20} color="white" />
                  <Text style={{ color: "#fff", fontSize: 16 }}>Your recap</Text>
               </View>
               <View style={{ display: 'flex', gap: 20, flexDirection: 'row', alignItems: "center" }}>
                  <MaterialIcons name="switch-account" size={20} color="white" />
                  <Text style={{ color: "#fff", fontSize: 16 }}>Switch account</Text>
               </View>
               <View style={{ display: 'flex', gap: 20, flexDirection: 'row' }}>
                  <Feather name="settings" size={20} color="white" />
                  <Text style={{ color: "#fff", fontSize: 16 }}>Settings</Text>
               </View>
               <View style={{ display: 'flex', gap: 20, flexDirection: 'row' }}>
                  <Feather name="help-circle" size={20} color="white" />
                  <Text style={{ color: "#fff", fontSize: 16 }}>Help & feedback</Text>
               </View>
            </View>
            <View style={{alignItems: 'center', borderBottomWidth: 0.3, borderBottomColor: "#fff", paddingBottom: 30, marginTop: 30, paddingLeft: 20 }}>
               <Text style={{ color: "#ccc", fontSize: 16 }}>Privacy Policy • Terms of Service</Text>
            </View>
            <View>
               <View style={{alignItems:"center", marginTop: 10}}>
                  <Text style={{color: "#ccc", textAlign: 'center', maxWidth:300}}>Enjoy ad-free music, listen in audio mode, and play music offline</Text>
                  <TouchableOpacity style={{marginTop: 10, backgroundColor:"red", width: "100%", paddingTop: 20, paddingBottom: 20, alignItems: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                     <Text style={{color: "#ccc", textAlign: 'center'}}>Get Music Premium</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </ScrollView>
      </LinearGradient>
   );
}

export default ProfileScreen;

const styles = StyleSheet.create({});
