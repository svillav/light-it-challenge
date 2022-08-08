import React from "react";
import activo from "../../assets/activo.png";

const productsStyle = {
  customBorder: {
    borderTopRightRadius: "300px 180px",
    borderBottomRightRadius: "300px 180px"
  },
  container: {
    width: "470px"
  }
}

const Products = (props) => {
  const { setProducts, sectionTitle, products, productTitle } = props;

  const productsList = products.items

  return (
    <div style={productsStyle.container} className="absolute top-0 left-0 p-4 h-full w-96 left-20 bg-neutral-100">
      <button className="mb-4 flex flex-row items-center text-xs" onClick={() => setProducts(false)}>
        <img className="h-3 w-2.5 m-1" src={activo} />
        {sectionTitle}
      </button>
      <span className="m-2 font-bold font-sans text-neutral-500">{productTitle}</span>
      <div className="flex flex-wrap my-4">
        {
          productsList.map((product) => {
            return(
              <div className="mx-2 flex flex-col items-center">
                <img 
                  className="h-32 w-32"
                  src={product.img} 
                />
                <span className="text-sm">{product.name}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products;
