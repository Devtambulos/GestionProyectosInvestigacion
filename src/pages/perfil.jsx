import React, { useEffect, useState } from 'react';
import Input from 'components/Input';







const Perfil = () => {
  return (
    <div className='p-10 flex flex-col items-center justify-center w-full'>
      <h1 className='font-bold text-2xl text-gray-900'>Perfil del usuario</h1>
      <form >
        <Input
          //defaultValue={queryData.Usuario.nombre}
          label='Nombre'
          name='nombre'
          type='text'
          required={true}
        />
        <Input
         // defaultValue={queryData.Usuario.apellido}
          label='Apellido'
          name='apellido'
          type='text'
          required={true}
        />
        <Input
         // defaultValue={queryData.Usuario.identificacion}
          label='Identificación'
          name='identificacion'
          type='text'
          required={true}
        />
      </form>
    </div>
  );
};

export default Perfil;