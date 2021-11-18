import React, { useState } from "react"
import { View, Text, Button } from "react-native"
import CurrencyInput from "react-native-currency-input"

export default ({ navigation }) => {
    const [num, setNum] = useState(0)
    return (
        <View>
            <CurrencyInput
                style={{ color: "black" }}
                value={num} onChangeValue={setNum}
                prefix="R$ "
                onChangeText={(formatedValue) => {console.log(formatedValue)}}/>
                <Button title = "Salvar" onPress={() => navigation.navigate('Visão Geral')} />
        </View>
    )
}