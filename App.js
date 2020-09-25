import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Image} from 'react-native'
import CoinsStack from 'crytoTracker/src/components/coins/CoinsStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from 'crytoTracker/src/res/colors'
import FavoriteStack from 'crytoTracker/src/components/favorites/FavoritesStack'

const Tabs = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator 
        tabBarOptions={{
          tintColor: "#fefefe",
          style:{
            backgroundColor: Colors.blackPearl
          }
        }}

      >
        <Tabs.Screen 
          component={CoinsStack}
          name="Coins"
          options={{
            tabBarIcon: ( {size, color}) => (
              <Image 
                style={{tintColor: color, width: size, height: size}}
                source={require('crytoTracker/src/assets/bank.png')} 
              />
            ),
          
          }}
          />


          <Tabs.Screen 
          component={FavoriteStack}
          name="Favorites"
          options={{
            tabBarIcon: ( {size, color}) => (
              <Image 
                style={{tintColor: color, width: size, height: size}}
                source={require('crytoTracker/src/assets/star.png')} 
              />
            ),
          
          }}
          />
      </Tabs.Navigator>
     
    </NavigationContainer>
  );
};

export default App;
