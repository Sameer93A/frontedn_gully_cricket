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
    <div className="flex justify-center">
      <button
        onClick={handleSubmit}
        type="button"
        className="text-white bg-gray-500 border border-gray-300 focus:outline-none hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2"
      >
        {result ? result : "Toss"}
      </button>
    </div>
  );
};
