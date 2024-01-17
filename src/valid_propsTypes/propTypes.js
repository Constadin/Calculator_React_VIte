import PropTypes from 'prop-types';

// Importing PropTypes for type checking.

// PropTypes for individual buttons used in the KeyBoard component.
export const ButtonPropTypes = {
  bgColor: PropTypes.string, // Background color of the button.
  keyBtnDisplay: PropTypes.string.isRequired, // Display value on the button (required).
};

// PropTypes for the KeyBoardVal object used in the KeyBoard component.
export const KeyBoardVal = {
  bgColor: PropTypes.string, // Background color for the entire KeyBoard.
  keyBtnDisplay1: PropTypes.string.isRequired, // Display value for the first button (required).
  keyBtnDisplay2: PropTypes.string.isRequired, // Display value for the second button (required).
  keyBtnDisplay3: PropTypes.string.isRequired, // Display value for the third button (required).
  keyBtnDisplay4: PropTypes.string.isRequired, // Display value for the fourth button (required).
};

// PropTypes for the DisplayValue object used in the Display component.
export const DisplayValue = {
  valuedisplay: PropTypes.string.isRequired, // The value to be displayed on the calculator display (required).
};

