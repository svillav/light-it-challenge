import React from "react";
import Flecha from "../../assets/Flecha.png"

const Position = () => {

  return(
    <div className="w-16 m-2 flex flex-col items-center bg-white rounded-md">
      <img onClick={() => console.log('Clicked: Up')} className="w-6 h-6 rotate-0 cursor-pointer" src={Flecha} />
      <div className="h-4 flex items-center w-full justify-between">
        <img onClick={() => console.log('Clicked: Left')} className="w-6 h-6 -rotate-90 cursor-pointer" src={Flecha} />
        <img onClick={() => console.log('Clicked: Right')} className="w-6 h-6 rotate-90 cursor-pointer" src={Flecha} />
      </div>
      <img onClick={() => console.log('Clicked: Down')} className="w-6 h-6 rotate-180 cursor-pointer" src={Flecha} />
    </div>
  )
}

export default Position;