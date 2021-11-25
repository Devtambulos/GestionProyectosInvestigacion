 import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuarios/queries';
//import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_Rol, Enum_EstadoUsuario } from 'utils/enums';
import 'styles/tabla.css';

const UsuarioIndex = () => {
  const { data, error, loading } = useQuery(GET_USUARIOS);

  useEffect(() => {
    console.log('data servidor', data);
  }, [data]);

  return (
    <div className="p-10 items-center font-serif text-black">
      <div className="m-6 w-full justify-center text-center font-serif	font-black text-black">
        Datos Usuarios
      </div>
      <table className='tabla '>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Identificación</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.Usuarios.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u.nombre}</td>
                  <td>{u.apellido}</td>
                  <td>{u.correo}</td>
                  <td>{u.identificacion}</td>
                  <td>{Enum_Rol[u.rol]}</td>
                  <td>{Enum_EstadoUsuario[u.estado]}</td>
                  <td>
                    <Link to={`/usuarios/editar/${u._id}`}>
                      <i className='fas fa-pen text-green-400 hover:text-green-600 cursor-pointer
                       p-2 hover:bg-green-100 rounded-full' />
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsuarioIndex;
