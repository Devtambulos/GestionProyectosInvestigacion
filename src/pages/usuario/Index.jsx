import React from 'react';

const Usuario = () => {
  return <div className="py-8 w-full flex items-center justify-center font-serif	font-black text-black">
      Datos Usuarios:
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Identificación</th>
            <th>Rol</th>
            <th>Editar</th>
          </tr>
        </thead>
        </table>

        
  </div>;
};

export default Usuario;
