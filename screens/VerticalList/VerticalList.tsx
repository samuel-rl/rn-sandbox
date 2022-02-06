import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { width } from '../ChanelScrollScreen/constants';

const titles = [
  'Title 1',
  'Title 2',
  'Title 3',
  'Title 4',
  'Title 5',
  'Title 6',
  'Title 7',
];

const ProfilePicture = ({uri}:any) => {
  return (
    <TouchableOpacity
      style={styles.profilePicture}
      onPress={() => {Alert.alert('Profile Picture Clicked')}}
      >
      <Image
        source={{uri}}
        style={styles.profilePictureImage}
      />
    </TouchableOpacity>
  );
};

const VerticalList = () => {

  return (
    <View style={styles.container}>
      <View style={{
            width: '20%',
            height: '100%',
            backgroundColor: '#FFF9F4',
      }}>
        <View style={{
          width: '100%',
          height: "10%"
        }}/>
        
        <View style={{
          height: "80%",
          width: '100%',
        }}
        >
        <LinearGradient
          colors={['rgba(255,249,244,1)', 'rgba(255,249,244,0)']}
          style={{ width: '100%', height: '5%', position: 'absolute', zIndex: 1 }}
        />
          <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          >
        {titles.map((title, index) => {
          return (
            <TouchableOpacity key={index} style={{
              height: 150,
              width: width* 0.2,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}
            onPress={() => {Alert.alert(`${title} Clicked`)}}
            >
              <Text
                style={{
                  padding: 10,
                  transform: [{ rotate: '-90deg'}],
                  fontSize: 20,
                  width: 150,
                  textAlign: 'center',
                }}
              >{title}</Text>
            </TouchableOpacity>
          )
        })}
        </ScrollView>
        <LinearGradient
          colors={['rgba(255,249,244,0)', 'rgba(255,249,244,1)']}
          style={{ width: '100%', height: '5%', position: 'absolute', zIndex: 1, bottom: 0 }}
        />
        </View>
        <View style={{
          width: '100%',
          height: "10%",
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <ProfilePicture
            uri="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
        </View>
      </View>
      <View style={{
            width: '80%',
            height: '100%',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
      }}>
        <Text>Content</Text>
      </View>
    </View>
  );
};

export default VerticalList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    fontSize: 20,
    transform: [{ rotate: '-90deg'}]
  },
  profilePicture: {
    width: width * 0.2 * 0.8,
    height: width * 0.2 * 0.8,
    borderRadius: width * 0.2 * 0.8 / 2,
    backgroundColor: 'red',
  },
  profilePictureImage: {
    width: '100%',
    height: '100%',
    borderRadius: width * 0.2 * 0.8 / 2,
  },
});