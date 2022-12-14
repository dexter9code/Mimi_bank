import {
  View,
  Button,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "./../../utils/colors";
import {
  Feather,
  MaterialCommunityIcons,
  Fontisto,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TransferModal = ({ show, closeHandler }) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    closeHandler("close");
    navigation.navigate("transfer");
  };

  return (
    <Modal visible={show} animationType={"slide"}>
      <LinearGradient
        colors={[
          colors.purpleColor300,
          colors.purpleColor500,
          colors.purpleColor900,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.rootContainer}
      >
        <View style={styles.extraContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/img/mini.png")}
              style={styles.iamge}
            />
          </View>
        </View>
        <View style={styles.container}>
          <Pressable
            android_ripple={{ color: colors.rippleColor }}
            onPress={onPressHandler}
            style={({ pressed }) => [
              styles.containerContents,
              pressed && styles.preesed,
            ]}
          >
            <Feather name="send" size={24} color={colors.purpleColor100} />
            <Text style={styles.titles}>Transfer Money</Text>
          </Pressable>
          <View style={styles.lineContainer} />
          <Pressable
            android_ripple={{ color: colors.rippleColor }}
            style={({ pressed }) => [
              styles.containerContents,
              pressed && styles.preesed,
            ]}
          >
            <MaterialCommunityIcons
              name="airplane-marker"
              size={24}
              color={colors.purpleColor100}
            />
            <Text style={styles.titles}>Book Air</Text>
          </Pressable>
          <View style={styles.lineContainer} />
          <Pressable
            android_ripple={{ color: colors.rippleColor }}
            style={({ pressed }) => [
              styles.containerContents,
              pressed && styles.preesed,
            ]}
          >
            <Fontisto
              name="train-ticket"
              size={24}
              color={colors.purpleColor100}
            />
            <Text style={styles.titles}>Book Rail</Text>
          </Pressable>
          <View style={styles.lineContainer} />
          <Pressable
            android_ripple={{ color: colors.rippleColor }}
            style={({ pressed }) => [
              styles.containerContents,
              pressed && styles.preesed,
            ]}
          >
            <MaterialIcons
              name="local-atm"
              size={24}
              color={colors.purpleColor100}
            />
            <Text style={styles.titles}>Mini ATM</Text>
          </Pressable>
          <View style={styles.lineContainer} />
        </View>
        <View style={styles.closeContainer}>
          <SimpleLineIcons
            name="close"
            size={50}
            onPress={() => closeHandler("close")}
            color={colors.purpleColor100}
          />
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default TransferModal;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    // backgroundColor: "red",
    textTransform: "capitalize",
    paddingBottom: 10,
    // paddingHorizontal: ,
  },
  containerContents: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 40,
    paddingVertical: 18,
    alignItems: "center",
    // marginBottom: 20,
  },
  titles: {
    paddingHorizontal: 10,
    fontSize: 18,
    color: "#D3E0EA",
    fontWeight: "600",
    marginLeft: 8,
  },
  closeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  lineContainer: {
    width: "90%",
    backgroundColor: "#ccc",
    height: 1,
    marginBottom: 10,
    marginLeft: 14,
  },
  extraContainer: {
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  iamge: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    overflow: "hidden",
    width: 50,
    height: 50,
    marginTop: Platform.OS === "ios" ? 35 : 0,
  },
  preesed: {
    opacity: 3,
    backgroundColor: colors.purpleColor500,
  },
});
