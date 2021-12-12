import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { GET_OBJETIVO } from 'graphql/objetivos/queries';
import { useQuery, useMutation } from '@apollo/client';



const EditarObjetivos = () => {
  const { form, formData, updateFormData } = useFormData();
  const { _id } = useParams();

  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_OBJETIVO, {
    variables: { _id },
  });

  console.log(queryData);
  
  // const [editarProyecto, {
  //   data: mutationData,
  //   loading: mutationLoading,
  //   error: mutationError }] =
  //   useMutation(EDITAR_PROYECTO);
  
  //   const submitForm = (e) => {
  //     e.preventDefault();
  //     console.log('fd',_id, formData);
  //     const presupuesto = parseFloat(formData.presupuesto);
  //     delete formData.presupuesto;

  //     editarProyecto({
  //       variables: { _id, ...formData, presupuesto },
  //     });
  //   };

  //   useEffect(() => {
  //     if (mutationData) {
  //       toast.success('Proyecto modificado correctamente');
  //     }
  //   }, [mutationData]);
  
  //   useEffect(() => {
  //     if (mutationError) {
  //       toast.error('Error modificando el Proyecto');
  //     }
  
  //     if (queryError) {
  //       toast.error('Error consultando el Proyecto');
  //     }
  //   }, [queryError, mutationError]);
  
  //   if (queryLoading) return <div>Cargando....</div>;
  

  return (
  <div>editar Objetivo
  <Link to={`/proyectos/${queryData.objetivo.proyecto._id}`}>
  <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
  </Link>
  </div>
    );
};

export default EditarObjetivos;
