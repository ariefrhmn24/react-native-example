// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    marginBottom: 20,
  },
});

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Screen 1</Text>
      </View>
    );
  }
}

export default Profile;
