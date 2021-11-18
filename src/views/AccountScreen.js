import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"
import ActionButton from "react-native-action-button"
import Ionicon from "react-native-vector-icons/Ionicons"

import CentralText from "../components/CentralText"

export default ({ navigation }) => {
    return (
        <View style={{flex: 1,
            flexDirection: "column"}}>
            <View style={{flex: 0.9,
                padding: 20,
                alignItems: "flex-start",
                justifyContent: "flex-start"}}>
                <Text>
                    Carteira
                </Text>
            </View>
            <View style={styles.ButtonPosition}>
                <ActionButton buttonColor="#0288d1" onPress={() => navigation.navigate("Nova Conta")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonPosition: {
        flex: 0.85,
        marginLeft: 160,
        marginRight: 5,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    }
})