import React, { useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
import Index from 'pages/Index';
import Page2 from 'pages/Page2';
import IndexCategory1 from 'pages/category1/Index';
import Category1 from 'pages/category1/CategoryPage1';
import 'styles/globals.css';
import Usuario from 'pages/usuario/Index';
import Registro from 'pages/auth/registro';
import AuthLayout from 'layouts/AuthLayout';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

// const httpLink = createHttpLink({
//   uri: 'https://gestion-proyectos-dev.herokuapp.com/graphql',
// });
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [userData, setUserData] = useState({});

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrivateLayout />}>
              <Route path='' element={<Index />} />
              <Route path='usuario' element={<Usuario />} />
              <Route path='page2' element={<Page2 />} />
              <Route path='category1' element={<IndexCategory1 />} />
              <Route path='category1/page1' element={<Category1 />} />
            </Route>
             <Route path='/auth' element={<AuthLayout />}>
                <Route path='registro' element={<Registro />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
