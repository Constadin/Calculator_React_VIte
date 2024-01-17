// Importing the Buttons component and the KeyBoardVal PropTypes for type-checking.
import Buttons from "./Buttons";
import { KeyBoardVal } from "../valid_propsTypes/propTypes";
import { Fragment } from "react";

// Setting PropTypes for the KeyBoard component based on KeyBoardVal.
KeyBoard.propTypes = KeyBoardVal;

// Functional component for the keyboard layout.
function KeyBoard(props) {

    return (
        // Using Fragment to wrap the component without introducing an extra DOM element.
        <Fragment>
            {/* Keyboard container with flex layout and styling */}
            <div className='flex flex-nowrap  gap-1 shadow-xl bg-Slate-100 px-0 py-2 rounded-lg mt-4  keyboard'>
                {/* Each button using the Buttons component with specified properties */}
                <Buttons btColor={props.btColor1} keyBtnDisplay={props.keyBtnDisplay1}/>
                <Buttons btColor={props.btColor2} keyBtnDisplay={props.keyBtnDisplay2}/>
                <Buttons btColor={props.btColor3} keyBtnDisplay={props.keyBtnDisplay3}/>
                <Buttons btColor={props.btColor4} keyBtnDisplay={props.keyBtnDisplay4}/>
            </div>
        </Fragment>
    )
}

// Exporting the KeyBoard component.
export default KeyBoard;
