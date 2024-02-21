import { useState,useEffect } from "react";

import { Button } from "primereact/button";
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { CheckIcon } from 'primereact/icons/check';
import { StarIcon } from 'primereact/icons/star';
        
interface Country {
  name: string;
  code: string;
}   

function App() {

  

  return (
    <div className="">
      <h1 className="text-center">PETER EXCHANGE</h1>
      <div className="">จำนวนเงินตั้งต้น</div>
      <div className="mx-40 rounded-lg h-32 bg-stone-200 flex justify-center my-4">
      
      </div>
      <div className="card mx-40">
            <TreeTable  tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="ID" expander></Column>
                <Column field="name" header="Currency"></Column>
                <Column field="size" header="Rate"></Column>
                <Column field="size" header="Amount"></Column>
                <Column field="size" header="Baht"></Column>
                <Column field="type" header="Type"></Column>
                <Column field="type" header="Remain"></Column>
                <Column field="type" header="Time"></Column>
            </TreeTable>
        </div>
    </div>
  );
}

export default App;
