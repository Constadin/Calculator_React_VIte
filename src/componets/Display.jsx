import { Fragment, useState, useEffect } from "react";
import { useCalculator } from "../CalculatorContext";

function Display() {
  // Extract values from CalculatorContext
  const { resultAsString, operator, bufferNumber, valueBtn } = useCalculator();

  // State to store the formatted bufferNumber
  const [formattedBuffer, setFormattedBuffer] = useState(bufferNumber);

  // useEffect to format bufferNumber when it has more than 3 characters
  useEffect(() => {
    if (bufferNumber.length > 3) {
      // If bufferNumber has more than 3 characters, format it
      setFormattedBuffer(Number(bufferNumber).toLocaleString('en-US', { maximumFractionDigits: 16 }));
    } else {

      setFormattedBuffer(bufferNumber );
    }
  }, [bufferNumber]);

  // Determine the displayString based on conditions
  const displayString = (valueBtn === '=') ? resultAsString : 
  (valueBtn === '+' || valueBtn === '-' || valueBtn === 'x' || valueBtn === '÷') ? (resultAsString) : formattedBuffer;

  return (
    <Fragment>
      {/* Outer container */}
      <div className="text-right border-2 border-solid min-h-[60px] max-h-[60px] pl-0.5 pr-0.5 rounded-lg display">
        {/* Inner container */}
        <div className="bg-slate-100 text-right border-2 border-solid min-h-[45px] max-h-[45px] m-auto mt-1.5">
          {/* Display the formatted resultString and operator */}
          <p className="p-0 text-3xl font-bold">{`${displayString}${operator}`}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Display;

