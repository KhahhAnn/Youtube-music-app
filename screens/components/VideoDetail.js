import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { Video } from 'expo-av';

const VideoDetail = ({ route }) => {
   const { video } = route.params;
   const [status, setStatus] = React.useState({});
   const videoRef = useRef(null);

   useEffect(() => {
      // Reset video status when component mounts or re-mounts
      if (videoRef.current) {
         videoRef.current.playAsync();
      }
   }, [videoRef]);

   const playPauseHandler = () => {
      if (status.isPlaying) {
         videoRef.current.pauseAsync();
      } else {
         videoRef.current.playAsync();
      }
   };

   const stopHandler = () => {
      videoRef.current.stopAsync();
   };

   console.log(video);

   return (
      <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1, paddingBottom: 60 }}>
         <Text>React Native Video Example</Text>
         <Video
            ref={videoRef}
            source={{ uri: video.videoData }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            style={styles.video}
         />

         <View style={styles.controls}>
            <Button title={status.isPlaying ? "Pause" : "Play"} onPress={playPauseHandler} />
         </View>
      </LinearGradient>
   );
};

const styles = StyleSheet.create({
   video: {
      width: 500,
      height: 200
   },
   controls: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
   },
});

export default VideoDetail;
