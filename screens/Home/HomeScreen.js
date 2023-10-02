import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import HeaderNav from "./components/HeaderNav";
import Option from './components/Option';
import StartSong from './components/StartSong';
import { AntDesign } from '@expo/vector-icons';
import Recap from "./components/Recap";
import CreateRadio from "./components/CreateRadio";

function HomeScreen() {

   return (
      <LinearGradient colors={["#BBD2C5", "#536976", "#292E49"]} style={{ flex: 1, paddingBottom: 60 }}>
         <ScrollView style={{ marginTop: 50, marginRight: 5, marginLeft: 5 }}>
            <HeaderNav />
            <Option />
            <StartSong />
            <Recap />
            <CreateRadio />
         </ScrollView>
      </LinearGradient>
   );
}

export default HomeScreen;