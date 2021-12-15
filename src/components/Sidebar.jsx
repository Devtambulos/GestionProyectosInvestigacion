import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "context/authContext";
import PrivateComponent from "./PrivateComponent";
import { Link } from "react-router-dom";


const SidebarLinks = () => {


  return (
    <div className="sidebar">
      <Logo />
      <ul className="mt-12">       
        <SidebarRoute to="/" title="Inicio" icon="fas fa-home" />
        <SidebarRoute to='/perfil' title='Perfil' icon='fas fa-user' />
        <PrivateComponent roleList={["ADMINISTRADOR", "LIDER"]}>
          <SidebarRoute to="/usuarios" title="Usuarios" icon="fas fa-users" />
        </PrivateComponent>
        <SidebarRoute to="/proyectos" title="Proyectos" icon="fas fa-file-alt"/>

        <Logout text="Cerrar Sesión"/>
      </ul>
    </div>
  );
};

const SidebarLinksHide = () => {
  return (
    <ul className="mt-12">

      <SidebarRoute
        to="/"
        title="Inicio"
        posicion="justify-center"
        icon="fas fa-home"
      />
      <SidebarRoute
        to="/perfil"
        title="Perfil"
        posicion="justify-center"
        icon="fas fa-user"
      />
      <SidebarRoute
        to="/usuarios"
        title="Usuarios"
        posicion="justify-center"
        icon="fas fa-users"
      />
      <SidebarRoute
        to="/proyectos"
        title="Proyectos"
        posicion="justify-center"
        icon="fas fa-file-alt"
      />
      <Logout text=""/>
    </ul>
  );
};

const SidebarLinksResponsive = () => {
  return (
    <ul className="w-full items-center justify-center">      
        <SidebarRoute to="/" title="Inicio" icon="fas fa-home" />
        <SidebarRoute to='/perfil' title='Perfil' icon='fas fa-user' />
        <SidebarRoute to="/avances" title="Avances" icon="fas fa-smile-wink" />
        <PrivateComponent roleList={["ADMINISTRADOR", "LIDER"]}>
          <SidebarRoute to="/usuarios" title="Usuarios" icon="fas fa-users" />
        </PrivateComponent>
        <SidebarRoute
          to="/proyectos"
          title="Proyectos"
          icon="fas fa-file-alt"
        />
        <SidebarRoute to="/category1" title="Catego 1" icon="fab fa-amazon" />
        <SidebarRoute to="/category1/page1" title="Test" icon="fas fa-car" />
        <Logout text="Cerrar Sesión"/>
    </ul>
  );
};

const Logo = () => {
  return (
    <div className="py-3 w-full flex flex-col items-center justify-center">
      <img src="DevProject_logo.png" alt="Logo" className="h-16" />
      <span className="my-2 text-xl font-bold text-center">DevProject   </span>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <aside className="bg-indigo-200">
      <div className="flex flex-col md:flex-row flex-no-wrap md:h-full">
        <div className="hidden md:flex">
          <div className="px-4">
            <div
              className={`flex flex-col w-full items-${
                open ? "end" : "center"
              } justify-center pt-5 pb-5`}
            >
              <i
                onClick={() => setOpen(!open)}
                className={`cursor-pointer fas fa-${
                  open ? "fas fa-chevron-circle-left" : "bars"
                }`}
              ></i>
            </div>
            {open ? <SidebarLinks /> : <SidebarLinksHide />}
          </div>
        </div>
        {<ResponsiveSidebar />}
      </div>
    </aside>
  );
};

const ResponsiveSidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <aside className="bg-gray-200">
      <div
        className="text-black w-full md:h-full sm:hidden transition duration-150 ease-in-out"
        id="mobile-nav"
      >
        <div className="px-4">
          <div
            className={`flex flex-col w-full items-${
              open ? "end" : "center"
            } justify-center pt-5 pb-5`}
          >
            <i
              onClick={() => setOpen(!open)}
              className={`cursor-pointer fas fa-${
                open ? "fas fa-angle-left" : "bars"
              }`}
            ></i>
          </div>
        </div>
        <SidebarLinksResponsive />
      </div>
    </aside>
  );
};

const SidebarRoute = ({ to, title, icon, posicion }) => {
  return (
    <li className="my-5">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "sidebar-route text-white bg-indigo-700"
            : "sidebar-route hover:bg-indigo-400"
        }
      >
        <div
          className="w-full h-full flex items-center text-gray-900 hover:text-white"
        >
          {posicion ? (
            <>
              <i className={`${icon} mx-2`} />
              {/* <label className="text-sm pl-16 font-semibold absolute invisible">
                {title}
              </label> */}
            </>
          ) : (
            <>
              <i className={`${icon}`} />
              <span className={`text-sm  ml-2`}>{title}</span>
            </>
          )}
        </div>
      </NavLink>
    </li>
  );
};

const Logout = ({text}) => {
  const { setToken } = useAuth();
  const deleteToken = () => {
    console.log("eliminar token");
    setToken(null);
    window.location.reload(true)
  };
  return (
    <li onClick={() => deleteToken()}>
      <Link to="/inicio" className="sidebar-route text-red-700">
        <div className="flex items-center">
          <i className="fas fa-sign-out-alt" />
          
          <span className="text-sm  ml-2">{text}</span>
        </div>
      </Link>
    </li>
  );
};

export default Sidebar;