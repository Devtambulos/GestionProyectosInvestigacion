import React from "react";
import { Link } from "react-router-dom";
import "../../styles/inicio.css"
import imgHeader from"../../images/2.svg"




const PaginaInicial = () => {
  return <div className="pI">
    <NavBar />
    <Header />
    <Main />
    <Footer />
  </div>;
};


const Logo = () => {
  return (
    <div className="p-3 w-full flex flex-col items-center justify-center">
      <img src="DevProject_logo.png" alt="Logo" className="h-12" />
      <span className="my-2 text-xl font-bold text-center">DevProject</span>
    </div>
  );
};

const Redirigir = ({irA, text,}) => {
  return (
    <button className={`mx-5 sm:mx-0 md:m-5 sm:px-3`}>
      <Link className={`px-3 py-2 bg-indigo-900 rounded-md text-white hover:bg-indigo-700 hover:text-white font-semibold  `} to={irA}>{text}</Link>
    </button>
  );
};


const NavBar = () => {
  return(
    <div className="bg-indigo-300 flex flex-wrap w-full px-5 items-center sticky top-0 border-b border-solid border-black justify-center md:justify-between z-50">
      <div className="px-7 md:p-0">
        <Logo />
      </div>
      <div className="px-7 py-3 md:p-0">
        <Redirigir irA={"/auth/register"} text={"Registro"}/>
        <Redirigir irA={"/auth/login"} text={"Login"}/>
      </div>
    </div>
  
  )
}


const Header = () => {
  return(
    <div className="bg-indigo-300 border-b border-solid border-black ">
      <header className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 flex flex-wrap justify-center items-center p-5 md:row-span-1 ">
          <h1 className="font-bold text-5xl p-1 w-full text-center ">DevProject es el lugar indicado donde podras gestionar tus proyectos</h1>
          <p className="text-2xl  textTitulo w-full text-center p-5">¡Facil y gratis!</p>

          <Redirigir irA={"/auth/register"} text={"Empezar"}/>
          
        </div>
        <image className="md:col-span-1 p-5">
          <img className="" src={imgHeader} alt="imgHeader" />
        </image>

      </header>
    </div>
  );
}


const Main = () => {
  return(
    <div>

    <InfoEmpresa />
    <CardsDesarrolladores />

  </div>
  );
}

const datosInfoEmpresa = [
  {
    "titulo":"Section 1",
    "parrafo":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quibusdam cumque accusantium facilis libero adipisci ut commodi cum sunt blanditiis. Et, mollitia omnis commodi optio repellat tempore dolore quo inventore.",
    "img":"https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg",
    "altImg":"imgprueba",
    "textFirst":true
  },
  {
    "titulo":"section 2",
    "parrafo":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quibusdam cumque accusantium facilis libero adipisci ut commodi cum sunt blanditiis. Et, mollitia omnis commodi optio repellat tempore dolore quo inventore.",
    "img":"https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg",
    "altImg":"imgprueba",
    "textFirst":false
  },


]

const InfoEmpresa = () => {
  return(
    <div className="flex flex-wrap justify-center py-8 items-center bg-gradient-to-b from-gray-100 to-gray-300">
      <Section  />
      <Section />
    </div>
  );
}

const Section = () => {
  return(
    <>
      {
        datosInfoEmpresa.map(section=>{
          return(
            <section className=" grid grid-cols-1 md:grid-cols-2 p-6 m-4 justify-center items-center w-9/12 border-4 border-gray-500 border-double estilosSection">
              {section.textFirst?
              <>
                <div>
                  <h2 className="text-center font-bold text-3xl uppercase">{section.titulo}</h2>
                  <p className="font-semibold text-xl">{section.parrafo}</p>
                </div>
                <image className="flex flex-wrap p-10 justify-center items-center  sm:p-24 md:p-20">
                  <img src={section.img} alt={section.altImg} className="" />
                </image>
              </> :
              <>
                <image className="flex flex-wrap p-10 justify-center items-center sm:p-24 md:p-20">
                  <img src={section.img} alt={section.altImg} />
                </image>
                <div>
                  <h2 className="text-center font-bold text-3xl uppercase">{section.titulo}</h2>
                  <p className="font-semibold text-xl">{section.parrafo}</p>
                </div>
              </>}
              
            </section>
          )
        })
      }
    </>
  )
}


