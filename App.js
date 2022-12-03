import { StatusBar } from "expo-status-bar";
import HomeScreen from "./app/screens/HomeScreen";
import MoneyTransferScreen from "./app/screens/MoneyTransferScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      {/* <HomeScreen /> */}
      <MoneyTransferScreen />
    </>
  );
}
