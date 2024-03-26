import { useState } from "react";

const Calculator = () => {
  return (
    <div className="my-24">
      {/* <CalculatorOutput /> */}
      <CalculatorLayout />
    </div>
  );
};

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
      setOutput(eval(`${input.firstInp}${input.operator}${input.secondInp}`));
    } else if (val === "C") {
      setInput({
        firstInp: 0,
        operator: "",
        secondInp: 0,
      });
      setOutput(0);
    } else if (val === "+" || val === "-" || val === "*" || val === "/") {
      setInput({
        ...input,
        operator: val,
      });
    } else {
      setInput({
        ...input,
        [input.operator ? "secondInp" : "firstInp"]: val,
      });
    }
  };

  return (
    <div className="my-4 w-2/3 md:w-fit mx-auto">
      <div className="w-full my-3 flex flex-col gap-2">
        <div className="w-full md:w-fit flex flex-wrap gap-1 md:gap-3 justify-center md:justify-start">
          <input
            className="w-20 md:w-32 border h-fit md:h-16 p-2 md:px-3 text-xl md:text-3xl rounded"
            type="number"
            placeholder={"0"}
            name="firstInp"
            id="firstInp"
            value={input.firstInp}
            onChange={(e) =>
              setInput((prev) => ({
                ...prev,
                firstInp: parseInt(e.target.value),
              }))
            }
          />
          <input
            className="w-20 md:w-32 border h-fit md:h-16 p-2 md:px-3 text-xl md:text-3xl rounded"
            type="string"
            placeholder={"+"}
            name="operator"
            id="operator"
            value={input.operator}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, operator: e.target.value }))
            }
          />
          <input
            className="w-20 md:w-32 border h-fit md:h-16 p-2 md:px-3 text-xl md:text-3xl rounded"
            type="number"
            placeholder={"0"}
            name="secondInput"
            id="secondInput"
            value={input.secondInp}
            onChange={(e) =>
              setInput((prev) => ({
                ...prev,
                secondInp: parseInt(e.target.value),
              }))
            }
          />
        </div>
        <input
          className="w-92 border h-fit md:h-16 p-2 md:px-3 text-xl md:text-3xl"
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
            className={`grid-item size-14 md:size-24 flex items-center justify-center text-xl md:text-3xl font-semibold  cursor-pointer rounded ${
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
