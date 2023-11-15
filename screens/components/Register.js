import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Button from './Button';
import COLORS from '../constant/COLORS';
import { MYIP } from '../constant/Utils';

const Register = ({ navigation }) => {
   const ipv4 = MYIP.Myip;

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [passwordConfirm, setPasswordConfirm] = useState('');
   const [username, setUsername] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const [isPasswordShown, setIsPasswordShown] = useState(true);

   const handlePasswordConfirm = () => {
      if (password !== passwordConfirm) {
         setErrorMessage("Passwords don't match");
      } else {
         setErrorMessage('');
      }
   };

   const handleSignUp = async () => {
      handlePasswordConfirm();
      const endpoint = `http://${ipv4}:8080/account/register`;
      try {
         const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               email: email,
               password: password,
               userName: username,
            }),
         });

         if (response.ok) {
            console.log('Registration successful');
            navigation.navigate('SignIn');
         } else {
            console.error('Registration failed');
         }
      } catch (error) {
         console.error('Error during registration:', error);
         console.error('Response:', await response.text());
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
                  Create Account
               </Text>

               <Text style={{
                  fontSize: 16,
                  color: COLORS.black
               }}>Connect with your friend today!</Text>
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
                     {
                        isPasswordShown == true ? (
                           <Ionicons name="eye-off" size={24} color={COLORS.black} />
                        ) : (
                           <Ionicons name="eye" size={24} color={COLORS.black} />
                        )
                     }

                  </TouchableOpacity>
               </View>
            </View>

            <View style={{ marginBottom: 12 }}>
               <Text style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8
               }}>Password Confirm</Text>

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
                     onChangeText={(text) => setPasswordConfirm(text)}
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
                     {
                        isPasswordShown == true ? (
                           <Ionicons name="eye-off" size={24} color={COLORS.black} />
                        ) : (
                           <Ionicons name="eye" size={24} color={COLORS.black} />
                        )
                     }

                  </TouchableOpacity>
               </View>
            </View>

            <View style={{ marginBottom: 12 }}>
               <Text style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8
               }}>Username</Text>

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
                     placeholder='Enter your username'
                     placeholderTextColor={COLORS.black}
                     keyboardType='email-address'
                     onChangeText={(text) => setUsername(text)}
                     style={{
                        width: "100%"
                     }}
                  />
               </View>
            </View>
            <View style={{
               flexDirection: 'row',
               marginVertical: 6
            }}>
            </View>

            <Button
               title="Sign Up"
               filled
               style={{
                  marginTop: 18,
                  marginBottom: 4,
               }}
               onPress={handleSignUp}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
               <View
                  style={{
                     flex: 1,
                     height: 1,
                     backgroundColor: COLORS.grey,
                     marginHorizontal: 10
                  }}
               />
               <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
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
                        height: 60,
                        width: 60,
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
               <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
               <Pressable
                  onPress={() => navigation.navigate("SignIn")}
               >
                  <Text style={{
                     fontSize: 16,
                     color: COLORS.primary,
                     fontWeight: "bold",
                     marginLeft: 6
                  }}>Login</Text>
               </Pressable>
            </View>
            {errorMessage ? (
               <View style={{ marginVertical: 10, alignItems: 'center' }}>
                  <Text style={{ color: 'red' }}>{errorMessage}</Text>
               </View>
            ) : null}
         </View>
      </SafeAreaView>
   )
}

export default Register