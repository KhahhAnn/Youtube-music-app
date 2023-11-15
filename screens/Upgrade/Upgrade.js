import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HeaderNav from '../Home/components/HeaderNav';

const Upgrade = () => {
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
      <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
         {user ? (
            <SafeAreaView style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}>
               <View>
                  <HeaderNav user={user} />
               </View>
               <View style={styles.container} >
                  <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                     <Entypo name="youtube-with-circle" size={60} color="red" />
                     <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>YouTube Music</Text>
                  </View>
                  <View style={{ maxWidth: 340, alignItems: "center" }}>
                     <Text style={{ textAlign: "center", color: "#fff", fontSize: 26, fontWeight: "500" }}>Get Music Premium to listen to music ad-free, offline & with your screen off</Text>
                  </View>
                  <View style={{ maxWidth: 360, alignItems: "center" }}>
                     <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>1-month free trial • Then ₫85,000/month • excludes VAT • Cancel anytime</Text>
                  </View>
                  <View style={{ maxWidth: 360, alignItems: "center", borderRadius: 50, backgroundColor: "blue", paddingVertical: 15, paddingHorizontal: 120, marginTop: 20 }}>
                     <Text style={{ textAlign: "center", color: "#000", fontSize: 18, fontWeight: "500" }}>Try it free</Text>
                  </View>
                  <View style={{ maxWidth: 300, alignItems: "center" }}>
                     <Text style={{ textAlign: "center", color: "#fff", fontSize: 16 }}>Or save money with a <Text style={{ color: "#483D8B", fontSize: 16 }}>family membership</Text></Text>
                  </View>
                  <View style={{ maxWidth: 360, alignItems: "center" }}>
                     <Text style={{ textAlign: "center", color: "#ddd", fontSize: 16 }}>Recurring bling. By continuing, you verify that you are at least 18 years old and agree to these <Text style={{ color: "#483D8B", fontSize: 16 }}>term</Text>. See the <Text style={{ color: "#483D8B", fontSize: 16 }}>privacy statement and restrictions</Text>. No refunds for partial biling periods. </Text>
                     <Text style={{ color: "#483D8B", fontSize: 16 }}>Restrictions apply.</Text>
                  </View>
               </View>
            </SafeAreaView>
         ) : (
            <Text>Đang tải...</Text>
         )}
      </LinearGradient>
   );
}

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      justifyContent: "space-around",
      alignItems: "center",
      textAlign: "center",
      marginTop: 60,
      gap: 20
   }
})
export default Upgrade;