import React, { useState } from "react";

const possibleTypes: string[] = [
  "Laboratory",
  "Clinic",
  "Hospital",
  "Pharmacy",
];

const InstitutionType = ({ id, inputHandler }: any) => {
  const [selectedType, setSelectedType] = useState<string>("");

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value;
    setSelectedType(selectedType);

    inputHandler("institutionType", selectedType, true);
  };

  return (
    <div className="flex flex-row w-full">
      <label htmlFor={id} />
      <select
        id={id}
        value={selectedType}
        onChange={handleTypeChange}
        className="w-48 border border-gray-200 bg-slate-50 text-sm font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 mb-4"
      >
        <option value="">Select type</option>
        {possibleTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InstitutionType;
