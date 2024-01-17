// Importing necessary styles, components, and the CalculatorContext.
import "./App.css";
import "./App.css";
import KeyBoard from "./componets/KeyBoard";
import Display from "./componets/Display";
import { CalculatorProvider } from "./CalculatorContext";

// The main component function App.
function App() {
   // Wrapping the entire application with CalculatorProvider to provide context.
  return (
    <CalculatorProvider>
        <div className =" mt-10 m-auto border-2 border-solid border-gray-950 pb-5  rounded-lg cont-All">
        <div id="message-container">
            <p>This Αpplication is not available for your device!</p>
        </div>
          <div className="culc ">
              {/* <h1 className='text-white font-semibold text-center text-[1.2rem] pt-4'>Calculator  Expressions</h1> */}
              <div className=" border-8 border-solid border-gray-400 mt-8 m-auto bg-gray-50 p-4 rounded-lg  calcul"
              >  
                
                <Display />

                <div className="container-keyboard">
                <KeyBoard btColor1 ={'#9ca3af'} btColor2 ={'#9ca3af'} btColor3 ={'#3b82f6'} btColor4 ={'olive'}  keyBtnDisplay1 ={'un/ble'} keyBtnDisplay2 ={'un/ble'} keyBtnDisplay3 ={'un/ble'} keyBtnDisplay4 ={'un/ble'}/>

                <KeyBoard btColor1 ={''} btColor2 ={''} btColor3 ={''} btColor4 ={'orange '}  keyBtnDisplay1 ={'AC'} keyBtnDisplay2 ={'+/-'} keyBtnDisplay3 ={'un/ble'} keyBtnDisplay4 ={'÷'}/>

                <KeyBoard btColor1 ={''} btColor2 ={''} btColor3 ={''} btColor4 ={'orange '}   keyBtnDisplay1 ={'7'} keyBtnDisplay2 ={'8'} keyBtnDisplay3 ={'9'} keyBtnDisplay4 ={'x'}/>

                <KeyBoard btColor1 ={''} btColor2 ={''} btColor3 ={''} btColor4 ={'orange '}  keyBtnDisplay1 ={'4'} keyBtnDisplay2 ={'5'} keyBtnDisplay3 ={'6'} keyBtnDisplay4 ={'-'}/>

                <KeyBoard btColor1 ={''} btColor2 ={''} btColor3 ={''} btColor4 ={'orange '}   keyBtnDisplay1 ={'1'} keyBtnDisplay2 ={'2'} keyBtnDisplay3 ={'3'} keyBtnDisplay4 ={'+'}/>
                
                <KeyBoard btColor1 ={''} btColor2 ={''} btColor3 ={''} btColor4 ={'#e11d48'}  keyBtnDisplay1 ={'0'} keyBtnDisplay2 ={'.'} keyBtnDisplay3 ={'un/ble'} keyBtnDisplay4 ={'='}/>
                </div>
              </div><span className="text-white developer">Nick konstantinidis</span>
            </div>
          
        </div>
        </CalculatorProvider>
    
  )
}
// Exporting the App component.
export default App
