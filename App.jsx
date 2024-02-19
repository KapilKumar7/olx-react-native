import {Button, Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';

import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  // return <AppNavigator />;
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
