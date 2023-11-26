import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, Text, ScrollView } from "react-native";
import useHistory from "../../../hooks/useHistory";
import { useClipboard } from "../../../hooks/useClipboard";
import useScreenOrientation from "../../../hooks/useScreenOrientation";
import Button from "../../../components/Button";

const Row = ({ children }: { children: any }) => (
  <View style={styles.row}>{children}</View>
);

export default function Portrait() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState("");
  const [storedValue, setStoredValue] = useState("");
  const { addHistory } = useHistory();
  const { copy, paste } = useClipboard();
  const { isLandscape, handleToggle } = useScreenOrientation();
  const handleNumberPress = (value: string) => {
    if (displayValue === "0") {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
    if (parseFloat(displayValue) < 0) {
      setDisplayValue("-" + displayValue);
    }
  };

  const handleDecimalPress = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const handleOperatorPress = (value: string) => {
    if (value === "%") {
      const currentValue = parseFloat(displayValue);
      const result = currentValue / 100;
      setDisplayValue(result.toString());
    } else if (value === "+/-") {
      setDisplayValue((parseFloat(displayValue) * -1).toString());
    } else {
      setOperator(value);
      setStoredValue(displayValue);
      setDisplayValue("0");
    }
  };

  const handleEqualsPress = () => {
    const currentValue = parseFloat(displayValue);
    const storedValueFloat = parseFloat(storedValue);
    let result = 0;
    switch (operator) {
      case "+":
        result = storedValueFloat + currentValue;
        break;
      case "-":
        result = storedValueFloat - currentValue;
        break;
      case "x":
        result = storedValueFloat * currentValue;
        break;
      case "/":
        result = storedValueFloat / currentValue;
        break;
      default:
        break;
    }
    addHistory({
      calculation: `${storedValue}${operator}${currentValue}`,
      result,
    });
    setDisplayValue(result.toString());
    setOperator("");
    setStoredValue("");
  };

  const handleClearPress = () => {
    setDisplayValue("0");
    setOperator("");
    setStoredValue("");
  };

  return (
    <ScrollView
      style={[styles.container, isLandscape ? null : styles.containerLandscape]}
    >
      <StatusBar style="dark" />
      <SafeAreaView style={{ width: "100%" }}>
        <Text style={styles.computedValue}>{displayValue}</Text>

        <Row>
          <Button value="C" style="secondary" onPress={handleClearPress} />
          <Button
            value="+/-"
            style="secondary"
            onPress={() => handleOperatorPress("+/-")}
          />
          <Button
            value="%"
            style="secondary"
            onPress={() => handleOperatorPress("%")}
          />
          <Button
            value="/"
            style="accent"
            onPress={() => handleOperatorPress("/")}
          />
        </Row>
        <Row>
          <Button value="7" onPress={() => handleNumberPress("7")} />
          <Button value="8" onPress={() => handleNumberPress("8")} />
          <Button value="9" onPress={() => handleNumberPress("9")} />
          <Button
            value="x"
            style="accent"
            onPress={() => handleOperatorPress("x")}
          />
        </Row>
        <Row>
          <Button value="4" onPress={() => handleNumberPress("4")} />
          <Button value="5" onPress={() => handleNumberPress("5")} />
          <Button value="6" onPress={() => handleNumberPress("6")} />
          <Button
            value="-"
            style="accent"
            onPress={() => handleOperatorPress("-")}
          />
        </Row>
        <Row>
          <Button value="1" onPress={() => handleNumberPress("1")} />
          <Button value="2" onPress={() => handleNumberPress("2")} />
          <Button value="3" onPress={() => handleNumberPress("3")} />
          <Button
            value="+"
            style="accent"
            onPress={() => handleOperatorPress("+")}
          />
        </Row>
        <Row>
          <Button value="0" onPress={() => handleNumberPress("0")} />
          <Button value="." onPress={handleDecimalPress} />
          <Button value="=" style="accent" onPress={handleEqualsPress} />
        </Row>
        <Row>
          <Button value="Paste" onPress={() => paste(setDisplayValue)} />
          <Button value="Copy Result" onPress={() => copy(displayValue)} />
        </Row>
        <Row>
          <Button
            value={isLandscape ? "Landscape" : "Portrait"}
            onPress={handleToggle}
          />
        </Row>
      </SafeAreaView>
    </ScrollView>
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