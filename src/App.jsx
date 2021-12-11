import React, { useState, useEffect } from "react";
import PrivateLayout from "layouts/PrivateLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "context/userContext";
import Index from "pages/Index";
import IndexCategory1 from "pages/category1/Index";
import Category1 from "pages/category1/CategoryPage1";
import "styles/globals.css";
import UsuarioIndex from "pages/usuarios";
import EditarUsuario from "pages/usuarios/editar";
import "styles/globals.css";
import "styles/tabla.css";
import Registro from "pages/auth/registro";
import AuthLayout from "layouts/AuthLayout";
import Login from "pages/auth/login";
import jwt_decode from "jwt-decode";
import IndexProyecto from 'pages/proyecto/Index'
import Proyecto from "pages/proyecto/Proyecto";
import ProyectoNuevo from "pages/proyecto/ProyectoNuevo";
import PaginaInicial from "pages/inicial/index"
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { AuthContext } from "context/authContext";
import EditarProyecto from "./pages/proyecto/editarProyecto";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem("token"));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('')

  const setToken = (token) => {
    setAuthToken(token)
    if(token){
      localStorage.setItem('token', JSON.stringify(token))
    }else{
      localStorage.removeItem('token')
    }
  }
  
  useEffect(()=>{
    if(authToken){
      /* console.log('Token: ',authToken) */
      const decoded = jwt_decode(authToken)
      /*   */
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        apellido: decoded.apellido,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
        estado: decoded.estado
      })
    }
    
  },[authToken])

  



  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{authToken, setAuthToken, setToken}}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PrivateLayout />}>
                <Route path="" element={<Index />} />
                <Route path="usuarios" element={<UsuarioIndex />} />
                <Route path="/usuarios/editar/:_id" element={<EditarUsuario />} />
                <Route path="proyectos" element={<IndexProyecto/>} />
                <Route path="/proyectos/:_id" element={<Proyecto />} />
                <Route path="/proyectos/crear/" element={<ProyectoNuevo />} />
                <Route path="/proyectos/editar/:_id" element={<EditarProyecto/>} />

                <Route path="category1" element={<IndexCategory1 />} />
                <Route path="category1/page1" element={<Category1 />} />
              </Route>
              <Route path="/auth" element={<AuthLayout />}>
                <Route path="register" element={<Registro />} />
                <Route path="login" element={<Login />} />
              </Route>
              <Route path="/inicio" element={<PaginaInicial />}  />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
