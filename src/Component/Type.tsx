
import { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface City {
    name: string;
    code: string;
}

export default function Typeselect() {
    const [selectedType, setSelectedType] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'Buy', code: 'B' },
        { name: 'Sell', code: 'S' },
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedType} onChange={(e: DropdownChangeEvent) => setSelectedType(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Type" className="w-full md:w-14rem" />
        </div>
    )
}
        