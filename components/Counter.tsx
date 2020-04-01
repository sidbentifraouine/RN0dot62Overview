import React from 'react';
import {View, Text, Button} from 'react-native';
import ChuckNorrisFact from './ChuckNorrisFact';

const Counter = () => {
  console.log('🔢 Count Render');

  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);

  return (
    <View>
      <View>
        <Text>Count: {count}</Text>
        <Button title="+" onPress={increment} />
      </View>

      <ChuckNorrisFact />
    </View>
  );
};

export default Counter;
