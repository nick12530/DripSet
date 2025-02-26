// screens/CartScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Icon name="shopping-cart" size={100} color="gray" />
      <Text style={styles.title}>Your Cart is Empty</Text>
      <Text>Add some items to your cart!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 16 },
});

export default CartScreen;