import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";

<div className="card mx-40 mt-8">
  <TreeTable tableStyle={{ minWidth: "50rem" }}>
    <Column field="name" header="ID" expander></Column>
    <Column field="name" header="Currency"></Column>
    <Column field="size" header="Rate"></Column>
    <Column field="size" header="Amount"></Column>
    <Column field="size" header="Baht"></Column>
    <Column field="type" header="Type"></Column>
    <Column field="type" header="Remain"></Column>
    <Column field="type" header="Time"></Column>
  </TreeTable>
</div>;
