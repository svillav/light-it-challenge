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

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false)
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
    <>
      <div class="flex justify-center items-center w-22 h-full shadow-md bg-white px-1 relative z-40">
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
                  <li className="h-20 justify-center cursor-pointer" key={index}>
                    <div
                      className="flex flex-col items-center text-xs p-5 text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="dark"
                      onClick={() => handleClick(section.name)}
                    >
                      <img className='h-100' src={section.img} alt="" />
                      <span>{section.label}</span>
                    </div>
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
    </>
  )
}

export default Sidebar;