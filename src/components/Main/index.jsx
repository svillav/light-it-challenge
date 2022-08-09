import React from "react";
import Zoom from "../Zoom";
import Position from "../Position";
import Button from "../Button";

const Main = ({ setOpen }) => {
  return (
    <div onClick={() => setOpen(false)} className="relative w-full h-full bg-gray-300">
      <div className="absolute right-5 top-5">
        <Button label={"Fijar"} />
        <Button label={"Borrar"}  />
      </div>
      <div className='absolute bottom-2 right-2 flex items-center'>
        <Zoom />
        <Position />
      </div>
    </div>
  )
}

export default Main;