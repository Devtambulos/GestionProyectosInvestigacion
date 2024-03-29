import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { GET_PROYECTO } from 'graphql/proyectos/queries';
import { useQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { Tooltip } from "@material-ui/core";
import ReactLoading from 'react-loading';
import { GET_OBJETIVOS } from "graphql/objetivos/queries";
import { GET_AVANCES } from "graphql/avances/queries";
import { Enum_TipoObjetivo } from "../../utils/enums"
import PrivateComponent from "components/PrivateComponent";
import { useUser } from 'context/userContext';
import Inscripcio from "pages/inscripcion/Index";


const Proyecto = () => {
  const { userData, setUserData } = useUser();
  console.log(userData);
  const { _id } = useParams();
  // QUERY PROYECTO
  const {
    data: dataProyecto,
    error: errorProyecto,
    loading: loadingProyecto,
  } = useQuery(GET_PROYECTO, {
    variables: { _id },
  });

  // console.log("Datos de un proyecto:", dataProyecto);

  // QUERY OBJETIVOS

  const {
    data: dataObjetivos,
    error: errorObjetivos,
    loading: loadingObjetivos,
    } = useQuery(GET_OBJETIVOS, {
      variables: { _id },
      // pollInterval: 50000,
    });

  // QUERY AVANCES

  const {
    data: dataAvances,
    error: errorAvances,
    loading: loadingAvances } = useQuery(GET_AVANCES, {
      variables: { _id }
    });

    console.log("proyecto", dataProyecto)

  //  console.log("Datos de Objetivos:", dataObjetivos);

  useEffect(() => {
    if (errorProyecto) {
      toast.error('Error consultando los Proyectos');
    }
    if (errorObjetivos) {
      toast.error('Error consultando los Objetivos');
    }
    if (errorAvances) {
      toast.error('Error consultando los Avances');
    }
  }, [errorProyecto, errorObjetivos, errorAvances]);

  if (loadingProyecto || loadingObjetivos || loadingAvances) return <div className="flex justify-center items-center w-full h-full"><ReactLoading type='spin' color='blue' height={'20%'} width={'20%'} /> </div>;


  return (
    <div className='flew flex-col w-full h-full items-center justify-center p-10'>
      <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Proyecto {dataProyecto.Proyecto.nombre}</h1>
      <Link
        className='m-2 p-2'
        to={`/proyectos`}>
        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
      </Link>
      <div className="flex justify-between p-0 my-0">
        {/* DATOS DEL PROYECTO */}
        PROYECTO ID: {dataProyecto.Proyecto._id}
        <div className="flex pl">
          <Link
          hidden = {userData.rol === "LIDER"?false:userData.rol === "ADMINISTRADOR"?false:true}                      
          to={`/proyectos/editar/${dataProyecto.Proyecto._id}`} >
            <i className='fas fa-pen text-green-400 hover:text-green-600 cursor-pointer
                        p-1 px-2 hover:bg-green-100 rounded-full' />
          </Link>

        </div>
      </div>


      LIDER: {dataProyecto.Proyecto.lider ? dataProyecto.Proyecto.lider.nombre + " " + dataProyecto.Proyecto.lider.apellido : ""}
      <br />
      PRESUPUESTO: {dataProyecto.Proyecto.presupuesto}
      <br />
      INICIO: {dataProyecto.Proyecto.fechaInicio}
      <br />
      FIN: {dataProyecto.Proyecto.fechaFin}
      <br />
      FASE: {dataProyecto.Proyecto.fase}
      <br />
      ESTADO: {dataProyecto.Proyecto.estado}
      {/* OBJETIVOS DEL PROYECTO*/}
      <div>
        <div className="p-8 items-center font-serif text-gray-800">
          <div className='p-2 m-4 text-3xl font-serif text-gray-800 font-bold text-center flex flex-col w-full'>            Objetivos
            <div className="my-2 self-end">
              <Link 
              hidden = {userData.rol === "LIDER"?false:true}              
              to={`/proyectos/${dataProyecto.Proyecto._id}/objetivo`}>
                <i className='fas fa-plus-circle text-purple-700 hover:text-green-600 cursor-pointer
                        p-1 px-2 hover:bg-green-100 rounded-full' />
              </Link>
            </div>
          </div>
          <table className='tabla '>
            <thead>
              <tr>
                <th>DESCRIPCION</th>
                <th>TIPO</th>
                <th
                hidden = {userData.rol === "LIDER"?false:true}
                className="w-10">EDITAR</th>
              </tr>
            </thead>
            <tbody>
              {dataObjetivos &&
                dataObjetivos.filtrarObjetivo.map((u) => {

                  return (
                    <tr key={u._id}>
                      <td className="text-center">
                        {u.descripcion}</td>
                      <td className="text-center">
                        {Enum_TipoObjetivo[u.tipo]}</td>
                      <td className="flex items-center justify-center">
                        <Link 
                          hidden = {userData.rol === "LIDER"?false:true}
                          to={`/proyectos/editar/objetivo${u._id}`}>
                          <i className='fas fa-pen text-green-400 hover:text-green-600 cursor-pointer
                        p-1 px-2 hover:bg-green-100 rounded-full' />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {/* AVANCES DEL PROYECTO */}
      <div className="p-10 flex flex-col">
        <div className='p-2 m-4 text-3xl font-serif text-gray-800 font-bold text-center flex flex-col w-full'>
          Avances
          <PrivateComponent roleList={["ESTUDIANTE", "ADMINISTRADOR"]}>
            <Tooltip title="Crear Avance" arrow>
              <div className="my-2 self-end">
                <Link
                to={`/proyectos/${dataProyecto.Proyecto._id}/avance`}>
                  <i className='fas fa-plus-circle text-purple-700 hover:text-green-600 cursor-pointer
                        p-1 px-2 hover:bg-green-100 rounded-full' />
                </Link>
              </div>
            </Tooltip>
          </PrivateComponent>
        </div>
        {dataAvances.filtrarAvance.length === 0 ? (<span className=" text-center ">No se tienen avances en este proyecto</span>
        ) : (
          <table className='tabla '>
            <thead>
              <tr>
                <th>FECHA</th>
                <th>DESCRIPCIÓN</th>
                <th>OBSERVACIONES</th>
                <th className="w-10">EDITAR</th>
              </tr>
            </thead>
            <tbody>
              {dataAvances &&
                dataAvances.filtrarAvance.map((a) => {

                  return (
                    <tr key={a._id}>
                      <td className="text-center">
                        {a.fecha}</td>
                      <td className="text-center">
                        {a.descripcion}
                      </td>
                      <td className="text-center">
                        {a.observaciones}</td>
                      <td className="flex items-center justify-center">
                        <Tooltip title="Editar Avance" arrow>
                          <Link
                            to={`/proyectos/editar/avance${a._id}`}>
                            <i className='fas fa-pen text-green-400 hover:text-green-600 cursor-pointer
                        p-1 px-2 hover:bg-green-100 rounded-full' />
                          </Link>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
      {/* INSCRIOCIONES DEL PROYECTO */}
      {/* {userData.rol === "ESTUDIANTE"?null:<div> */}
      <PrivateComponent roleList={["LIDER", "ADMINISTRADOR"]}>

        <h1 className='p-2 m-4 text-3xl font-serif text-gray-800 font-bold text-center w-full justify-center'>
          Inscripciones
        </h1>
        <Inscripcio id={_id}/>
      </PrivateComponent>
      {/* </div>} */}
      
    </div>

  );
};

export default Proyecto;