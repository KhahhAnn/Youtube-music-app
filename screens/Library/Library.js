import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native';
import HeaderLibary from './components/header';
import OptionLibrary from './components/OptionLibrary';
import Content from './components/Content';

const LibraryScreen = () => {
   return (
      <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1, paddingBottom: 60 }}>
         <ScrollView>
            <SafeAreaView style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}>
               <HeaderLibary />
               <OptionLibrary />
               <Content />
            </SafeAreaView>
         </ScrollView>
      </LinearGradient>

   );
}

export default LibraryScreen;