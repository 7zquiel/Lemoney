import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"

import HomeScreen from "../views/HomeScreen"
import AccountScreen from "../views/AccountScreen"
import ProfileScreen from "../views/ProfileScreen"

const Drawer = createDrawerNavigator()

export default props => (

    <Drawer.Navigator
    screenOptions={{headerStyle: {backgroundColor: "#007700"},
                    headerTintColor: "#FFF",
                    headerTitleStyle: {fontFamily: "serif"},
                    headerShown: true }}>
        <Drawer.Screen initialParams={{ param: 0 }} name="Visão Geral" options={{ headerTitle: "Lemoney" }} component={HomeScreen}/>
        <Drawer.Screen name="Contas" component={AccountScreen}/>
        <Drawer.Screen name="Perfil" component={ProfileScreen}/>
    </Drawer.Navigator>
)