import React from 'react';

const NavBar = ({titulo}) => {
    return(
    <div className="shadow-md h-16 flex items-center mb-2 rounded-b-3xl p-3 bg-gradient-to-b from-gray-300  text-3xl font-serif  text-gray-800 font-bold text-center w-full justify-center ">
        {titulo}
    </div>      
  );
};
export default NavBar;