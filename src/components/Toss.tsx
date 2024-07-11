import { useState } from "react";

export const Toss = () => {
  const [result, setResult] = useState("");
  const handleSubmit = () => {
    const toss = ["Head", "Tail"];
    if (Math.random() < 0.5) {
      setResult(toss[Math.floor(Math.random() * toss.length)]);
    } else {
      setResult("run again"); // or any other default value
    }
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        {result ? result : "Toss"}
      </button>
    </div>
  );
};
