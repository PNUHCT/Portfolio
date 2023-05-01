import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BotTabScreen from './navigation/botTab'; // import botTab.js

const App = () => {
  return (
    <NavigationContainer>
      <BotTabScreen/>
    </NavigationContainer>
  );
};

export default App;