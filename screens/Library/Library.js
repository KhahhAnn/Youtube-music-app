import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native';
import HeaderLibary from './components/header';
import OptionLibrary from './components/OptionLibrary';
import Content from './components/Content';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native-animatable';

const LibraryScreen = () => {
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
         <SafeAreaView>
            <ScrollView>
               {user ? (
                  <View style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}>
                     <HeaderLibary user={user} />
                     <OptionLibrary />
                     <Content />
                  </View>
               ) : (
                  <Text>Đang tải...</Text>
               )}
            </ScrollView>
         </SafeAreaView>
      </LinearGradient>
   );
}

export default LibraryScreen;