
import  { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface Currency {
    name: string;
    code: string;
}

export default function Currencyselect() {
    const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);
    const cities: Currency[] = [
        { name: 'USD 50-100', code: 'US100' },
        { name: 'USD 5-20', code: 'US20' },
        { name: 'USD 1', code: 'US1' },
        { name: 'EUR', code: 'EUR' },
        { name: 'JPY', code: 'JPY' },
        { name: 'GBP', code: 'GBP' },
        { name: 'SGD', code: 'SGD' },
        { name: 'AUD', code: 'AUD' },
        { name: 'CHF', code: 'CHF' },
        { name: 'HKD', code: 'HKD' },
        { name: 'CAD', code: 'CAD' },
        { name: 'NZD', code: 'NZD' },
        { name: 'SEK', code: 'SEK' },
        { name: 'TWD', code: 'TWD' },
        { name: 'NOK', code: 'NOK' },
        { name: 'MYR', code: 'MYR' },
        { name: 'CNY', code: 'CNY' },
        { name: 'KRW', code: 'KRW' },
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCurrency} onChange={(e: DropdownChangeEvent) => setSelectedCurrency(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Currency" className="w-full md:w-14rem" />
        </div>
    )
}
        