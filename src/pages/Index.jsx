import React from 'react';
import '../styles/inicio.css';

import { info } from '.././utils/inicioPrivado/datosCard.js';

const Index = () => {
  return (
    <div className=" w-full h-full">
      <h1 className="text-center text-5xl font-bold p-5 text-indigo-700">
        ¡Bienvenid@ a DevProject!
      </h1>
      <h3 className="text-center">
        Algunas cosas que te gustará saber de DevProject:
      </h3>
      <CardInfo />
    </div>
  );
};

// TODO: terminar cards de mostrar info xd

const CardInfo = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {info.map((e) => {
        return (
          <div className="w-80 p-5 m-4 bg-white cardInicioPrivado">
            <h4 className="text-center text-2xl p-5">{e.titulo}</h4>
            <p className="text-xl ">{e.parrafo}</p>
            
          </div>
        );
      })}
    </div>
  );
};

export default Index;
