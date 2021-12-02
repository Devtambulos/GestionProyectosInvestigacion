import React,{useLocation} from "react";
import { useUser } from "context/userContext";
import { Link } from "react-router-dom";
import { useAuth } from "context/authContext"
import ".././styles/j.css"





const PrivateRoute = ({ roleList, authConfirm, children }) => {
  
  
  const { userData } = useUser();

  if (roleList.includes(userData.rol) && userData.estado === "AUTORIZADO") {
    return children;
  }

  return (
    <div className="flex flex-wrap w-full h-full justify-center items-center lg:px-32 md:p-5 sm:p-7 xs">
      <h1 className="text-indigo-500 font-bold text-5xl">
        Lo sentimos pero no estás autorizado para ver este sitio.
      </h1>
      <p className="font-bold text-2xl">
        No tienes los permisos necesarios para ingresar a este sitio, si crees
        que se trata de un error comunicate con un administrador o en la parte de abajo podras encontrar algunos links que pueden ser de tu interes:

        
      </p>
      <div className="containerLinks">
        <Redirigir withLink={true} lugar={"Ir a perfil"} irA={"/"} />
        <Redirigir withLink={false}   lugar={"Recargar página"} irA={window.location}/>
        <Logout />
      </div>
    </div>
  );
};

const Redirigir = ({withLink,irA, lugar}) => {
  return (
    <button className="hover:scale-150 mx-5 sm:mx-0 md:m-5 links">
      {withLink ?
      <Link className="px-3 py-2 bg-indigo-400 rounded-md text-white hover:bg-indigo-700 hover:text-white font-semibold" to={irA}>{lugar}</Link>
      :
      <a href={irA} className="px-3 py-2 bg-indigo-400 rounded-md text-white hover:bg-indigo-700 hover:text-white font-semibold">{lugar}</a>
      }
    </button>
  );
};

const Logout = () => {
  const { setToken } = useAuth();
  const deleteToken = () => {
    console.log('eliminar token');
    setToken(null);
  };
  return (
    <button onClick={() => deleteToken()}>
      <Link to='/auth/login' className='sidebar-route text-red-700'>
        <div className='flex items-center'>
          <i className='fas fa-sign-out-alt' />
          <span className='text-sm  m-5'>Cerrar Sesión</span>
        </div>
      </Link>
    </button>
  );
};

export default PrivateRoute;
