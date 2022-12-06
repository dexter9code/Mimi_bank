import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Vibration,
  Image,
  Keyboard,
} from "react-native";
import IconInput from "./other/IconInput";
import { Picker } from "@react-native-picker/picker";
import { useState, useReducer, useContext } from "react";
import SecureType from "./other/SecureType";
import CustomBtn from "./other/CustomBtn";
import { colors } from "./../utils/colors";
import { LinearGradient } from "expo-linear-gradient";
import SuccessModal from "./other/SuccessModal";
import MoneyContext from "../context/moneyContext";

const phoneNumberReducer = function (state, action) {
  if (action.type === `PHONE_INPUT`) {
    return {
      value: action.val,
      isValid: action.val.length > 0 && action.val.length === 10,
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
  const moneyCtx = useContext(MoneyContext);
  const [selectedItem, setSelectedItem] = useState("");
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
    if (amountState.value >= moneyCtx.amount) {
      Vibration.vibrate();
      return;
    }

    if (
      amountState.isValid === false ||
      phoneState.isValid === false ||
      !amountState.isValid ||
      !phoneState.isValid
    ) {
      Vibration.vibrate();
      return;
    }

    if (phoneState.isValid && amountState.isValid) {
      const randomKey = Date.now() + Math.floor(Math.random() * 9 + 1);
      setTimeout(() => {
        setShowModal(true);
        const sendObj = {
          id: randomKey,
          title: `Jocelyn Flores`,
          amount: amountState.value,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7l1xBnRG4FDBqkGogGDIAxPYDWTgeC00PBg&usqp=CAU",
          type: "sub",
          date: new Date(),
        };
        moneyCtx.addData(sendObj);
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
      <Pressable
        style={styles.rootContainer}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/img/mini_dark.png")}
            style={styles.image}
          />
        </View>
        <IconInput
          iconName={"phone-dial"}
          placeHolder={`sender mobile number`}
          style={[
            styles.container,
            phoneState.isValid === false ? styles.error : "",
          ]}
          keyboardType={"number-pad"}
          onChange={phoneNumberChangeHandler}
          onblur={phoneValideChangeHandler}
          inputValue={phoneState.value}
          maxLength={10}
        />
        <View style={styles.pickerOuterContainer}>
          <Text style={styles.text}>
            {selectedItem ? selectedItem : `choose beneficiary`}
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              mode="dialog"
              selectedValue={selectedItem}
              onValueChange={(itemValue, _) => {
                setSelectedItem(itemValue);
              }}
            >
              <Picker.Item label="" value="user1" />
              <Picker.Item label="Mickey" value="Mickey" />
              <Picker.Item label="John " value="John" />
              <Picker.Item label="Monica" value="Monica" />
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
          maxLength={4}
        />
        <SecureType />
        <CustomBtn extraHanlder={onPressHandler} />
        {showModal && <SuccessModal />}
      </Pressable>
    </LinearGradient>
  );
};

export default MoneyTransComp;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: "center",
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
  logoContainer: {
    width: 60,
    height: 60,
    overflow: "hidden",
    marginTop: 25,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
