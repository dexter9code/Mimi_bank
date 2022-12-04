import { StatusBar } from "expo-status-bar";
import HomeScreen from "./app/screens/HomeScreen";
import MoneyTransferScreen from "./app/screens/MoneyTransferScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MoneyContextProvider } from "./app/context/moneyContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <MoneyContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="transfer" component={MoneyTransferScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </MoneyContextProvider>
    </>
  );
}
