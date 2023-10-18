import React from "react";
import CreateRadio from "./components/CreateRadio";
import HeaderNav from "./components/HeaderNav";
import HitToday from "./components/HitToday";
import Option from './components/Option';
import Recap from "./components/Recap";
import StartSong from './components/StartSong';
import RecommendRadio from "./components/RecommendRadio";
import TopMusic from "./components/TopMusic";
import { SafeAreaView, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TrendingPlaylists from "./components/TrendingPlaylists";

const HomeScreen = () => {

   return (
      <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1, paddingBottom: 60 }}>
         <ScrollView>
            <SafeAreaView style={{marginTop:10, marginRight: 10, marginLeft: 10 }}>
               <HeaderNav />
               <Option />
               <HitToday />
               <RecommendRadio />
               <StartSong />
               <Recap />
               <CreateRadio />
               <TopMusic />
               <TrendingPlaylists />
            </SafeAreaView>
         </ScrollView>
      </LinearGradient>
   );
}

export default HomeScreen;