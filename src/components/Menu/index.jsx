import React, { useState } from "react";
import activo from "../../assets/activo.png";

import Products from "../Products";

const menuStyle = {
  customBorder: {
    borderTopRightRadius: "300px 180px",
    borderBottomRightRadius: "300px 180px",
    left: "470px"
  },
  container: {
    left: "85px",
    width: "470px"
  }
}

const Menu = (props) => {
  const { setOpen, title, setProducts, openProducts, data } = props;
  const [products, setListProducts] = useState([])
  const [productTitle, setProductTitle] = useState('')

  const handleClick = (data) => {
    setListProducts(data)
    setProductTitle(data.name)
    setProducts(true)
  }

  return (
    <div style={menuStyle.container} className="absolute p-4 h-full w-96 left-20 bg-neutral-100 font-sans">
      <span className="font-bold text-neutral-500">{title}</span>
      <ul>
        {
          data.map((data) => {
            return (
              <li
                onClick={() => handleClick(data)} 
                className="flex flex-row justify-between items-center p-2 bg-white my-1.5 rounded-lg cursor-pointer">
                <span className="text-sm px-2">{data.name}</span>
                <img className="h-4 w-3 rotate-180" src={activo} />
              </li>
            )
          })
        }
      </ul>
      { openProducts ? 
        <Products 
          sectionTitle={title} 
          productTitle={productTitle} 
          products={products} 
          setProducts={setProducts} 
        /> : null }
      <div style={menuStyle.customBorder} 
      className="absolute py-3 top-1/2 bg-neutral-100">
        <button
          className="h-10 w-5" 
          onClick={() => setOpen(false)}
        >
          <img className="h-5 w-4" src={activo} />
        </button>
      </div>
    </div>
  )
}

export default Menu;