import React,{useState} from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Typeselect from "./Type";
import Currencyselect from"./Currency";

function menubar() {
    const [rate, setRate] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [baht, setBaht] = useState<string>("");
  return (
    <div className="flex justify-center gap-2 p-8 mx-60 mt-4 bg-white rounded-xl">
      <Currencyselect />
      <InputText
        value={rate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setRate(e.target.value)
        }
        placeholder="Rate"
      />
      <InputText
        value={amount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAmount(e.target.value)
        }
        placeholder="Amount"
      />
      <InputText
        value={baht}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setBaht(e.target.value)
        }
        placeholder="Baht"
      />
      <Typeselect />
      <Button label="Save" severity="success" />
    </div>
  );
}

export default menubar;
