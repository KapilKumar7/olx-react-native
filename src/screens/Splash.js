import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>OLX</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 50,
    fontWeight: '700',
    color: 'white',
  },
});
