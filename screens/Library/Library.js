import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { ScrollView } from 'react-native';
import HeaderLibary from './components/header';
import OptionLibrary from './components/OptionLibrary';
import Content from './components/Content';

const LibraryScreen = () => {
   return (
      <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1, paddingBottom: 60}}>
         <ScrollView style={{ marginTop: 50, marginRight: 5, marginLeft: 5 }}>
            <HeaderLibary />
            <OptionLibrary />
            <Content />
         </ScrollView>
      </LinearGradient>

   );
}

export default LibraryScreen;