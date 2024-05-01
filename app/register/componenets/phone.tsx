import React, { useState } from "react";
const countryCodes: { name: string; code: string }[] = [
  { name: "country", code: "" },
  { name: "US", code: "+1" },
  { name: "UK", code: "+44" },
  { name: "CA", code: "+1" },
];
const PhoneForm = ({ id, inputHandler }: any) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberDisabled, setPhoneNumberDisabled] = useState<boolean>(true);
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setPhoneNumber(e.target.value);
    setPhoneNumberDisabled(false);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.startsWith(selectedCountry)) {
      setPhoneNumber(inputValue);
      inputHandler("phoneNumber", inputValue, true);
    } else {
      setPhoneNumber(selectedCountry + inputValue);
      inputHandler("phoneNumber", selectedCountry + inputValue, true);
    }
  };

  return (
    <div className="flex flex-row w-full">
      <label htmlFor="country" />
      <select
        id="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="border border-gray-200  bg-slate-50 text-sm font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
      >
        {countryCodes.map((country, index) => (
          <option key={index} value={country.code}>
            {country.name !== "country"
              ? `${country.name} (${country.code})`
              : country.name}
          </option>
        ))}
      </select>
      <label htmlFor="phoneNumber" />
      <input
        type="tel"
        id={id}
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="select a country and enter your phone number"
        disabled={phoneNumberDisabled}
        className="w-4/5 bg-slate-50 border border-gray-300 mb-4 focus:bg-gray-300 focus:border-purple-600 h-11"
      />
    </div>
  );
};

export default PhoneForm;
