import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Drawer from "./Drawer"
import AccountScreen from "../views/AccountScreen"
import NewAccScreen from "../views/NewAccScreen"
import ProfileScreen from "../views/ProfileScreen"
import IncomeScreen from "../views/IncomeScreen"
import ExpenseScreen from "../views/ExpenseScreen"
import { Button } from "react-native"

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: "#070"},
                    headerTintColor: "#FFF",
                    headerTitleStyle: {fontFamily: "serif"},
                    headerShown: false }} 
        initialRouteName="Root">
            <Stack.Screen name="Root" component={Drawer}/>
            <Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: "#070"} }} name="Receita" component={IncomeScreen}/>
            <Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: "#F00"} }} name="Despesa" component={ExpenseScreen}/>
            <Stack.Screen name="AccountScreen" component={AccountScreen}/>
            <Stack.Screen options={{ headerShown: true }} name="Nova Conta" component={NewAccScreen}/>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        </Stack.Navigator>
    )
}