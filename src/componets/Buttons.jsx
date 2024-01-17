import { Fragment} from "react"
import { ButtonPropTypes } from "../valid_propsTypes/propTypes"
import { useCalculator } from "../CalculatorContext";

// Defining propTypes for the Buttons component
Buttons.propTypes = ButtonPropTypes;

let bufferNumber = '';
let operator = '';
let result = 0;
let resultAsString = '';
let lastOperationExecuted = false;

// Function to check if a value is numeric
const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);

// Function to check if a value is an operator
const isOperator = (value) => ['+', '-', 'x', '÷'].includes(value);

// Function to perform arithmetic operations
const performOperation = () => {
    switch (operator) {
        case '+':
            result += parseFloat(bufferNumber);
            break;
        case '-':
            result -= parseFloat(bufferNumber);
            break;
        case 'x':
            result *= parseFloat(bufferNumber);
            break;
        case '÷':
            result /= parseFloat(bufferNumber);
            break;
        default:
            result = parseFloat(bufferNumber);
            break;
    }
};

// The main Buttons component
function Buttons( props ) {
    
    // Using the CalculatorContext hook to get the updateValues function
    const { updateValues } = useCalculator();
    
    // Function to handle button clicks
    const handleBtnClick = (valueBtn) => {
        
        // Handling numeric input
        if (isNumeric(valueBtn)) {
            
            bufferNumber = (bufferNumber + valueBtn).substring(0, 10);
            
        }// Handling operator input
        else if (isOperator(valueBtn)) {
            if (bufferNumber !== '') {
                performOperation();
                operator = valueBtn;
                bufferNumber = '';
                
            } else if (valueBtn === '-' && bufferNumber === '') {
                bufferNumber += valueBtn;
            }
        }// Handling the equals (=) button
        else if (valueBtn === '=' ) {
            if (bufferNumber !== '' ) {
                if (lastOperationExecuted === false) {
                    performOperation();
                    operator = '';   
                    console.log(`result - ${result}`) ;
                    bufferNumber=result ;
                }
            }
        // Handling the AC (all clear) button    
        }
        else if (valueBtn === 'AC') {
            bufferNumber = '';
            operator = '';
            result = 0;
            valueBtn = '';
            lastOperationExecuted = false;

        // Handling the decimal (.) button    
        }
        else if (valueBtn === '.') {

            if (bufferNumber.indexOf('.') === -1) {
                bufferNumber += valueBtn;
                
            }

        // Handling the +/- (change sign) button    
        }
        else if (valueBtn === '+/-' && bufferNumber !== '') {
            // Change the sign of bufferNumber
            bufferNumber = (parseFloat(bufferNumber) * -1).toString().substring(0, 11);
        }
        
        // Formatting result for display
        resultAsString = result.toLocaleString().substring(0, 10);
        updateValues(resultAsString, operator, bufferNumber,valueBtn);
        };
    // Rendering the button
    return (
        <Fragment>
            <button
                onClick={() => handleBtnClick(props.keyBtnDisplay)}
                className='text-[1.1rem] outline-none rounded-lg text-black shadow-lg min-w-[20px] w-3/5 h-[40px]'
                style={{ background: props.btColor}}
                >{props.keyBtnDisplay}</button>
        </Fragment>
    )
}
// Exporting the Buttons component as the default export
export default Buttons