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
    <div className="py-3 w-full flex flex-col items-center justify-center">
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
    <div className="bg-indigo-300 flex flex-wrap w-full px-5 items-center sticky top-0 border-b border-solid border-black justify-center md:justify-between ">
      <div className="px-7 md:p-0">
        <Logo />
      </div>
      <div className="px-7 md:p-0">
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
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, omnis a. Porro, laborum molestias facere praesentium dolorem ducimus quia iusto! Id adipisci iste vero tempora rerum libero, maiores praesentium repudiandae.
      Sit quidem quas magnam nostrum? Nihil ex quam sequi soluta debitis magnam adipisci at ducimus qui nisi. Eos, repudiandae, commodi qui rem autem dicta laboriosam facilis voluptas et ducimus beatae.
      Rerum beatae accusantium exercitationem itaque provident veritatis veniam laboriosam ad numquam magnam! Sint doloribus numquam magni incidunt. Id tempora ipsa earum unde facere. Veniam reprehenderit iste quasi? Modi, harum voluptatibus?
      Ab laboriosam, delectus magni reprehenderit ipsum ex nemo deleniti corrupti voluptatibus pariatur reiciendis laudantium doloremque quas vero et esse incidunt perspiciatis. Eum labore accusantium minus et laborum dolorem aut deserunt?
      Libero, veritatis assumenda. Sit earum saepe, minus nisi ut nam et velit soluta quasi repellendus asperiores itaque reiciendis officiis cumque eveniet reprehenderit, sunt odio assumenda molestiae praesentium dolore a. Reprehenderit.
      Illum esse sapiente vero amet ex, error debitis aperiam, at eos, quos nobis corrupti quia dolorum. Ipsum qui dolorem illum, repellendus reprehenderit, perspiciatis quo ullam, quia ex enim eligendi odio?
      Odit soluta temporibus expedita debitis rem, mollitia corporis cumque! Qui id error voluptas necessitatibus molestias rem. Officia aliquid nihil neque, sequi quam, eos non laudantium asperiores aperiam molestiae amet adipisci.
      Aut odit recusandae ut dolorum sed fugit dolore eos nesciunt placeat quas! Assumenda nisi sunt, provident eligendi at aliquam dolorem, esse natus nesciunt, repellendus soluta? Rem tenetur recusandae molestiae beatae?
      Odit enim praesentium deleniti cum corporis mollitia neque eius maiores eos sapiente odio sunt ullam ipsum provident nostrum magni veniam error fuga quam iure, minus quibusdam sequi! Corporis, eveniet maiores?
      Voluptas dolore, deserunt consectetur eligendi explicabo quas, provident aut qui repudiandae consequatur nobis ab nostrum odit incidunt saepe deleniti voluptate animi tempora veniam quibusdam. Quas quam ullam pariatur? Asperiores, beatae.
      Voluptate fugiat quae hic adipisci, aperiam ipsa eaque nemo quas quod aut molestias dolorum, consequatur rerum vero autem nam, tempora vel at atque quo eligendi sapiente. Enim totam id sunt?
      Sapiente, exercitationem necessitatibus corporis similique totam iste cum architecto sed hic vitae unde maiores, veniam placeat mollitia asperiores aspernatur consectetur pariatur accusamus perferendis? Expedita similique voluptatibus ipsam autem quibusdam quo.
      Quisquam fugit dignissimos accusamus labore voluptatem excepturi quis distinctio voluptatibus nulla similique. Alias blanditiis cum atque aliquam, deleniti fugit distinctio, quas repudiandae aperiam ducimus illo repellendus dignissimos suscipit eveniet laboriosam!
      Nostrum incidunt nesciunt ipsa? Recusandae laboriosam itaque libero at? Ea facilis veritatis harum cumque sequi velit dolor quia optio hic minus impedit enim, saepe itaque dolore facere? Natus, facere ducimus.
      Est, dolorem inventore vero quaerat facere alias dolorum. Delectus cupiditate mollitia asperiores vero quas ullam repellendus similique soluta, doloremque odio aliquid, in aspernatur iure ratione doloribus aliquam blanditiis. Beatae, quis!
    </div>
  );
}

const Footer = () => {
  return(
    <div className="bg-indigo-300 flex flex-wrap w-full px-8 py-4 items-center justify-center sm:justify-between">
      <p className="px-5 md:p-0">Hecho con <i className="fas fa-heart"/> y <i className="fa fa-battery-full"/> desde Colombia</p>
      <a className="px-5 md:p-0" href="https://github.com/Devtambulos" rel="noreferrer" target="_blank">
        <div className="border-b border-solid border-indigo-900 hover:border-indigo-100 ">
          <span className="text-indigo-900 hover:text-indigo-100"> DevTambulos <i className="fa fa-github "/> </span>
          
        </div>
      </a>
    </div>
  );
}



export default PaginaInicial;
