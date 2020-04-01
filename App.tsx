/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import Counter from './components/Counter';

const App = () => {
  // Feature: Color scheme mode infos
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" />
        <View>
          <Text>
            {colorScheme === 'dark'
              ? '🌚 Time to go sleep'
              : '🌞 Time to go hike'}
          </Text>
        </View>

        <Counter />
      </SafeAreaView>
    </>
  );
};

export default App;
