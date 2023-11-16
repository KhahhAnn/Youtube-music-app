import React from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

const SkeletonLoader = () => {
   const animatedValue = new Animated.Value(0);

   const pulseAnimation = () => {
      Animated.loop(
         Animated.sequence([
            Animated.timing(animatedValue, {
               toValue: 1,
               duration: 1000,
               easing: Easing.inOut(Easing.ease),
               useNativeDriver: false,
            }),
            Animated.timing(animatedValue, {
               toValue: 0,
               duration: 1000,
               easing: Easing.inOut(Easing.ease),
               useNativeDriver: false,
            }),
         ])
      ).start();
   };

   pulseAnimation();

   const pulseStyle = {
      opacity: animatedValue.interpolate({
         inputRange: [0, 0.5, 1],
         outputRange: [1, 0.5, 1],
      }),
   };

   return (
      <View style={styles.container}>
         <Animated.View style={[styles.skeleton, pulseStyle]} />
         <Animated.View style={[styles.skeleton, pulseStyle]} />
         <Animated.View style={[styles.skeleton, pulseStyle]} />
         {/* Add more animated skeleton elements as needed */}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
   },
   skeleton: {
      width: 100,
      height: 15,
      borderRadius: 8,
      backgroundColor: "#555",
      marginVertical: 5,
   },
});

export default SkeletonLoader;
