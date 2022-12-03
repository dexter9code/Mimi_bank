import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import IconInput from "./other/IconInput";
import { Picker, PickerIOS } from "@react-native-picker/picker";
import { useState } from "react";
import SecureType from "./other/SecureType";
import CustomBtn from "./other/CustomBtn";

const MoneyTransComp = () => {
  const [selectedItem, setSelectedItem] = useState();
  const [isError, setIsError] = useState(false);

  return (
    <View style={styles.rootContainer}>
      <IconInput
        iconName={"phone-dial"}
        placeHolder={`sender mobile number`}
        style={[styles.container]}
        keyboardType={"phone-pad"}
      />
      <View style={styles.pickerOuterContainer}>
        <Text style={styles.text}>
          {selectedItem ? selectedItem : `choose beneficiary`}
        </Text>
        <View style={styles.pickerContainer}>
          <Picker
            mode="dropdown"
            selectedValue={selectedItem}
            onValueChange={(itemValue, _) => setSelectedItem(itemValue)}
          >
            <Picker.Item label="user1" value={"user1"} />
            <Picker.Item label="user2" value={"user2"} />
          </Picker>
        </View>
      </View>
      <IconInput
        iconType={"font"}
        iconName={`money-bill`}
        placeHolder="Amount"
        style={styles.container}
        keyboardType={"phone-pad"}
      />
      <SecureType />
      <CustomBtn />
    </View>
  );
};

export default MoneyTransComp;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    backgroundColor: "red",
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
  },
  container: {
    width: 320,
  },
  pickerContainer: {
    marginTop: 10,
    width: 50,
  },
  pickerOuterContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
  },
  error: {
    backgroundColor: "red",
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    textTransform: "capitalize",
  },
});
