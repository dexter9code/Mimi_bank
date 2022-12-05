import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import { colors } from "./../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");
const HEIGHT = height / 6;

const SuccessModal = () => {
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate("home");
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo/checked.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.titleText}>fund transferred</Text>
      <Text style={styles.titleText}>successful</Text>
      <Pressable style={styles.buttonContainer} onPress={onPressHandler}>
        <Text style={styles.text}>Close</Text>
      </Pressable>
    </View>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  rootContainer: {
    width: 350,
    height: 390,
    position: "absolute",
    zIndex: 2,
    backgroundColor: colors.purpleColor200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    top: HEIGHT,
  },
  buttonContainer: {
    width: 150,
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: colors.purpleColor900,
    padding: 12,
    marginTop: 35,
  },
  text: {
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "500",
    color: colors.purpleColor100,
  },
  titleText: {
    fontSize: 24,
    textTransform: "capitalize",
    fontWeight: "800",
    color: colors.green800,
  },
  extraText: {
    margin: 1,
  },
  logoContainer: {
    width: 80,
    height: 80,
    overflow: "hidden",
    marginBottom: 22,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
