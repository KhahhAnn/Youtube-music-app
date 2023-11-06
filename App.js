import { StatusBar, StyleSheet } from 'react-native';
import Navigation from './StackNavigator';
import { useEffect } from 'react';
import Register from './screens/components/Register';

export default function App() {

  return (
    <>
      <Navigation />
      <StatusBar barStyle="default" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});