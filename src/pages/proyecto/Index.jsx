import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'styles/tabla.css';
import PrivateRoute from 'components/PrivateRoute';
import ReactLoading from 'react-loading';
import { GET_PROYECTOS } from 'graphql/proyectos/queries';

const IndexProyecto = () => {
  const { data, error, loading } = useQuery(GET_PROYECTOS);

  useEffect(() => {
    console.log('data servidor', data);
  }, [data]);

  useEffect(() => {
      if (error) {
        toast.error('Error consultando los usuarios');
      }
    }, [error]);

//para ver la ruedita mientras carga la info de usuarios
if (loading) return <div className="flex justify-center items-center w-full h-full"><ReactLoading type='spin'color='blue' height={'20%'} width={'20%'} /> </div>;



  return (
    <PrivateRoute roleList={["LIDER","ADMINISTRADOR",]}>
      <div className="p-8 items-center font-serif text-gray-800">
        <div className="p-2 m-4 text-3xl font-serif text-gray-800 font-bold text-center w-full justify-center ">
          Proyectos
        </div>
        <table className='tabla '>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Presupuesto</th>
              <th>Inicio</th>
              <th>Fin</th>
              <th>Estado</th>
              <th>Fase</th>
              <th>Lider</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.Proyectos.map((u) => {
                return (
                  <tr key={u._id}>
                    <td>{u.nombre}</td>
                    <td>{u.presupuesto}</td>
                    <td>{u.fechaInicio}</td>
                    <td>{u.fechaFin}</td>
                    <td>{u.estado}</td>
                    <td>{u.fase}</td>
                    <td>
                    <div> id: {u.lider._id}</div>
                    <div>{u.lider.nombre}</div>
                    <div>{u.lider.apellido}</div>
                    <div>{u.lider.identificacion}</div>
                    </td>
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
    </PrivateRoute>
  );
};

export default IndexProyecto;
