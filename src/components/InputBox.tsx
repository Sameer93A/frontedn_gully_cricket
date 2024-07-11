import React from "react";

interface Inputypes {
  Name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({ Name, placeholder, onChange }: Inputypes) => {
  return (
    <div className="flex justify-center">
      <div>
        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">
          {Name}
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
};
