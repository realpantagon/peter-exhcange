import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Button } from "primereact/button";
import Currencyselect from "./Component/Currency";
import Typeselect from "./Component/Type";
import Appbar from "./Component/Appbar";

function App() {
  const [rate, setRate] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [baht, setBaht] = useState<string>("");

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRate(e.target.value);
    // Calculate Baht if amount is filled
    if (amount !== "") {
      setBaht((parseFloat(e.target.value) * parseFloat(amount)).toFixed(2));
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    // Calculate Baht if rate is filled
    if (rate !== "") {
      setBaht((parseFloat(rate) * parseFloat(e.target.value)).toFixed(2));
    }
  };

  const handleBahtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBaht(e.target.value);
    // Calculate Amount if rate is filled
    if (rate !== "") {
      setAmount((parseFloat(e.target.value) / parseFloat(rate)).toFixed(2));
    }
  };

  return (
    // <div className="bg-black min-h-screen ">
     <div className="bg-gradient-to-b from-white to-cyan-200 h-screen"> 
      <Appbar />

      <div className="flex justify-center gap-2 p-8 mx-60 mt-4 bg-white rounded-xl">
        <Currencyselect />
        <InputText
          value={rate}
          onChange={handleRateChange}
          placeholder="Rate"
        />
        <InputText
          value={amount}
          onChange={handleAmountChange}
          placeholder="Amount"
        />
        <InputText
          value={baht}
          onChange={handleBahtChange}
          placeholder="Baht"
        />
        <Typeselect />
        <Button label="Save" severity="success" />
      </div>
    </div>
  );
}

export default App;
