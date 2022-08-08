import React from "react";
import plus from "../../assets/+.png"
import minus from "../../assets/-.png"

const Zoom = () => {
  return(
    <div className="flex flex-col justify-center h-16 mx-2 bg-white rounded-md divide-y">
      <img onClick={() => console.log('Clicked: More Zoom')} className="w-5 m-1 cursor-pointer" src={plus} />
      <img onClick={() => console.log('Clicked: Less Zoom')} className="w-5 m-1 cursor-pointer" src={minus} />
    </div>
  )
}

export default Zoom;