const datosPruebaDevs = [
  {
  "id": 1,
  "img": "data:image/png;base64,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",
  "nombre": "Juan Pablo Roldán Patiño",
  "correo": "jpabloroldanp@gmail.com",
  "otros":null,
  "nombreRedSocial1":"GitHub",
  "enlaceRedSocial1":"https://github.com/JuanPabloRP",
  "nombreRedSocial2":"LinkedIn",
  "enlaceRedSocial2":"https://github.com/JuanPabloRP",
  },{
    "id": 1,
    "img": "data:image/png;base64,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",
    "nombre": "Juan Pablo Roldán Patiño",
    "correo": "jpabloroldanp@gmail.com",
    "otros":"dasdasdasdasdafsffsd",
    "nombreRedSocial1":"GitHub",
    "enlaceRedSocial1":"https://github.com/JuanPabloRP",
    "nombreRedSocial2":null,
    "enlaceRedSocial2":null,
    },{
      "id": 1,
      "img": "https://www.optoma.es/ContentStorage/Generic/FeatureImages/a0b55782-4962-4b13-ad15-f6bdf817aa52.jpg",
      "nombre": "Juan Pablo Roldán Patiño",
      "correo": "jpabloroldanp@gmail.com",
      "otros":"dasdasdasdasdafsffsd",
      "nombreRedSocial1":"GitHub",
      "enlaceRedSocial1":"https://github.com/JuanPabloRP",
      "nombreRedSocial2":"LinkedIn",
      "enlaceRedSocial2":"https://github.com/JuanPabloRP",
      },{
        "id": 1,
        "img": "data:image/png;base64,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",
        "nombre": "Juan Pablo Roldán Patiño",
        "correo": "jpabloroldanp@gmail.com",
        "otros":"dasdasdasdasdafsffsd",
        "nombreRedSocial1":"GitHub",
        "enlaceRedSocial1":"https://github.com/JuanPabloRP",
        "nombreRedSocial2":"LinkedIn",
        "enlaceRedSocial2":"https://github.com/JuanPabloRP",
        },{
  "id": 1,
  "img": "data:image/png;base64,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",
  "nombre": "Juan Pablo Roldán Patiño",
  "correo": "jpabloroldanp@gmail.com",
  "otros":"dasdasdasdasdafsffsd",
  "nombreRedSocial1":"GitHub",
  "enlaceRedSocial1":"https://github.com/JuanPabloRP",
  "nombreRedSocial2":"LinkedIn",
  "enlaceRedSocial2":"https://github.com/JuanPabloRP",
  },{
  "id": 1,
  "img": "data:image/png;base64,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",
  "nombre": "Juan Pablo Roldán Patiño",
  "correo": "jpabloroldanp@gmail.com",
  "otros":"dasdasdasdasdafsffsd",
  "nombreRedSocial1":"GitHub",
  "enlaceRedSocial1":"https://github.com/JuanPabloRP",
  "nombreRedSocial2":"LinkedIn",
  "enlaceRedSocial2":"https://github.com/JuanPabloRP",
  }
]

const CardsDesarrolladores = () => {
  return(
    <div className="flex flex-wrap justify-evenly p-4 bg-gradient-to-b from-gray-300 to-gray-900">
      { datosPruebaDevs.map((dev)=>{
        return(
          <div key={dev.id} className="flex flex-wrap flex-col w-40 min-w-min min-h-full p-4 m-6 items-center justify-center border border-solid border-white hover:bg-indigo-400 estilosHoverCardDevs">
            <image>
              <img src={dev.img} alt="imgDev"/>
            </image>
            <div className="flex flex-col flex-auto items-center justify-center">
              <p className="text-white">{dev.nombre}</p>
              <p className="text-white">{dev.correo}</p>
              <p className="text-white">{dev.otros}</p>
            </div>
            <div className="flex flex-wrap">
              {dev.nombreRedSocial2 && dev.enlaceRedSocial2 !== null ?
              <>
                <BotonRedirigir nombre={dev.nombreRedSocial1} url={dev.enlaceRedSocial1} />
                <BotonRedirigir nombre={dev.nombreRedSocial2} url={dev.enlaceRedSocial2}/>
              </>
              : 
              <BotonRedirigir nombre={dev.nombreRedSocial1} url={dev.enlaceRedSocial1} />
              }
            </div>
          </div>
        );
      }) }
    </div>
  );
}

const BotonRedirigir = ({url, nombre}) => {
  return(
    <button className="m-2 px-2 py-1 bg-indigo-500 text-white rounded-xl hover:bg-indigo-700"><a href={url} target="_blank" rel="noreferrer">{nombre}</a></button>
  );
}

const Footer = () => {
  return(
    <div className="bg-gray-900 flex flex-wrap w-full px-8 py-4 items-center justify-center sm:justify-between">
      <p className="px-5 md:p-0 text-white">Hecho con <i className="fas fa-heart"/> y <i className="fa fa-battery-full"/> desde Colombia</p>
      <a className="px-5 md:p-0" href="https://github.com/Devtambulos" rel="noreferrer" target="_blank">
        <div className="border-b border-solid border-white hover:border-indigo-400 ">
          <span className="text-white hover:text-indigo-400"> DevTambulos <i className="fa fa-github "/> </span>
          
        </div>
      </a>
    </div>
  );
}



export default PaginaInicial;
