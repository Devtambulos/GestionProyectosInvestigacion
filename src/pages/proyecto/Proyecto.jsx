import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_PROYECTO } from 'graphql/proyectos/queries';
import { useQuery} from '@apollo/client';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';

const Proyecto = () => {
  const {_id} = useParams();
  const { data, error, loading } = useQuery(GET_PROYECTO, {
    variables: { _id },
  });

  console.log("Datos de un proyecto:", data);

  useEffect(() => {
    if (error) {
      toast.error('Error consultando los usuarios');
    }
  }, [error]);

  if (loading) return <div className="flex justify-center items-center w-full h-full"><ReactLoading type='spin'color='blue' height={'20%'} width={'20%'} /> </div>;

  return (
    <div className="px-8 py-8 sm:px-16 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-5">
      PROYECTO ID: {data.Proyecto._id}
      <br/>
      NOMBRE: {data.Proyecto.nombre}
      <br/>
      LIDER: {data.Proyecto.lider.nombre}
    </div>
  );
};

export default Proyecto;