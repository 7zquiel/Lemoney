import React from 'react'
import { View, Text } from 'react-native'

export default props => (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props.bColor || "#000"
    }}>
        <Text style={{
            fontFamily: "serif",
            color: props.tColor || "#fff"
        }}>
            {props.children}
        </Text>
    </View>
)