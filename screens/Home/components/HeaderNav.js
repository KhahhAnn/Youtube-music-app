// HeaderNav.js
import { AntDesign, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar';

const HeaderNav = ({user}) => {
   const navigation = useNavigation();
   const [searchMode, setSearchMode] = useState(false);

   const handleSearch = (query) => {
      if (query.trim() === '') {
         setSearchMode(false);
      } else {
         navigation.navigate('SearchScreen', { query });
         setSearchMode(false);
      }
   };

   return (
      <SafeAreaView style={styles.headerContainer}>
         <View style={styles.headerItem}>
            <Entypo name="youtube-with-circle" size={60} color="red" />
            <Text style={{ fontSize: 22, fontWeight: '700', color: 'white' }}>Music</Text>
         </View>
         <View style={styles.headerItem}>
            {!searchMode && (
               <TouchableOpacity onPress={() => setSearchMode(true)}>
                  <AntDesign name="search1" size={22} color="white" style={{ marginRight: 20 }} />
               </TouchableOpacity>
            )}

            {searchMode && <SearchBar onSearch={handleSearch} />}

            {!searchMode && (
               <Image
                  style={styles.icon}
                  source={{
                     uri: user.image,
                  }}
               />
            )}
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   headerItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
   },
   icon: {
      width: 30,
      height: 30,
      borderRadius: 50,
   },
});

export default HeaderNav;
