import { View, Pressable, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { colors } from "./../../utils/colors";

const SecureType = () => {
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(true);
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={() => setSelect1((preVal) => !preVal)}
        style={styles.innerContainer}
      >
        <FontAwesome
          name={select2 && !select1 ? "circle-thin" : "circle"}
          size={18}
        />
        <Text style={styles.text}>NEFT</Text>
      </Pressable>
      <Pressable
        onPress={() => setSelect1((preVal) => !preVal)}
        style={styles.innerContainer}
      >
        <FontAwesome
          name={!select1 && select2 ? "circle" : "circle-thin"}
          size={18}
        />
        <Text style={styles.text}>RTGS</Text>
      </Pressable>
    </View>
  );
};

export default SecureType;

const styles = StyleSheet.create({
  outerContainer: {
    width: 300,
    backgroundColor: colors.purpleColor100,
    alignItems: "center",
    padding: 10,
    height: 120,
    justifyContent: "space-evenly",
    borderRadius: 10,
    marginTop: 8,
  },
  innerContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    alignItems: "center",
    width: 280,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
    paddingHorizontal: 10,
  },
});
