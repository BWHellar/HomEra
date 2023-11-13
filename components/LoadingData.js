import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const LoadingData = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'} animating={true} theme={{ colors: { primary: '#6c64fb' } }} />
      <Text style={styles.text}>Loading data...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    marginTop: 16,
    fontSize: 16,
  },
});

export default LoadingData;