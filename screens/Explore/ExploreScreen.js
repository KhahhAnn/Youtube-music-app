import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native";
import HeaderNav from '../Home/components/HeaderNav';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const ExploreScreen = ({route}) => {
   const {user} = route.params;
   return(
      <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1, paddingBottom: 60 }}>
         <ScrollView style={{ marginTop: 50, marginRight: 5, marginLeft: 5 }}>
            <HeaderNav user={user} />
            <Header />
            <Body />
            <Footer />
         </ScrollView>
      </LinearGradient>
   );
}

export default ExploreScreen;