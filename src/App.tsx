import React, { useState } from "react";
import ChangingButton from "./components/ChangingButton";
import CheckBox from "./components/CheckBox";
function App() {

  const [isChecked , setIsChecked] = useState(false)
  return (
    <div>
      <h1 role="heading">I'm gonna learn React Testing Library</h1>
      <ChangingButton isDisabled={isChecked} toggles={[
        {color : 'red' , text : 'Stop'},
        {color : 'green' , text : 'Go'},
        {color : 'yellow' , text : 'Wait'}, 
        {color : 'blue' , text : 'Jump'},
      ]}/>
      <br/>
      <CheckBox isChecked={isChecked} setIsChecked={() => {
        setIsChecked(prev => !prev)
      }}/>
    </div>
  );
}

export default App;
