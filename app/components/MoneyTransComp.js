import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import IconInput from "./other/IconInput";
import { Picker } from "@react-native-picker/picker";
import { useState, useReducer } from "react";
import SecureType from "./other/SecureType";
import CustomBtn from "./other/CustomBtn";
import { colors } from "./../utils/colors";
import { LinearGradient } from "expo-linear-gradient";
import SuccessModal from "./other/SuccessModal";

const phoneNumberReducer = function (state, action) {
  if (action.type === `PHONE_INPUT`) {
    return {
      value: action.val,
      isValid: action.val.length > 0 && action.val.length < 11,
    };
  }
  if (action.type === `PHONE_BLUR`) {
    return {
      value: state.value,
      isValid: state.value.length > 0 && state.value.length < 11,
    };
  }

  return { value: "", isValid: false };
};
const amountReducer = function (state, action) {
  if (action.type === `AMOUNT_INPUT`) {
    return { value: action.val, isValid: parseInt(action.val) > 0 };
  }
  if (action.type === `AMOUNT_BLUR`) {
    return { value: state.value, isValid: parseInt(state.value) > 0 };
  }

  return { value: "", isValid: false };
};

const MoneyTransComp = () => {
  const [selectedItem, setSelectedItem] = useState();
  const [showModal, setShowModal] = useState(false);
  const [phoneState, phoneDispatch] = useReducer(phoneNumberReducer, {
    value: "",
    isValid: null,
  });

  const [amountState, amountDispatch] = useReducer(amountReducer, {
    value: "",
    isValid: null,
  });

  const onPressHandler = () => {
    if (phoneState.isValid && amountState.isValid) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    }
    return;
  };

  const phoneNumberChangeHandler = (e) => {
    phoneDispatch({ type: `PHONE_INPUT`, val: e });
  };

  const phoneValideChangeHandler = () => {
    phoneDispatch({ type: `PHONE_BLUR` });
  };
  const amountChangeHandler = (e) => {
    amountDispatch({ type: `AMOUNT_INPUT`, val: e });
  };

  const amountValideChangeHandler = () => {
    amountDispatch({ type: `AMOUNT_BLUR` });
  };

  return (
    <LinearGradient
      colors={[colors.purpleColor300, colors.purpleColor800]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.rootContainer}
    >
      <IconInput
        iconName={"phone-dial"}
        placeHolder={`sender mobile number`}
        style={[
          styles.container,
          phoneState.isValid === false ? styles.error : "",
        ]}
        keyboardType={"phone-pad"}
        onChange={phoneNumberChangeHandler}
        onblur={phoneValideChangeHandler}
        inputValue={phoneState.value}
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
            <Picker.Item label="mickey" value={"mickey"} />
            <Picker.Item label="kanye" value={"kanye"} />
          </Picker>
        </View>
      </View>
      <IconInput
        iconType={"font"}
        iconName={`money-bill`}
        placeHolder="Amount"
        style={[
          styles.container,
          amountState.isValid === false ? styles.error : "",
        ]}
        keyboardType={"phone-pad"}
        inputValue={amountState.value}
        onblur={amountValideChangeHandler}
        onChange={amountChangeHandler}
      />
      <SecureType />
      <CustomBtn extraHanlder={onPressHandler} />
      {showModal && <SuccessModal />}
      {/* <Button title="hide" onPress={() => setShowModal(false)} /> */}
    </LinearGradient>
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
    width: 60,
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
    backgroundColor: colors.purpleColor100,
    borderColor: colors.purpleColor200,
  },
  error: {
    borderColor: colors.cherryRed,
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    textTransform: "capitalize",
  },
});
