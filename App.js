import React from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import Home from './src/screens/Home';
import Navigation from './src/navigation';
const App = () => {
  return (
    <>
      <StatusBar
        hidden={false}
        backgroundColor="#000"
        barStyle="light-content"
      />
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
