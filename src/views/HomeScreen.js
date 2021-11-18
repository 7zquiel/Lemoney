import React, { useEffect } from "react"
import { Button, View, Text, StyleSheet } from "react-native"
import ActionButton from "react-native-action-button"
import Ionicon from "react-native-vector-icons/Ionicons"

import ExpenseScreen from "./ExpenseScreen"
import IncomeScreen from "./IncomeScreen"

export default ({ navigation }) => {
    const num = 0
    return (
        <View style={styles.View1}>
            <View style={styles.View2}>
                <View style={styles.View3}>
                    <Text style={{ fontWeight: "bold" }}>
                        Saldo de Contas:
                    </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        R$ {num}
                    </Text>
                </View>
            </View>
            <View style={styles.ButtonPosition}>
                <ActionButton buttonColor="#0288d1">
                    <ActionButton.Item
                        buttonColor="#007700"
                        title="Receita"
                        onPress={() => navigation.navigate("Receita")}>
                        <Ionicon name="trending-up" style={{fontSize: 20, height: 22, color: 'white'}} />
                    </ActionButton.Item>
                    <ActionButton.Item
                        buttonColor="#FF0000"
                        title="Despesa"
                        onPress={() => navigation.navigate("Despesa")}>
                        <Ionicon name="trending-down" style={{fontSize: 20, height: 22, color: 'white'}} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    View1: {
        flex: 1,
        flexDirection: "column"
    },
    View2: {
        paddingTop: 20,
        paddingHorizontal: 20,
        flex: 0.15,
        backgroundColor: "#070",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    View3: {
        borderRadius: 10,
        padding: 15,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
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