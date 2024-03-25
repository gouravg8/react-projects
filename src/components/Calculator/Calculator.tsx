import React, { useState } from "react";

const Calculator = () => {
  return (
    <div className="my-32">
      {/* <CalculatorOutput /> */}
      <CalculatorLayout />
    </div>
  );
};

// const CalculatorOutput = () => {
//   return (
//     <div>
//       <input type="text" name="calInput" id="calInput" />
//     </div>
//   );
// };

const CalculatorLayout = () => {
  const items = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "C", "/", "="];
  const [input, setInput] = useState({
    firstInp: 0,
    operator: "",
    secondInp: 0,
  });

  const [output, setOutput] = useState(0);

  const handleClick = (val: string | number) => {
    if (val === "=") {
      setOutput(eval(input));
    } else if (val === "C") {
      setInput(0);
      setOutput(0);
    } else {
      setInput(input + val);
    }
  };
  return (
    <div className="my-8 w-2/3 md:w-fit mx-auto">
      <div className="w-full my-3 flex flex-col gap-3">
        <div className="w-fit flex flex-wrap gap-3">
          <input
            className="w-32 border h-16 px-3 text-3xl"
            type="number"
            placeholder={"0"}
            name="firstInp"
            id="firstInp"
            value={input.firstInp}
            onChange={(e) => setInput(parseInt(e.target.value))}
          />
          <input
            className="w-32 border h-16 px-3 text-3xl"
            type="string"
            placeholder={"+"}
            name="operator"
            id="operator"
            value={input.operator}
            onChange={(e) => setInput(parseInt(e.target.value))}
          />
          <input
            className="w-32 border h-16 px-3 text-3xl"
            type="number"
            placeholder={"0"}
            name="secondInput"
            id="secondInput"
            value={input.secondInp}
            onChange={(e) => setInput(parseInt(e.target.value))}
          />
        </div>
        <input
          className="w-92 border h-16 px-3 text-3xl"
          type="number"
          placeholder={"0"}
          name="calOuput"
          id="calOuput"
          value={output}
          onChange={(e) => setOutput(parseInt(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 text-center gap-2 ">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`grid-item size-24 flex items-center justify-center text-3xl font-semibold  cursor-pointer ${
              typeof item !== "string"
                ? "bg-gray-400"
                : "bg-orange-500 text-white"
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
