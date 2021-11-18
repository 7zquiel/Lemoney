import React, { useState } from "react"
import { Button, Text, View } from "react-native"
import CurrencyInput from "react-native-currency-input"
import { TextInput } from "react-native-gesture-handler"

import Account from "../components/Account"

export default ({ navigation }) => {
    return (
        <View>
            <Account />
            <Button title = "Salvar" onPress={() => navigation.navigate('Contas')} />
        </View>
    )
}