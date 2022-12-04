import { createContext, useState } from "react";
import { TRANSFER_TYPE } from "./../utils/dev-data";

const MoneyContext = createContext({
  data: [],
  addData: (data) => {},
  amount: 0,
});

export const MoneyContextProvider = (props) => {
  const [moneyData, setMoneyData] = useState(TRANSFER_TYPE);

  const totalAmount = moneyData.reduce((acc, value) => acc + value.amount, 0);
  const [currentAmount, setCurrentAmount] = useState(totalAmount);

  const sendMoney = (obj) => {
    setMoneyData((prevValue) => [obj, ...prevValue]);
    setCurrentAmount((prevValue) => prevValue - obj.amount);
  };

  return (
    <MoneyContext.Provider
      value={{ data: moneyData, addData: sendMoney, amount: currentAmount }}
    >
      {props.children}
    </MoneyContext.Provider>
  );
};

export default MoneyContext;
