import React, { useState } from 'react';
import Menu from '../Menu';
import { getData } from '../../services/getData';
import Aberturas from "../../assets/Aberturas.png";
import Equipamiento from "../../assets/Equipamiento.png";
import Terminaciones from "../../assets/Terminaciones.png";

const sections = [
  {
    name: "aberturas",
    label: "Aberturas",
    img: Aberturas
  },
  {
    name: "equipamiento",
    label: "Equipamiento",
    img: Equipamiento
  },
  {
    name: "terminaciones",
    label: "Terminaciones",
    img: Terminaciones
  }
]

const Sidebar = ({isOpen, setOpen}) => {
  const [title, setTitle] = useState('')
  const [openProducts, setProducts] = useState(false);
  const [data, setData] = useState();

  let dataCategory = [];

  async function handleData(category) {
    setData([]);
    dataCategory = await getData(category);
    setData(() => dataCategory)
  }

  return (
    <div class="relative h-full flex justify-center items-center w-22 shadow-md bg-white z-40">
      <ul class="w-20 h-60">
        {
          sections.map((section, index) => {

            const handleClick = (title) => {
              handleData(title)
              setOpen(true)
              setTitle(section.label)
              setProducts(false)
            }

            return (
              <div>
                <li className="flex flex-col justify-center align-items hover:bg-gray-100 cursor-pointer" key={index}>
                  <button
                    className="before:content-[''] before:h-5 before:w-full before:bg-white before:h-full before:rounded-br-full
                      after:content-[''] after:h-5 after:bg-white after:w-full after:h-full after:rounded-tr-full
                      flex flex-col justify-center items-center text-xs text-gray-700 text-ellipsis whitespace-nowrap rounded 
                      hover:text-gray-900 active:bg-gray-100 focus:bg-gray-100 transition duration-300 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                    onClick={() => handleClick(section.name)}
                  >
                    <div className="flex flex-col w-full items-center py-2 hover:bg-gray-100">
                      <img className='w-7' src={section.img} alt="" />
                      <span>{section.label}</span>
                    </div>
                  </button>
                </li>
              </div>
            )
          })
        }
      </ul>
      {isOpen ?
        <Menu
          title={title}
          openProducts={openProducts}
          setProducts={setProducts}
          setOpen={setOpen}
          data={data}
        /> : null}
    </div>
  )
}

export default Sidebar;