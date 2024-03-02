import React from 'react'

type Props =  {
    isChecked : boolean;
    setIsChecked : () => void

}

const CheckBox = ({isChecked , setIsChecked} : Props) => {
  return (
    <div >
        <input id="disable-button" checked={isChecked} onChange={setIsChecked}  type='checkbox'/>
        <label htmlFor="disable-button">disable button</label>
    </div>
  )
}

export default CheckBox
