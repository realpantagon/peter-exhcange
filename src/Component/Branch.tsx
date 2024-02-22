
import { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface Branch {
    name: string;
    code: string;
}

export default function Bracnchselect() {
    const [selectedBrach, setSelectedBranch] = useState<Branch | null>(null);
    const branch: Branch[] = [
        { name: 'N PARC', code: '11' },
        { name: 'NIMMAN PROMENADE', code: '4' },
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedBrach} onChange={(e: DropdownChangeEvent) => setSelectedBranch(e.value)} options={branch} optionLabel="name" 
                placeholder="Select Branch" className="w-full md:w-14rem" />
        </div>
    )
}
        