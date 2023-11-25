import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import COLORS from '../constant/COLORS';
import { MYIP } from '../constant/Utils';
import Button from './Button';

const Login = ({ navigation }) => {
   const ipv4 = MYIP.Myip;

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [isPasswordShown, setIsPasswordShown] = useState(true);

   const handleSignIn = async () => {
      const endpoint = `http://${ipv4}:8080/account/sign-in`;

      try {
         const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               email: email,
               password: password,
            }),
         });

         if (!response.ok) {
            const errorText = await response.text();
            console.log('Error:', response.status, errorText);
            throw new Error("Mật khẩu hoặc tài khoản sai");
         }

         const userResponse = await fetch(`http://${ipv4}:8080/user/search/findByEmail?email=${email}`);
         const userJson = await userResponse.json();

         console.log('User data received:', userJson);

         _storeData(userJson);

         navigation.navigate("Main");

         console.log('User data stored:', userJson);
      } catch (error) {
         console.log('Error during sign-in:', error.message);
         setError(error.message);
      }
   };

   const _storeData = async (userData) => {
      try {
         await AsyncStorage.setItem("userStore", JSON.stringify(userData));
      } catch (error) {
         console.error('Error storing user data:', error.message);
      }
   };

   return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
         <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View style={{ marginVertical: 22 }}>
               <Text style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  marginVertical: 12,
                  color: COLORS.black
               }}>
                  Hi Welcome Back! 👋
               </Text>

               <Text style={{
                  fontSize: 16,
                  color: COLORS.black
               }}>Hello again, you have been missed!</Text>
            </View>

            <View style={{ marginBottom: 12 }}>
               <Text style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8
               }}>Email address</Text>

               <View style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22
               }}>
                  <TextInput
                     placeholder='Enter your email address'
                     placeholderTextColor={COLORS.black}
                     keyboardType='email-address'
                     onChangeText={(text) => setEmail(text)}
                     style={{
                        width: "100%"
                     }}
                  />
               </View>
            </View>

            <View style={{ marginBottom: 12 }}>
               <Text style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8
               }}>Password</Text>

               <View style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22
               }}>
                  <TextInput
                     placeholder='Enter your password'
                     placeholderTextColor={COLORS.black}
                     secureTextEntry={isPasswordShown}
                     onChangeText={(text) => setPassword(text)}
                     style={{
                        width: "100%"
                     }}
                  />

                  <TouchableOpacity
                     onPress={() => setIsPasswordShown(!isPasswordShown)}
                     style={{
                        position: "absolute",
                        right: 12
                     }}
                  >
                     {isPasswordShown ? (
                        <Ionicons name="eye-off" size={24} color={COLORS.black} />
                     ) : (
                        <Ionicons name="eye" size={24} color={COLORS.black} />
                     )}
                  </TouchableOpacity>
               </View>
            </View>

            <Button
               title="Login"
               filled
               style={{
                  marginTop: 18,
                  marginBottom: 4,
               }}
               onPress={handleSignIn}
            />

            {error ? (
               <Text style={{ color: 'red', marginBottom: 10, fontSize: 18, textAlign: "center", marginTop: 10 }}>{error}</Text>
            ) : null}

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
               <View
                  style={{
                     flex: 1,
                     height: 1,
                     backgroundColor: COLORS.grey,
                     marginHorizontal: 10
                  }}
               />
               <Text style={{ fontSize: 14 }}>Or Login with</Text>
               <View
                  style={{
                     flex: 1,
                     height: 1,
                     backgroundColor: COLORS.grey,
                     marginHorizontal: 10
                  }}
               />
            </View>

            <View style={{
               flexDirection: 'row',
               justifyContent: 'center'
            }}>
               <TouchableOpacity
                  onPress={() => console.log("Pressed")}
                  style={{
                     flex: 1,
                     alignItems: 'center',
                     justifyContent: 'center',
                     flexDirection: 'row',
                     height: 52,
                     borderWidth: 1,
                     borderColor: COLORS.grey,
                     marginRight: 4,
                     borderRadius: 10
                  }}
               >
                  <Image
                     source={{ uri: "http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19753.png" }}
                     style={{
                        height: 36,
                        width: 36,
                        marginRight: 8
                     }}
                     resizeMode='contain'
                  />
                  <Text>Facebook</Text>
               </TouchableOpacity>

               <TouchableOpacity
                  onPress={() => console.log("Pressed")}
                  style={{
                     flex: 1,
                     alignItems: 'center',
                     justifyContent: 'center',
                     flexDirection: 'row',
                     height: 52,
                     borderWidth: 1,
                     borderColor: COLORS.grey,
                     marginRight: 4,
                     borderRadius: 10
                  }}
               >
                  <Image
                     source={{ uri: "http://pluspng.com/img-png/google-logo-png-revised-google-logo-1600.png" }}
                     style={{
                        height: 36,
                        width: 36,
                        marginRight: 8
                     }}
                     resizeMode='contain'
                  />
                  <Text>Google</Text>
               </TouchableOpacity>
            </View>

            <View style={{
               flexDirection: "row",
               justifyContent: "center",
               marginVertical: 22
            }}>
               <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account? </Text>
               <Pressable
                  onPress={() => navigation.navigate("Register")}
               >
                  <Text style={{
                     fontSize: 16,
                     color: COLORS.primary,
                     fontWeight: "bold",
                     marginLeft: 6
                  }}>Register</Text>
               </Pressable>
            </View>
         </View>
      </SafeAreaView>
   );
};

export default Login;
