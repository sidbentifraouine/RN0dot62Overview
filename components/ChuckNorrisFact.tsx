import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {resolvePreset} from '@babel/core';

type Fact = {
  icon_url: string;
  id: string;
  url: string;
  value: string;
};

const ChuckNorrisFact = /*React.memo(*/ () => {
  console.log('🔥 ChucNorrisFact Render');

  const [fact, setFact] = useState<Fact>();

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data: Fact): void => {
        setFact(data);
      });
  }, []);

  return (
    <View>
      <Text>{fact?.value}</Text>
    </View>
  );
}; /*)*/

export default ChuckNorrisFact;
