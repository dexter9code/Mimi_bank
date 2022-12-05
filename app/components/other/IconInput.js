import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { TextInput, View, StyleSheet, Platform } from "react-native";
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
  maxLength,
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
        autoComplete="off"
        maxLength={maxLength}
      />
    </View>
  );
};

export default IconInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: Platform.OS === "android" ? 8 : 14,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 15,
    marginVertical: Platform.OS === "android" ? 5 : 12,
    backgroundColor: colors.purpleColor100,
    borderColor: colors.purpleColor200,
  },
  icon: {
    marginRight: 10,
    marginLeft: 2,
  },
  input: {
    color: "#000",
    width: "100%",
  },
});
