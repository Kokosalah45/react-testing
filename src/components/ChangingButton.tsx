import React , {useState} from 'react'


type Props =  {
    toggles : {
        color : string;
        text : string;
    }[],
    isDisabled : boolean
}

const ChangingButton = ({toggles , isDisabled} : Props) => {
    console.log({isDisabled})
  const [toggledColor , setToggledColor] = useState(toggles[0])
  const toggle = () => {
        const currentColor = toggledColor.color
        const currentIndex = toggles.findIndex(toggle => toggle.color === currentColor)
        const nextIndex = (currentIndex + 1) % toggles.length
        setToggledColor(toggles[nextIndex])
  }
  return (
    <button disabled={isDisabled} style={{ backgroundColor : isDisabled ? 'gray' : toggledColor.color }} onClick={toggle}>
        {toggledColor.text}
    </button>
  )
}

export default ChangingButton
