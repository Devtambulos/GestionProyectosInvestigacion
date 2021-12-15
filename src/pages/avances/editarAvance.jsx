// import React, { useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import useFormData from 'hooks/useFormData';
// import { GET_AVANCES } from 'graphql/avances/queries';
// import { useQuery, useMutation } from '@apollo/client';
// import { EDITAR_AVANCE } from 'graphql/avances/mutations';
// import { toast } from 'react-toastify';
// import Input from 'components/Input';
// import ButtonLoading from 'components/ButtonLoading';


// const EditarAvance = () => {
//   const { form, formData, updateFormData } = useFormData();
//   const { _id } = useParams();

//   const {
//     data: queryData,
//     error: queryError,
//     loading: queryLoading,
//   } = useQuery(GET_AVANCES, {
//     variables: { _id },
//   });

//   console.log(queryData);
  
//   const [editarAvance, {
//     data: mutationData,
//     loading: mutationLoading,
//     error: mutationError }] =
//     useMutation(EDITAR_AVANCE);
  
//     const submitForm = (e) => {
//       e.preventDefault();
//       console.log('fd',_id, formData);

//       editarAvance({
//         variables: { _id, ...formData },
//       });
//     };

//     useEffect(() => {
//       if (mutationData) {
//         toast.success('Avance modificado correctamente');
//       }
//     }, [mutationData]);
  
//     useEffect(() => {
//       if (mutationError) {
//         toast.error('Error modificando el Avance');
//       }
  
//       if (queryError) {
//         toast.error('Error consultando el Avance');
//       }
//     }, [queryError, mutationError]);
  
//     if (queryLoading) return <div>Cargando....</div>;
  
//     return (
//       <div className='flew flex-col w-full h-full items-center justify-center p-10'>
//         <Link to={`/proyectos/${queryData.avance.Proyecto._id}`}>
//           <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
//         </Link>
//         <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Avance</h1>
//         <form
//           onSubmit={submitForm}
//           onChange={updateFormData}
//           ref={form}
//           className='flex flex-col items-center justify-center"'
//         >
//           <Input
//             label='Descripción Avance:'
//             type='text'
//             name='descripcion'
//             defaultValue={queryData.avance.descripcion}
//             required={true}
//           />
          
//           <Input
//             label='Observaciones:'
//             type='text'
//             name='observaciones'
//             defaultValue={queryData.avance.observaciones}
//             required={true}
//           />
                    
//           <ButtonLoading
//             disabled={Object.keys(formData).length === 0}
//             loading={mutationLoading}
//             text='Confirmar'
//           />
//         </form>
//       </div>
//     );
//   };
  
//   export default EditarAvance;