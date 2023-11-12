import React, { useEffect, useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const ProfileScreen = ({ route }) => {
   const ipv4 = "172.20.10.4";
   // const ipv4 = "192.168.1.22";
   const { user } = route.params;
   // const [profile, setProfile] = useState({});
   // const fetchUserProfile = async () => {
   //    try {
   //       const response = await fetch(`http://${ipv4}:8080/user/search/findByEmail?email=${user.email}`);
   //       const json = await response.json();
   //       console.log(json);
   //       setProfile(json);
   //    } catch (error) {
   //       console.error("Lỗi:", error);
   //    }
   // };

   // useEffect(() => {
   //    fetchUserProfile();
   // }, [user]);

   return (
      <LinearGradient colors={["#000", "#001"]} style={{ flex: 1, paddingBottom: 60 }}>
         <ScrollView style={{ marginTop: 30 }}>
            <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", gap: 10, paddingLeft: 20 }}>
               <Image source={{ uri: user.image }} style={{ height: 50, width: 50, borderRadius: 50 }} />
               <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                     <View>
                        <Text style={{ color: "#fff", fontSize: 16 }}>{user.userName}</Text>
                        <Text style={{ color: "#fff", fontSize: 16 }}>{user.email}</Text>
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
            <View style={{ alignItems: 'center', borderBottomWidth: 0.3, borderBottomColor: "#fff", paddingBottom: 30, marginTop: 30, paddingLeft: 20 }}>
               <Text style={{ color: "#ccc", fontSize: 16 }}>Privacy Policy • Terms of Service</Text>
            </View>
            <View>
               <View style={{ alignItems: "center", marginTop: 10 }}>
                  <Text style={{ color: "#ccc", textAlign: 'center', maxWidth: 300 }}>Enjoy ad-free music, listen in audio mode, and play music offline</Text>
                  <TouchableOpacity style={{ marginTop: 10, backgroundColor: "red", width: "100%", paddingTop: 20, paddingBottom: 20, alignItems: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                     <Text style={{ color: "#ccc", textAlign: 'center' }}>Get Music Premium</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </ScrollView>
      </LinearGradient>
   );
}

export default ProfileScreen;

const styles = StyleSheet.create({});
