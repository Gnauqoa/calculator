import { Text, TouchableOpacity, View } from "react-native";
import { HistoryType } from "../../context/history";
import { AntDesign } from "@expo/vector-icons";
import { useClipboard } from "../../hooks/useClipboard";

const HistoryRow = ({ calculation, result }: HistoryType) => {
  const { copy } = useClipboard();
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "white",
          paddingTop: 4,
          paddingBottom: 4,
          width: "50%",
          gap: 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "white",
          }}
        >
          {calculation}
        </Text>
        <TouchableOpacity onPress={() => copy(calculation)}>
          <AntDesign name="copy1" size={14} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "white",
          paddingTop: 4,
          paddingBottom: 4,
          width: "50%",
          gap: 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "white",
          }}
        >
          {result}
        </Text>
        <TouchableOpacity onPress={() => copy(result.toString())}>
          <AntDesign name="copy1" size={14} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HistoryRow;