import React, { useEffect, useState } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text } from "react-native";
import HeaderNav from '../Home/components/HeaderNav';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExploreScreen = () => {
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
         {user ? (
            <ScrollView style={{ marginTop: 50, marginRight: 5, marginLeft: 5 }}>
               <HeaderNav user={user} />
               <Header />
               <Body />
               <Footer />
            </ScrollView>
         ) : (
            <Text>Đang tải...</Text>
         )}
      </LinearGradient>
   );
}

export default ExploreScreen;