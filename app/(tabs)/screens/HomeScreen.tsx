import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';

// Define the type for the navigation prop
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

// Sample categories data
const categories = [
  { id: '1', name: 'Men', image: require('../../../assets/images/man.jpg') },
  { id: '2', name: 'Women', image: require('../../../assets/images/woman.jpg') },
  { id: '3', name: 'Kids', image: require('../../../assets/images/kids.jpg') },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Banner Image */}
      <Image source={require('../../../assets/images/banner.jpg')} style={styles.banner} />
      
      {/* Categories */}
      <Text style={styles.title}>Shop by Category</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('Category', { category: item.name })}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
