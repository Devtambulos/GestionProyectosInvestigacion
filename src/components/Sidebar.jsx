import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarLinks = () => {
  return (
    <div className="sidebar">
      <Logo />
      <ul className="mt-12">
        <SidebarRoute to="/" title="Inicio" icon="fas fa-home" />
        <SidebarRoute to="/page2" title="Pagina2" icon="fas fa-smile-wink" />
        <SidebarRoute to="/category1" title="Catego 1" icon="fab fa-amazon" />
        <SidebarRoute to="/category1/page1" title="Test" icon="fas fa-car" />
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
        to="/page2"
        title="Pagina2"
        posicion="justify-center"
        icon="fas fa-smile-wink"
      />
      <SidebarRoute
        to="/category1"
        title="Catego 1"
        posicion="justify-center"
        icon="fab fa-amazon"
      />
      <SidebarRoute
        to="/category1/page1"
        title="Test"
        posicion="justify-center"
        icon="fas fa-car"
      />
    </ul>
  );
};

const SidebarLinksResponsive = () => {
  return (
    <ul className="w-full flex flex-row grid grid-cols-4 gap-3 items-center justify-center">
      <SidebarRoute
        to="/"
        title="Inicio"
        icon="fas fa-home"
      />
      <SidebarRoute
        to="/page2"
        title="Pagina2"
        icon="fas fa-smile-wink"
      />
      <SidebarRoute
        to="/category1"
        title="Catego 1"
        icon="fab fa-amazon"
      />
      <SidebarRoute
        to="/category1/page1"
        title="Test"
        icon="fas fa-car"
      />
    </ul>
  );
};

const Logo = () => {
  return (
    <div className="py-3 w-full flex flex-col items-center justify-center">
      <img src="logo.png" alt="Logo" className="h-16" />
      <span className="my-2 text-xl font-bold text-center">
        Título de Mi Aplicación
      </span>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <aside className="bg-gray-200">
      <div className="flex flex-col md:flex-row flex-no-wrap md:h-full">
        <div className="hidden md:flex">
          <div className="px-4">
            <div className="flex flex-col w-full items-center justify-center pt-5 pb-5">
              <i
                onClick={() => setOpen(!open)}
                className={`cursor-pointer fas fa-${open ? "times" : "bars"}`}
              ></i>
            </div>
            {open ? <SidebarLinks /> : <SidebarLinksHide />}
          </div>
        </div>
        <div className="flex md:hidden w-full justify-between bg-gray-800 p-2 text-white">
          <i
            className={`fas fa-${open ? "times" : "bars"}`}
            onClick={() => setOpen(!open)}
          />
          <i className="fas fa-home" />
        </div>
        {open && <ResponsiveSidebar />}
      </div>
    </aside>
  );
};

const ResponsiveSidebar = () => {
  return (
    <aside className="bg-gray-200">
      <div
        className="text-black w-full md:h-full sm:hidden transition duration-150 ease-in-out"
        id="mobile-nav"
      >
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
        <div className={`w-full h-full flex items-center text-white hover:text-black`}>
          {posicion ? (
            <>
              <i className={`${icon} text-gray-900 hover:text-white mx-2`}/>
              <label className="text-sm  ml-16 absolute font-semibold">{title}</label>
            </>
          ) : (
            <>
              <i className={`${icon} text-gray-900 hover:text-white`} />
              <span className={`text-sm  ml-2 text-gray-900`}>{title}</span>
            </>
          )}
        </div>
      </NavLink>
    </li>
  );
};

export default Sidebar;
