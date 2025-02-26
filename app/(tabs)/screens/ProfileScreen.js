import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <Text>Profile details will be displayed here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default ProfileScreen;