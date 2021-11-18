import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import CurrencyInput from 'react-native-currency-input'

export default props => {
    const [nome, setNome] = useState('')
    const [num, setNum] = useState(0)
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ color: "black",  fontWeight: "bold"}}>Saldo da Conta:</Text>
            <CurrencyInput
                style={{ color: "black",  fontWeight: "bold", fontSize: 35 }}
                placeholderTextColor="gray"
                value={num} onChangeValue={num => setNum(num)}
                prefix="R$ "
                onChangeText={(formatedValue) => {console.log(formatedValue)}}/>
            <TextInput style={{ color: "#000",borderBottomColor: '#000', borderBottomWidth: 1 }}
                placeholderTextColor="gray"
                placeholder="Nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}