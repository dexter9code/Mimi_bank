import {
  View,
  Button,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Image,
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

const TransferModal = ({ show, closeHandler }) => {
  return (
    <Modal visible={show} animationType={"slide"}>
      <LinearGradient
        colors={[`#E5B8F4`, `#C147E9`, `#810CA8`]}
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
            onPress={() => console.log(`hello`)}
            style={({ pressed }) => [
              styles.containerContents,
              pressed && styles.preesed,
            ]}
          >
            <Feather name="send" size={24} color={"white"} />
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
              color={colors.offWhite}
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
            <Fontisto name="train-ticket" size={24} color={colors.offWhite} />
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
            <MaterialIcons name="local-atm" size={24} color={colors.offWhite} />
            <Text style={styles.titles}>Mini ATM</Text>
          </Pressable>
          <View style={styles.lineContainer} />
        </View>
        <View style={styles.closeContainer}>
          <SimpleLineIcons
            name="close"
            size={50}
            onPress={() => closeHandler("close")}
            color={"#2D033B"}
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
  },
  preesed: {
    opacity: 3,
  },
});
