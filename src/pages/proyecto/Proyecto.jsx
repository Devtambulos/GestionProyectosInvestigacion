import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GET_PROYECTO } from 'graphql/proyectos/queries';
import { useQuery} from '@apollo/client';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import { GET_OBJETIVOS } from "graphql/objetivos/queries";

const Proyecto = () => {
  const {_id} = useParams();
  console.log("sssssss",_id);
  // QUERY PROYECTO
  const {
     data: dataProyecto,
     error: errorProyecto,
     loading: loadingProyecto } = useQuery(GET_PROYECTO, {
    variables: { _id },
  });

  console.log("Datos de un proyecto:", dataProyecto);

  // QUERY OBJETIVOS

  const {
    data: dataObjetivos,
    error: errorObjetivos,
    loading: loadingObjetivos } = useQuery(GET_OBJETIVOS, {
   variables: { _id },
 });

 
 console.log("Datos de Objetivos:", dataObjetivos);

  useEffect(() => {
    if (errorProyecto) {
      toast.error('Error consultando los Proyectos');
    }
    if (errorObjetivos){
      toast.error('Error consultando los Objetivos');

    }
  }, [errorProyecto, errorObjetivos]);

  if (loadingProyecto || loadingObjetivos) return <div className="flex justify-center items-center w-full h-full"><ReactLoading type='spin'color='blue' height={'20%'} width={'20%'} /> </div>;
  
  
  return (
    <div className='flew flex-col w-full h-full items-center justify-center p-10'>
      <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Proyecto {dataProyecto.Proyecto.nombre}</h1>
      <div className="flex justify-between p-0 my-0">
    {/* DATOS DEL PROYECTO */}
      PROYECTO ID: {dataProyecto.Proyecto._id}   
      <Link to={`/proyectos/editar/${dataProyecto.Proyecto._id}`} >
                        <i className='fas fa-pen text-green-400 hover:text-green-600 cursor-pointer
                        p-1 hover:bg-green-100 rounded-full' />
      </Link>
      </div>
      LIDER: {dataProyecto.Proyecto.lider.nombre}
      <br />
      PRESUPUESTO: {dataProyecto.Proyecto.presupuesto}
      <br />
      INICIO: {dataProyecto.Proyecto.fechaInicio}
      <br />
      FIN: {dataProyecto.Proyecto.fechaFin}
      <br />
      FASE: {dataProyecto.Proyecto.fase}
      <br />
      ESTADO: {dataProyecto.Proyecto.estado }
    {/* OBJETIVOS DEL PROYECTO*/}
    <div>
    <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Objetivos</h1>
    {/* <PrivateRoute roleList={["LIDER","ADMINISTRADOR",]}>
      <div className="p-8 items-center font-serif text-gray-800">
        <div className="p-2 m-4 text-3xl font-serif text-gray-800 font-bold text-center w-full justify-center ">
          Objetivos
        </div>
        <table className='tabla '>
          <thead>
            <tr>
              <th>ID</th>
              <th>DESCRIPCION</th>
              <th>TIPO</th>
              <th>EDITAR</th>
            </tr>
          </thead>
          <tbody>
            {dataObjetivos &&
              dataObjetivos.Usuarios.map((u) => {
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
    </PrivateRoute> */}
    </div>
    {/* AVANCES DEL PROYECTO */}
    <div>
    <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Avances</h1>
    </div>
    {/* INSCRIOCIONES DEL PROYECTO */}
    <div>
    <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Inscripciones</h1>
    </div>

    </div>

  );
};

export default Proyecto;