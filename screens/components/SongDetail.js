import { Entypo, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';

const SongDetail = ({ route }) => {
   const { song } = route.params;
   const navigation = useNavigation();
   const [sound, setSound] = useState();
   const [isPlaying, setIsPlaying] = useState(false);
   const [position, setPosition] = useState(0);
   const [duration, setDuration] = useState(0);
   const imageRef = useRef(null);
   const [rotationProgress, setRotationProgress] = useState(0);

   useEffect(() => {
      return sound
         ? () => {
            sound.unloadAsync();
         }
         : undefined;
   }, [sound]);

   useEffect(() => {
      const updatePosition = async () => {
         if (sound) {
            const status = await sound.getStatusAsync();
            setPosition(status.positionMillis);
            setDuration(status.durationMillis);
         }
      };

      const positionInterval = setInterval(updatePosition, 1000);

      return () => clearInterval(positionInterval);
   }, [sound]);

   const playSound = async () => {
      console.log("play");
      if (sound) {
         if (isPlaying) {
            await sound.pauseAsync();
            // Stop the rotation animation
            animateImage(true, true);
         } else {
            await sound.playAsync();
            // Start the rotation animation
            animateImage(true, false);
         }
         setIsPlaying(!isPlaying);
      } else {
         const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: song.songData },
            { shouldPlay: true }
         );
         setSound(newSound);
         setIsPlaying(true);
         // Start the rotation animation
         animateImage(true);
      }
   };

   const animateImage = (shouldRotate, reset = false) => {
      if (shouldRotate) {
         const animationConfig = {
            0: {
               translateX: 0,
               translateY: 0,
               rotate: reset ? '360deg' : '0deg', 
            },
            1: {
               translateX: 0,
               translateY: 0,
               rotate: '360deg',
            },
         };
   
         imageRef.current?.animate(animationConfig, 8000, 0, 'linear');
      }
   };

   const formatTime = (milliseconds) => {
      const totalSeconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
   };

   return (
      <View swipeDirection={["up", "down"]} swipeThreshold={200}>
         <LinearGradient colors={["#bdbdbd", "#151515"]}>
            <View
               style={{
                  height: "100%",
                  width: "100%",
                  marginTop: 20,
                  paddingHorizontal: 15,
               }}
            >
               <View
                  style={{
                     flexDirection: "row",
                     alignItems: "center",
                     justifyContent: "space-between",
                  }}
               >
                  <Pressable onPress={() => navigation.goBack()}>
                     <Entypo name="chevron-thin-up" size={20} color="#01F702" />
                  </Pressable>
                  <Entypo name="dots-three-vertical" size={24} color="white" />
               </View>

               <View style={{ padding: 10 }}>
                  <Animatable.Image
                     ref={imageRef}
                     animation="rotate"
                     iterationCount={isPlaying ? "infinite" : 1}
                     easing="linear"
                     duration={1000}
                     style={{
                        width: 300,
                        height: 300,
                        borderRadius: 150,
                        marginVertical: 60,
                        alignItems: "center",
                        marginLeft: 40,
                     }}
                     source={{ uri: song.image }}
                  />
                  <View
                     style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                     }}
                  >
                     <View>
                        <Text
                           style={{ fontSize: 24, fontWeight: "bold", color: "white" }}
                        >
                           {song.songName}
                        </Text>
                        <Text style={{ color: "#D3D3D3", marginTop: 4 }}>
                           {song.author}
                        </Text>
                     </View>
                     <View style={{ flexDirection: "row", gap: 16 }}>
                        <Pressable>
                           <Feather name="heart" size={24} color="white" />
                        </Pressable>
                     </View>
                  </View>
                  <View style={{ marginTop: 10 }}>
                     <Slider
                        minimumValue={0}
                        maximumValue={duration}
                        value={position}
                        onValueChange={(value) => setPosition(value)}
                        onSlidingComplete={async (value) => {
                           if (sound) {
                              await sound.setPositionAsync(value);
                           }
                        }}
                        thumbTintColor="#FFD369"
                        minimumTrackTintColor="#FFD369"
                        maximumTrackTintColor="#FFF"
                     />
                  </View>
                  <View
                     style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                     }}
                  >
                     <Text style={{ color: "#fff", fontSize: 16 }}>
                        {formatTime(position)}
                     </Text>
                     <Text style={{ color: "#fff", fontSize: 16 }}>
                        {formatTime(duration - position)}
                     </Text>
                  </View>
                  <View
                     style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 17,
                     }}
                  >
                     <Pressable>
                        {/* Your existing shuffle icon */}
                     </Pressable>
                     <Pressable>
                        <Ionicons
                           name="play-skip-back-sharp"
                           size={24}
                           color="white"
                        />
                     </Pressable>
                     <TouchableOpacity
                        style={{
                           width: 60,
                           height: 60,
                           borderRadius: 30,
                           backgroundColor: "white",
                           justifyContent: "center",
                           alignItems: "center",
                        }}
                        onPress={playSound}
                     >
                        <FontAwesome
                           name={isPlaying ? "pause" : "play"}
                           size={24}
                           color="black"
                        />
                     </TouchableOpacity>
                     <Pressable>
                        <Ionicons name="play-skip-forward" size={24} color="white" />
                     </Pressable>
                     <Pressable>
                        {/* Your existing repeat icon */}
                     </Pressable>
                  </View>
               </View>
            </View>
         </LinearGradient>
      </View>
   );
};


const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
   },
   albumImage: {
      width: 300,
      height: 300,
      borderRadius: 150,
      marginBottom: 20,
   },
   songTitle: {
      fontSize: 20,
      fontWeight: "bold",
   },
   songArtist: {
      fontSize: 16,
      color: "#555",
   },
});

export default SongDetail;
