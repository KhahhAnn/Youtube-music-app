import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ onSearch }) => {
   const [query, setQuery] = useState('');

   const handleSearch = () => {
      onSearch(query);
      setQuery(''); 
      Keyboard.dismiss();
   };

   return (
      <View style={styles.container}>
         <TextInput
            style={styles.input}
            placeholder="Search for a song"
            value={query}
            onChangeText={(text) => setQuery(text)}
            onSubmitEditing={handleSearch}
         />
         <TouchableWithoutFeedback  onPress={handleSearch}>
            <AntDesign name="search1" size={22} color="white" style={{ marginRight: 20 }} />
         </TouchableWithoutFeedback>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
   },
   input: {
      flex: 1,
      color: 'white',
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      marginRight: 10,
      fontSize: 18
   },
});

export default SearchBar;
