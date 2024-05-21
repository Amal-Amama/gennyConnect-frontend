import React, { useState } from "react";

const requestTypes: string[] = ["preventive", "corrective"];

const MaintenanceType = ({ id, inputHandler }: any) => {
  const [selectedType, setselectedType] = useState<string>("");

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value;
    setselectedType(selectedType);

    inputHandler("requestType", selectedType, true);
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
        <option value="">Select Request_Type</option>
        {requestTypes.map((priority, index) => (
          <option key={index} value={priority}>
            {priority}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MaintenanceType;
