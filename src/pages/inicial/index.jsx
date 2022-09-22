import React from 'react';
import { Link } from 'react-router-dom';
import imgHeader from '../../images/2.svg';
import { datosInfoEmpresa } from '../../utils/inicio/datosEmpresa.js';
import { datosDevs } from 'utils/inicio/datosDevs';
import '../../styles/inicio.css';

const PaginaInicial = () => {
  return (
    <div className="pI">
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="p-5 w-full flex flex-col items-center justify-center">
      <img src="DevProject_logo.png" alt="Logo" className="h-12" />
      {/* <span className="px-10 my-3 text-4xl font-bold text-center">DevProject</span> */}
    </div>
  );
};

const Redirigir = ({ irA, text }) => {
  return (
    <button className={`mx-5 sm:mx-0 md:m-5 sm:px-3 sm:m-8`}>
      <Link
        className={`px-3 py-2 bg-indigo-700 rounded-md text-white hover:bg-indigo-500 hover:text-white font-semibold  `}
        to={irA}
      >
        {text}
      </Link>
    </button>
  );
};

const NavBar = () => {
  return (
    <div className="bg-indigo-300 flex flex-wrap w-full px-5 items-center sticky top-0 border-b border-solid border-black justify-center md:justify-between z-50">
      <div className="px-7 md:p-0">
        <Logo />
      </div>
      <div className="px-6 py-3 m-3 md:p-0">
        <Redirigir irA={'/auth/register'} text={'Registro'} />
        <Redirigir irA={'/auth/login'} text={'Iniciar sesión'} />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-indigo-300 border-b border-solid border-black header">
      <header className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 flex flex-wrap justify-center items-center p-5 md:row-span-1 ">
          <h1 className="font-bold text-3xl p-1 w-full text-center md:text-5xl">
            DevProject es el lugar indicado donde podrás gestionar tus proyectos
          </h1>
          <p className="text-2xl  textTitulo w-full text-center p-5">
            ¡Facil y gratis!
          </p>

          <Redirigir irA={'/auth/register'} text={'Empezar'} />
        </div>
        <figure className="flex justify-center items-center md:col-span-1 p-5">
          <img className="" src={imgHeader} alt="imgHeader" />
        </figure>
      </header>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <InfoEmpresa />
      <CardsDesarrolladores />
    </div>
  );
};

const InfoEmpresa = () => {
  return (
    <div className="flex flex-wrap justify-center py-8 items-center bg-gradient-to-b from-indigo-100 to-gray-400">
      <Section />
    </div>
  );
};

const Section = () => {
  return (
    <>
      {datosInfoEmpresa.map((section) => {
        return (
          <section
            className=" grid grid-cols-1 md:grid-cols-2 py-2 p-6 m-4 justify-center items-center w-9/12 border-4 border-gray-500 border-double estilosSection"
            key={section.titulo}
          >
            {section.textFirst ? (
              <>
                <div>
                  <h2 className="text-center font-bold text-3xl uppercase ">
                    {section.titulo}
                  </h2>
                  <p className="font-semibold text-xl">{section.parrafo}</p>
                </div>
                <figure className="flex flex-wrap p-10 justify-center items-center  sm:p-24 md:p-20">
                  <img src={section.img} alt={section.altImg} className="" />
                </figure>
              </>
            ) : (
              <>
                <figure className="flex flex-wrap p-10 justify-center items-center sm:p-24 md:p-20">
                  <img src={section.img} alt={section.altImg} />
                </figure>
                <div>
                  <h2 className="text-center font-bold text-3xl uppercase">
                    {section.titulo}
                  </h2>
                  <p className="font-semibold text-xl">{section.parrafo}</p>
                </div>
              </>
            )}
          </section>
        );
      })}
    </>
  );
};

const CardsDesarrolladores = () => {
  return (
    <div className="flex flex-wrap justify-evenly p-4 bg-gradient-to-b from-gray-400 to-gray-900">
      {datosDevs.map((dev) => {
        return (
          <div
            key={dev.id}
            className="flex flex-wrap flex-col w-40 min-w-min min-h-full p-4 m-6 items-center justify-center border border-solid border-white hover:bg-indigo-400 estilosHoverCardDevs"
          >
            <figure>
              <img src={dev.img} alt="imgDev" />
            </figure>
            <div className="flex flex-col flex-auto items-center justify-center">
              <p className="text-white text-center">{dev.campo1}</p>
              <p className="text-white text-center">{dev.campo2}</p>
              <p className="text-white text-center">{dev.campo3}</p>
            </div>
            <div className="flex flex-wrap">
              {dev.nombreRedSocial2 && dev.enlaceRedSocial2 !== null ? (
                <div className="flex flex-wrap justify-center">
                  <BotonRedirigir
                    nombre={dev.nombreRedSocial1}
                    url={dev.enlaceRedSocial1}
                  />
                  <BotonRedirigir
                    nombre={dev.nombreRedSocial2}
                    url={dev.enlaceRedSocial2}
                  />
                </div>
              ) : (
                <div>
                  <BotonRedirigir
                    nombre={dev.nombreRedSocial1}
                    url={dev.enlaceRedSocial1}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const BotonRedirigir = ({ url, nombre }) => {
  return (
    <button className="m-2 px-2 py-1 bg-indigo-500 text-white rounded-xl hover:bg-indigo-700">
      <a href={url} target="_blank" rel="noreferrer">
        {nombre}
      </a>
    </button>
  );
};

const Footer = () => {
  return (
    <div className="bg-gray-900 flex flex-wrap w-full px-8 py-4 items-center justify-center sm:justify-between">
      <p className="px-5 md:p-0 text-white">
        Hecho con <i className="fas fa-heart" /> y{' '}
        <i className="fa fa-battery-full" /> desde Colombia
      </p>
      <a
        className="px-5 md:p-0"
        href="https://github.com/Devtambulos"
        rel="noreferrer"
        target="_blank"
      >
        <div className="border-b border-solid border-white hover:border-indigo-400 ">
          <span className="text-white hover:text-indigo-400">
            {' '}
            DevTambulos <i className="fa fa-github " />{' '}
          </span>
        </div>
      </a>
    </div>
  );
};

export default PaginaInicial;
