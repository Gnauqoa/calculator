import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Button from "../../../components/Button";
import useCalculation, { Operator } from "../../../hooks/useCalculation";
import { AntDesign } from "@expo/vector-icons";
import Row from "../../../components/Row";



export default function Portrait() {
  const {
    display,
    handleClearPress,
    handleDecimalPress,
    handleEqualsPress,
    handleNumberPress,
    handlePaste,
    handleOperatorPress,
    handleCopy,
    operator,
  } = useCalculation();

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 20,
        flexDirection: "column",
        backgroundColor: "#202020",
        gap: 4,
      }}
    >
      <StatusBar style="dark" />
      <View
        style={{
          paddingBottom: 20,
          paddingRight: 20,
          position: "relative",
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 40,
            textAlign: "right",
          }}
        >
          {display}
        </Text>
        <View
          style={{
            zIndex: 20,
            position: "absolute",
            left: 10,
            top: 0,
          }}
        >
          <TouchableOpacity onPress={handleCopy}>
            <AntDesign name="copy1" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <Row>
        <Button
          operator={operator}
          value="C"
          style="secondary"
          onPress={handleClearPress}
        />
        <Button
          operator={operator}
          value={Operator.ToggleSign}
          style="secondary"
          onPress={() => handleOperatorPress(Operator.ToggleSign)}
        />
        <Button
          operator={operator}
          value={Operator.Division100}
          style="secondary"
          onPress={() => handleOperatorPress(Operator.Division100)}
        />
        <Button
          operator={operator}
          value={Operator.Division}
          style="accent"
          onPress={() => handleOperatorPress(Operator.Division)}
        />
      </Row>
      <Row>
        <Button
          operator={operator}
          value="7"
          onPress={() => handleNumberPress("7")}
        />
        <Button
          operator={operator}
          value="8"
          onPress={() => handleNumberPress("8")}
        />
        <Button
          operator={operator}
          value="9"
          onPress={() => handleNumberPress("9")}
        />
        <Button
          operator={operator}
          value={Operator.Multiplication}
          style="accent"
          onPress={() => handleOperatorPress(Operator.Multiplication)}
        />
      </Row>
      <Row>
        <Button
          operator={operator}
          value="4"
          onPress={() => handleNumberPress("4")}
        />
        <Button
          operator={operator}
          value="5"
          onPress={() => handleNumberPress("5")}
        />
        <Button
          operator={operator}
          value="6"
          onPress={() => handleNumberPress("6")}
        />
        <Button
          operator={operator}
          value={Operator.Subtraction}
          style="accent"
          onPress={() => handleOperatorPress(Operator.Subtraction)}
        />
      </Row>
      <Row>
        <Button
          operator={operator}
          value="1"
          onPress={() => handleNumberPress("1")}
        />
        <Button
          operator={operator}
          value="2"
          onPress={() => handleNumberPress("2")}
        />
        <Button
          operator={operator}
          value="3"
          onPress={() => handleNumberPress("3")}
        />
        <Button
          operator={operator}
          value={Operator.Addition}
          style="accent"
          onPress={() => handleOperatorPress(Operator.Addition)}
        />
      </Row>
      <Row>
        <Button
          operator={operator}
          value="0"
          onPress={() => handleNumberPress("0")}
        />
        <Button operator={operator} value="." onPress={handleDecimalPress} />
        <Button
          operator={operator}
          value="Paste"
          style="accent"
          onPress={handlePaste}
        />
        <Button
          operator={operator}
          value="="
          style="accent"
          onPress={handleEqualsPress}
        />
      </Row>
    </View>
  );
}

const BTN_MARGIN = 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    flexDirection: "column",
  },
  containerLandscape: {
    flexDirection: "row",
  },

  computedValue: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
  },
  btnText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "500",
  },

  btn: {
    backgroundColor: "#333333",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: BTN_MARGIN,
    borderRadius: 100,
  },
  btn2: {
    backgroundColor: "#333333",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: BTN_MARGIN,
    borderRadius: 100,
  },
  btnSecondary: {
    backgroundColor: "#a6a6a6",
  },
  btnTextSecondary: {
    color: "#060606",
  },
  btnAccent: {
    backgroundColor: "#f09a36",
  },
  btnDouble: {
    alignItems: "flex-start",
    flex: 0,
  },
});
