import React from "react";
import { Link } from "react-router-dom";
import "../../styles/inicio.css"
import imgHeader from"../../images/undraw_project_completed_re_pqqq.svg"


const PaginaInicial = () => {
  return <div>
    <NavBar />
    <Header />
    <Main />
  </div>;
};

const NavBar = () => {
  return(
    <div className="bg-indigo-300 flex flex-wrap w-full containerNavBar">
      <div>
        <Logo />
      </div>
      <div>
        <Redirigir irA={"/auth/register"} text={"Registro"}/>
        <Redirigir irA={"/auth/login"} text={"Login"}/>
      </div>
    </div>
  
  )
}

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
    <button className={`mx-5 sm:mx-0 md:m-5 `}>
      <Link className={`px-3 py-2 bg-indigo-400 rounded-md text-white hover:bg-indigo-700 hover:text-white font-semibold  `} to={irA}>{text}</Link>
    </button>
  );
};


const Header = () => {
  return(
    <div className="bg-indigo-300 headerInicio">
      <header className="headerMain">
        <div className="containerTitulo flex justify-center">
          <h1 className="font-bold text-5xl titulo textTitulo ">DevProject es el lugar indicado donde podras gestionar tus proyectos</h1>
          <p className="textTitulo">¡Facil y gratis!</p>

          <Redirigir irA={"/auth/register"} text={"Empezar"}/>
          
        </div>
        <image className="containerImgHeader">
          <img src={imgHeader} alt="" />
        </image>

      </header>
    </div>
  );
}


const Main = () => {
  return(
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius aspernatur unde autem, odio reiciendis fugiat in adipisci? A nam atque necessitatibus dolorem odit neque cum modi? Doloremque, aperiam unde.
      Aliquid debitis nostrum inventore fuga exercitationem aliquam, quam deserunt in recusandae accusantium esse quod delectus rerum ipsam! Ipsam aliquam velit consectetur, explicabo rem molestiae delectus vitae in suscipit! Vero, eos.
      Voluptatem ex inventore atque. Omnis blanditiis repellendus nisi quos perspiciatis adipisci eos libero est praesentium? Mollitia quae repellendus rerum explicabo, accusamus provident sit delectus optio ea porro, odit voluptatem dolorem.
      Officiis, id ullam? Esse obcaecati voluptates assumenda molestias magni doloremque voluptatem animi? Deleniti dolor aperiam labore, rerum ipsum assumenda quos possimus rem laborum dicta eligendi alias odio enim nisi nostrum.
      Provident explicabo, labore inventore ex temporibus, repudiandae cum voluptas neque soluta repellendus nostrum accusamus expedita hic minima perferendis, laudantium odio sed? Eos sed saepe corrupti dicta repellat animi perspiciatis hic.
      Numquam nulla inventore dignissimos. Ullam excepturi doloremque, natus, blanditiis impedit animi velit dolore tenetur delectus, omnis architecto odit ipsa nisi ad soluta ducimus incidunt harum? Necessitatibus laudantium praesentium doloremque provident?
      Et enim placeat nam tempora incidunt, nemo quas nulla blanditiis, dolorem rerum ad suscipit neque possimus ab nisi! Sequi possimus dolorem iusto, dolorum alias natus voluptatibus? Hic temporibus assumenda optio.
      Cumque ullam aliquid, beatae recusandae iste placeat quia, autem officia unde ipsa quod, numquam culpa corrupti? Natus at iusto iste rem molestias hic. Fugit suscipit rerum facilis sed quam et.
      Illum velit eos, vitae quis dolor odit! Harum libero molestias error quibusdam reiciendis mollitia inventore rem in impedit, earum dolore laudantium voluptatem nemo, illum asperiores repellendus atque nam perspiciatis eum.
      Cupiditate ullam provident iure illum consequuntur voluptatem veritatis assumenda? Magni quibusdam aspernatur eos aperiam! Laborum eaque aliquid non soluta nulla blanditiis at magnam omnis itaque, tenetur vitae ullam vel! Inventore?
    </div>
  );
}
export default PaginaInicial;
