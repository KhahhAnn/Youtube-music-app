import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import YoutubeMusicLogo from "../logo/logMusic";

function LoginScreen() {
   return (
      <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
         <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 80 }} />
            <YoutubeMusicLogo />
            {/* <AntDesign style={{ textAlign: "center" }} name="youtube" size={80} color="red" /> */}
            <Text style={{ color: "white", fontSize: 40, fontWeight: "bold", textAlign: "center", marginTop: 40, }}>Millions of songs free on youtube music</Text>
            <View style={{ height: 80 }} />
            <Pressable
               style={{
                  backgroundColor: "#1DB954",
                  padding: 10,
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: 300,
                  borderRadius: 25,
                  alignItems: "center"
               }}>
               <Text>Sign in with youtuber account</Text>
            </Pressable>
            <Pressable 
               style= {{
                  backgroundColor: "#131624",
                  padding: 10,
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: 300,
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  marginVertical: 10,
                  borderColor: "#C0C0C0",
                  borderWidth:0.8,
                  marginTop:20
               }}
            >
               <Feather name="smartphone" size={24} color="white" />
               <Text style ={{fontWeight:500, color: "white", textAlign: "center", flex: 1}}>Continue with phone number</Text>
            </Pressable>
            <Pressable 
               style= {{
                  backgroundColor: "#131624",
                  padding: 10,
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: 300,
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  marginVertical: 10,
                  borderColor: "#C0C0C0",
                  borderWidth:0.8,
                  marginTop:20
               }}
            >
               <AntDesign name="google" size={24} color="#cd3231" />
               <Text style ={{fontWeight:500, color: "white", textAlign: "center", flex: 1}}>Continue with google</Text>
            </Pressable>
            <Pressable 
               style= {{
                  backgroundColor: "#131624",
                  padding: 10,
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: 300,
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  marginVertical: 10,
                  borderColor: "#C0C0C0",
                  borderWidth:0.8,
                  marginTop:20
               }}
            >
               <FontAwesome5 name="facebook" size={24} color="#0092DB" />
               <Text style ={{fontWeight:500, color: "white", textAlign: "center", flex: 1}}>Continue with facebook account</Text>
            </Pressable>
         </SafeAreaView>
      </LinearGradient>
   );
}

const styles = StyleSheet.create({});

export default LoginScreen;
