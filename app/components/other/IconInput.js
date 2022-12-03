import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { TextInput, View, StyleSheet } from "react-native";
import { colors } from "./../../utils/colors";

const IconInput = function ({
  iconName,
  placeHolder,
  onChange,
  style,
  iconType,
  keyboardType,
}) {
  return (
    <View style={[styles.inputContainer, style]}>
      {iconType === "font" ? (
        <FontAwesome5
          name={iconName}
          color={colors.gray500}
          size={18}
          style={styles.icon}
        />
      ) : (
        <MaterialCommunityIcons
          name={iconName}
          color={colors.gray500}
          size={18}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholder={placeHolder}
        onChangeText={onChange}
        style={styles.input}
        autoCapitalize="none"
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default IconInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 8,
    marginVertical: 5,
    backgroundColor: "dodgerblue",
    borderColor: colors.gray,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    color: "#000",
  },
});
