import { StatusBar } from "expo-status-bar";
import HomeScreen from "./app/screens/HomeScreen";
import MoneyTransferScreen from "./app/screens/MoneyTransferScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MoneyContextProvider } from "./app/context/moneyContext";
import { colors } from "./app/utils/colors";
import { View, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <MoneyContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
              headerTitleAlign: "center",
              contentStyle: { backgroundColor: colors.purpleColor300 },
              headerStyle: { backgroundColor: colors.purpleColor200 },
              headerBackVisible: true,
              title: `Minimal Bank`,
              headerTintColor: colors.purpleColordark,
            }}
          >
            <Stack.Screen
              name="home"
              component={HomeScreen}
              options={{
                headerRight: () => {
                  return (
                    <View style={styles.imageContainer}>
                      <FontAwesome
                        name="user-circle-o"
                        size={25}
                        color={colors.purpleColor900}
                      />
                    </View>
                  );
                },
                headerLeft: () => {
                  return (
                    <View style={styles.imageContainer}>
                      <Image
                        style={styles.image}
                        source={require("./assets/img/mini_dark.png")}
                      />
                    </View>
                  );
                },
              }}
            />
            <Stack.Screen
              name="transfer"
              component={MoneyTransferScreen}
              options={{
                headerRight: () => {
                  return (
                    <View style={styles.imageContainer}>
                      <FontAwesome
                        name="user-circle-o"
                        size={25}
                        color={colors.purpleColor800}
                      />
                    </View>
                  );
                },
                headerBackTitle: "Back",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MoneyContextProvider>
    </>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    width: 26,
    height: 26,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
