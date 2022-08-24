import { useState } from "react"
import Color from "./Color"

export const ColorPicker = () => {
    const colors = [{
        hex: '#91A6FF',
        name: 'Cornflower Blue'
      },
      {
        hex: '#FF88DC',
        name: 'Persian Pink'
      },
      {
        hex: '#80FF72',
        name: 'Screamin Green'
      },
      {
        hex: '#FF5154',
        name: 'Tart Orange'
      }]

      //create backgroundColor state
      const [backgroundColor, setBackgroundColor] = useState('white')

      return (
        <div className="page" style={{backgroundColor}}>  
            {
                colors.map((color) => (
                    //Lift backgroundColor state from parent and pass to child component
                    <Color name={color.name} hex={color.hex} setBackgroundColor={setBackgroundColor} key={color.name}  />
                ))
            }
        </div>
      )
}