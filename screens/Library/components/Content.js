import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MYIP } from '../../constant/Utils';
import SkeletonLoader from '../../components/SkeletonLoader';
import * as Animatable from "react-native-animatable";

const Content = ({ item }) => {
   const ipv4 = MYIP.Myip;

   const [albums, setAlbums] = useState([]);
   const [isModalVisible, setModalVisible] = useState(false);
   const [menuVisibility, setMenuVisibility] = useState({});
   const [newAlbum, setNewAlbum] = useState({ albumName: '', description: "" });
   const navigation = useNavigation();
   const [loading, setLoading] = useState(true);


   const albumList = async () => {
      try {
         const response = await fetch(`http://${ipv4}:8080/albums/search/findByIsAlbumTrue`);
         const json = await response.json();
         return setAlbums(json._embedded.albums);
      } catch (error) {
         console.log("Error:", error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      albumList();
   }, []);
   const toggleModal = () => {
      setModalVisible(!isModalVisible);
   };
   const toggleMenu = (itemId) => {
      setMenuVisibility({
         ...menuVisibility,
         [itemId]: !menuVisibility[itemId],
      });
   };
   const createNewPlaylist = async () => {
      try {
         const response = await fetch(`http://${ipv4}:8080/api/add-new-album-is-album`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               albumName: newAlbum.albumName,
               description: newAlbum.description,
               isAlbum: 1,
               isRadio: 0,
               isRecap: 0,
               isPlaylist: 0,
               icon: "",
               image: "https://tse3.mm.bing.net/th?id=OIP.R_vmPwlXv3pxxrvuIea0bQHaKe&pid=Api&P=0&h=180",
               songList: []
            }),
         });

         if (response.ok) {
            console.log('Playlist created successfully');
            console.log(response);
            albumList();
         } else {
            console.error('Failed to create playlist');
         }
      } catch (error) {
         console.log('Network error:', error);
      }
      toggleModal();
   };

   return (
      <View style={[styles.ml5, styles.mr5, styles.mt20, styles.mb20]}>
         <View style={{ ...styles.flexRow, justifyContent: "space-between" }}>
            <View style={{ ...styles.flexRow, gap: 10 }}>
               <Text style={styles.primText}>Recent activity</Text>
               <AntDesign name="down" size={18} color="white" />
            </View>
            <AntDesign name="appstore-o" size={24} color="white" />
         </View>
         {loading ? (
            <SkeletonLoader />
         ) : (albums.map((item, index) => (
            <View key={index} style={styles.flexRow}>
               <TouchableOpacity style={{ display: "flex", gap: 5, flexDirection: "row", alignItems: "center", maxWidth: 500 }} onPress={() => navigation.navigate("AlbumDetail", { album: item })}>
                  <Image source={{ uri: item.image }} style={{ width: 70, height: 70, borderRadius: 5 }} />
                  <View style={styles.flexCol}>
                     <Text style={styles.primText}>{item.albumName}</Text>
                     <Text style={styles.descText}>{item.description}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row", marginLeft: 40 }}>
                     <TouchableOpacity onPress={() => toggleMenu(item.id)}>
                        <Feather name="more-vertical" size={24} color="white" style={{ marginLeft: 20 }} />
                     </TouchableOpacity>
                     {menuVisibility[item.id] && (
                        <Animatable.View animation="slideInRight" duration={400} style={{ marginRight: 200, justifyContent: "center", }}>
                           <TouchableOpacity onPress={async () => {
                              const albumDelete = item;
                              try {
                                 const response = await fetch(`http://${ipv4}:8080/api/delete-album/${albumDelete.id}`, {
                                    method: 'DELETE',
                                    headers: {
                                       'Content-Type': 'application/json',
                                    }
                                 });
                                 if (response.ok) {
                                    albumList();
                                 } else {
                                    console.log('Error removing the album');
                                 }
                              } catch (error) {
                                 console.log('Error removing song the album:', error);
                              }
                           }}>
                              <Text style={{ ...styles.menuItem, color: "#fff" }}>
                                 Remove to album
                              </Text>
                           </TouchableOpacity>
                        </Animatable.View>
                     )}
                  </View>
               </TouchableOpacity>
            </View>
         )))}
         <TouchableOpacity style={{ display: 'flex', flexDirection: "row", alignItems: "center", backgroundColor: "white", maxWidth: 150, padding: 10, borderRadius: 20, left: 230 }} onPress={toggleModal}>
            <AntDesign name="plus" size={20} color="black" />
            <Text style={{ color: "black", fontSize: 18 }}>New playlists</Text>
         </TouchableOpacity>
         <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
         >
            <View style={styles.modalContainer}>
               <View style={styles.modalContent}>
                  <Text style={styles.primText}>Create New Playlist</Text>
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
                  <Button title="Create Playlist" onPress={createNewPlaylist} />
                  <Button title="Cancel" onPress={toggleModal} />
               </View>
            </View>
         </Modal>
      </View>
   );
}

const styles = StyleSheet.create({
   mt20: {
      marginTop: 20,
   },
   mr5: {
      marginRight: 5,
   },
   ml5: {
      marginLeft: 5,
   },
   mb20: {
      marginBottom: 20,
   },
   flexRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
      justifyContent: "space-between"
   },
   flexCol: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      marginLeft: 10,
      width: 170
   },
   primText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600"
   },
   descText: {
      color: "#ccc",
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

export default Content;
