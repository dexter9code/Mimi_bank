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
  onblur,
  inputValue,
}) {
  return (
    <View style={[styles.inputContainer, style]}>
      {iconType === "font" ? (
        <FontAwesome5
          name={iconName}
          color={colors.purpleColor700}
          size={18}
          style={styles.icon}
        />
      ) : (
        <MaterialCommunityIcons
          name={iconName}
          color={colors.purpleColor700}
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
        onBlur={onblur}
        value={inputValue}
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
    backgroundColor: colors.purpleColor100,
    borderColor: colors.purpleColor200,
  },
  icon: {
    marginRight: 10,
    marginLeft: 2,
  },
  input: {
    color: "#000",
  },
});
