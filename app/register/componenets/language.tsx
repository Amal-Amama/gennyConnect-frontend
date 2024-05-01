import React, { useState } from "react";

const possibleLanguages: string[] = ["Français", "Anglais", "Espagnol"];

const LanguageForm = ({ id, inputHandler }: any) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLang = event.target.value;
    if (selectedLang && !selectedLanguages.includes(selectedLang)) {
      setSelectedLanguages([...selectedLanguages, selectedLang]);
      inputHandler("languages", [...selectedLanguages, selectedLang], true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const inputLanguages = inputValue.split(",").map((lang) => lang.trim());
    const validLanguages = inputLanguages.filter((lang) =>
      possibleLanguages.includes(lang)
    );
    setSelectedLanguages(validLanguages);
    inputHandler("languages", validLanguages, true);
  };

  const selectedLanguagesText = selectedLanguages.join(", ");

  return (
    <div className="flex flex-row w-full">
      <label htmlFor="language" />
      <select
        id="language"
        onChange={handleLanguageChange}
        className="w-0 rounded border border-gray-200   text-sm font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4  "
      >
        <option value="" />
        {possibleLanguages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>

      <input
        id={id}
        type="text"
        value={selectedLanguagesText}
        placeholder="Choose your spoken languages"
        onChange={handleInputChange}
        className="w-11/12 rounded  bg-slate-50 border border-gray-300 mb-4 focus:bg-gray-300 focus:border-purple-600 h-11"
      />
    </div>
  );
};

export default LanguageForm;
