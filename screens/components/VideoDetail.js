import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Video } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';

const VideoDetail = ({ route }) => {
   const { video } = route.params;
   const [status, setStatus] = useState({});
   const [isPlaying, setIsPlaying] = useState(true);
   const videoRef = React.useRef(null);

   useEffect(() => {
      if (videoRef.current) {
         isPlaying ? videoRef.current.playAsync() : videoRef.current.pauseAsync();
      }
   }, [isPlaying]);

   return (
      <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1, paddingBottom: 60 }}>
         <SafeAreaView>

            <Text style={styles.title}>React Native Video Example</Text>
            <Video
               ref={videoRef}
               source={{ uri: video.videoData }}
               rate={1.0}
               volume={1.0}
               isMuted={false}
               resizeMode="cover"
               shouldPlay={isPlaying}
               isLooping
               useNativeControls={false}
               onPlaybackStatusUpdate={(status) => setStatus(() => status)}
               style={styles.video}
            />
            <View style={styles.controls}>
               <Button title={isPlaying ? "Pause" : "Play"} onPress={() => setIsPlaying(!isPlaying)} />
            </View>
         </SafeAreaView>
      </LinearGradient>
   );
};

const styles = StyleSheet.create({
   title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 10,
      color: "#fff"
   },
   video: {
      width: '100%',
      aspectRatio: 16 / 9,
   },
   controls: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
   },
});

export default VideoDetail;
