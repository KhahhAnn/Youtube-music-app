import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MYIP } from '../../constant/Utils';
const CreateRadio = () => {
   const ipv4 = MYIP.Myip;

   const navigation = useNavigation();
   const [isModalVisible, setModalVisible] = useState(false);
   const [newAlbum, setNewAlbum] = useState({ albumName: '', description: "" });

   const toggleModal = () => {
      setModalVisible(!isModalVisible);
   };

   const createNewPlaylist = async () => {
      try {
         const response = await fetch(`http://${ipv4}:8080/api/add-new-album-is-radio`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               albumName: newAlbum.albumName,
               description: newAlbum.description,
               isAlbum: 0,
               isRadio: 1,
               isRecap: 0,
               isPlaylist: 0,
               icon: "",
               image: "https://www.dongnhacxua.com/non-wp/uploads/cassette-muare.vn-dongnhacxua.com_.jpg",
               songList: []
            }),
         });

         if (response.ok) {
            console.log('Playlist created successfully');
            navigation.replace("Main");
         } else {
            console.error('Failed to create playlist');
         }
      } catch (error) {
         console.error('Network error:', error);
      }
      toggleModal();
   };

   return (
      <SafeAreaView style={styles.container}>
         <Text style={{ fontSize: 12, color: "#ccc", fontWeight: "bold" }}>CREATE A RADIO</Text>
         <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>Your music tuner</Text>
         <TouchableOpacity onPress={() => toggleModal()}>
            <Image
               source={{ uri: "https://png.pngtree.com/png-clipart/20201226/ourlarge/pngtree-music-cassette-used-in-the-radio-png-image_2633425.jpg" }}
               style={styles.image}
            />
            <Feather name="plus" size={24} color="black" style={styles.icon} />
         </TouchableOpacity>
         <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
         >
            <View style={styles.modalContainer}>
               <View style={styles.modalContent}>
                  <Text style={styles.primText}>Create New Radio</Text>
                  <Text style={styles.primText}>Album name:</Text>
                  <TextInput
                     style={styles.input}
                     placeholder="Playlist Name"
                     onChangeText={(text) => setNewAlbum({ ...newAlbum, albumName: text })}
                  />
                  <Text style={styles.primText}>Description:</Text>
                  <TextInput
                     style={styles.input}
                     placeholder="Description"
                     onChangeText={(text) => setNewAlbum({ ...newAlbum, description: text })}
                  />
                  <Button title="Create Radio" onPress={createNewPlaylist} />
                  <Button title="Cancel" onPress={toggleModal} />
               </View>
            </View>
         </Modal>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   primText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600"
   },
   container: {
      marginTop: 40,
      marginLeft: 5,
      marginRight: 5,
      display: "flex",
      gap: 10
   },
   image: {
      maxWidth: 400,
      height: 200,
   },
   icon: {
      position: 'absolute',
      bottom: 70,
      left: 170,
      padding: 15,
      borderRadius: 35,
      backgroundColor: "#ddd",
      borderColor: "#fff"
   },
   modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
   },
   modalContent: {
      backgroundColor: 'white',
      width: 350,
      height: 450,
      padding: 40,
      borderRadius: 10,
      elevation: 5,
      backgroundColor: 'black',
      display: "flex",
      flexDirection: "column",
      gap: 20
   },
   input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
      color: "white"
   },
});

export default CreateRadio;
