import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>WhatsApp</Text>
        <View style={styles.headerIcons}>
          <Icon name="camera-outline" size={24} color="#fff" style={styles.icon} />
          <Icon name="pencil-outline" size={24} color="#fff" style={styles.icon} />
          <Icon name="dots-vertical" size={24} color="#fff" style={styles.icon} />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Pergunte à Meta AI ou pesquise"
          placeholderTextColor="#888"
        />
      </View>

      <ScrollView style={styles.chatsContainer}>
        <TouchableOpacity style={styles.chatItem}>
          <Image
            source={{ uri: 'https://i.imgur.com/kN447Ri.jpg' }}
            style={styles.chatAvatar}
          />
          <View style={styles.chatInfo}>
            <Text style={styles.chatName}>Caravana Flabus</Text>
            <Text style={styles.chatMessage}>Flamengo Penta</Text>
          </View>
          <Text style={styles.chatTime}>23:08</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatItem}>
          <Image
            source={{ uri: 'https://i.imgur.com/kN447Ri.jpg' }}
            style={styles.chatAvatar}
          />
          <View style={styles.chatInfo}>
            <Text style={styles.chatName}>Rafael Januzzi</Text>
            <Text style={styles.chatMessage}>Serratec</Text>
          </View>
          <Text style={styles.chatTime}>23:06</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatItem}>
          <Image
            source={{ uri: 'https://i.imgur.com/kN447Ri.jpg' }}
            style={styles.chatAvatar}
          />
          <View style={styles.chatInfo}>
            <Text style={styles.chatName}>Rafael Januzzi</Text>
            <Text style={styles.chatMessage}>2024</Text>
          </View>
          <Text style={styles.chatTime}>21:34</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatItem}>
          <Image
            source={{ uri: 'https://i.imgur.com/kN447Ri.jpg' }}
            style={styles.chatAvatar}
          />
          <View style={styles.chatInfo}>
            <Text style={styles.chatName}>Rafael Januzzi</Text>
            <Text style={styles.chatMessage}>Trabalho final</Text>
          </View>
          <Text style={styles.chatTime}>18:09</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatItem}>
          <Image
            source={{ uri: 'https://i.imgur.com/kN447Ri.jpg' }}
            style={styles.chatAvatar}
          />
          <View style={styles.chatInfo}>
            <Text style={styles.chatName}>Turma 22 Serratec</Text>
            <Text style={styles.chatMessage}>Rafael: Concluido</Text>
          </View>
          <Text style={styles.chatTime}>12:50</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabButton}>
          <Icon name="message-outline" size={24} color="#fff" />
          <Text style={styles.tabText}>Conversas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Icon name="image-outline" size={24} color="#fff" />
          <Text style={styles.tabText}>Atualizações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Icon name="account-group-outline" size={24} color="#fff" />
          <Text style={styles.tabText}>Comunidades</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Icon name="phone-outline" size={24} color="#fff" />
          <Text style={styles.tabText}>Ligações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111B21', 
  },
  header: {
    paddingTop: 40, 
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#202C33',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
  },
  searchContainer: {
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    backgroundColor: '#2A3942',
    color: '#fff',
  },
  chatsContainer: {
    padding: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  chatAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  chatMessage: {
    color: '#888',
  },
  chatTime: {
    color: '#888',
    fontSize: 12,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#202C33',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    color: '#fff',
    fontSize: 12,
  },
});
