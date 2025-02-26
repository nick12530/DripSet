import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types'; // Import the RootStackParamList type

// Define the type for the navigation prop
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

// Define the props for the DetailsScreen component
type Props = {
  navigation: DetailsScreenNavigationProp;
};

const DetailsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.text}>
        This is the Details Screen. You can display more information here!
      </Text>
      <Button
        title="Go Back to Home"
        onPress={() => navigation.goBack()} // Navigate back to the previous screen
      />
    </View>
  );
};

// Styles for the DetailsScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default DetailsScreen;