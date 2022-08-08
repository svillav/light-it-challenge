import React from "react";

const Button = (props) => {
  const { label } = props;
  return (
    <button onClick={() => console.log(`Clicked: ${label}`)} class="bg-white hover:bg-gray-100 text-gray-500 text-sm py-2 px-5 mx-2 border border-gray-400 rounded shadow">
      {label}
    </button>
  )
}

export default Button;