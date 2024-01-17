// Importing necessary dependencies from React.
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Creating a context for the calculator application.
const CalculatorContext = createContext();

// CalculatorProvider component to manage the state and provide values through context.
export const CalculatorProvider = ({ children }) => {
  // State variables for managing calculator values.
    const [resultAsString, setResultAsString] = useState('');
    const [operator, setOperator] = useState('');
    const [bufferNumber, setΒufferNumber] = useState('');
    const [valueBtn, setValueBtn] = useState('');

  // Function to update multiple values at once.
    const updateValues = (result, newOperator, newΒufferNumber, newValueBtn) => {
        setResultAsString(result);
        setOperator(newOperator);
        setΒufferNumber(newΒufferNumber);
        setValueBtn(newValueBtn);
    };

  // Providing the context values to the components.
    return (
    <CalculatorContext.Provider value={{ resultAsString, operator, bufferNumber, valueBtn, updateValues }}>
        {children}
    </CalculatorContext.Provider>
    );
};

// PropTypes for the CalculatorProvider component.
CalculatorProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Custom hook to use the CalculatorContext in functional components.
// eslint-disable-next-line react-refresh/only-export-components
export const useCalculator = () => {
    return useContext(CalculatorContext);
};
