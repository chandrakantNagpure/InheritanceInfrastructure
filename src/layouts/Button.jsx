// eslint-disable-next-line no-unused-vars
import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-1 border-white bg-primary/75 hover:bg-primary text-white transition-all rounded-full">
        {props}
      </button>
    </div>
  );
};

export default Button
