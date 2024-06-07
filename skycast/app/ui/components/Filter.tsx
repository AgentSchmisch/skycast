import { useState } from "react";

export default function Filter({ formFieldName, options, handleSelection }: { formFieldName: string, options: string[], handleSelection: (selectedOption: string) => void }) {

    return (
        <label className="relative">
            <input type="checkbox" className="hidden peer"/>

            <div className="max-w-20 ml-2 mt-2 p-2 bg-skycast-IndigoDye text-white rounded cursor-pointer before:content-['Filter▼'] after:text-xs after:ml-1"></div>

            <div
                className="absolute bg-white border transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto ml-2">
                <ul>
                    {options.map((option, i) => {
                        return (
                            <li key={option}>
                                <label
                                    className="flex whitespace-nowrap cursor-pointer px-2 py-1 transition-colors hover:bg-blue-100 [&:has(input:checked)]:bg-blue-200">
                                    <input
                                        type="checkbox"
                                        name={formFieldName}
                                        value={option}
                                        className="cursor-pointer"
                                        onClick={() => handleSelection(option)}
                                    />
                                    <span className="ml-1">{option}</span>
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </label>
    );
}