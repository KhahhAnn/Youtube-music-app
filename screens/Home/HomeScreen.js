import React, { useEffect, useState } from "react";
import CreateRadio from "./components/CreateRadio";
import HeaderNav from "./components/HeaderNav";
import HitToday from "./components/HitToday";
import Option from './components/Option';
import Recap from "./components/Recap";
import StartSong from './components/StartSong';
import RecommendRadio from "./components/RecommendRadio";
import TopMusic from "./components/TopMusic";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TrendingPlaylists from "./components/TrendingPlaylists";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native-animatable";

const HomeScreen = () => {
   const [user, setUser] = useState(null);

   useEffect(() => {
      const fetchUserData = async () => {
         try {
            const storedData = await AsyncStorage.getItem('userStore');
            const parsedData = JSON.parse(storedData);
            setUser(parsedData);
         } catch (error) {
            console.error('Lỗi khi lấy dữ liệu người dùng:', error.message);
         }
      };

      fetchUserData();
   }, []);

   return (
      <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1, paddingBottom: 60 }}>
         <ScrollView>
            <View style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}>
               {user ? (
                  <>
                     <HeaderNav user={user} />
                     <Option />
                     <HitToday />
                     <RecommendRadio />
                     <StartSong user={user} />
                     <Recap />
                     <CreateRadio />
                     <TopMusic />
                     <TrendingPlaylists />
                  </>
               ) : (
                  <Text>Đang tải...</Text>
               )}
            </View>
         </ScrollView>
      </LinearGradient>
   );
}

export default HomeScreen;
