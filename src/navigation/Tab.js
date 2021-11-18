import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons'

import { MainStackNavigator, SecondStackNavigator } from "./Stack"

const Tab = createBottomTabNavigator()

export default props => (

    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
            case 'HomeScreen':
                iconName = focused
                    ? 'ios-home'
                    : 'ios-home-outline';
                break;
            case 'AccountScreen':
                iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                break;
            case 'ProfileScreen':
                iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
            case 'AddScreen':
                iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';        
                break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00FF00',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        headerShown: false
      })} initialRouteName="HomeScreen">
        <Tab.Screen name="HomeScreen" component={MainStackNavigator}/>
        <Tab.Screen name="AccountScreen" component={SecondStackNavigator} />
            
    </Tab.Navigator>
)