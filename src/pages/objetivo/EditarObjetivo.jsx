import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { GET_OBJETIVO } from 'graphql/objetivos/queries';
import { useQuery, useMutation } from '@apollo/client';
import { EDITAR_OBJETIVO } from 'graphql/objetivos/mutations';
import { toast } from 'react-toastify';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';



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
  
  const [editarObjetivo, {
    data: mutationData,
    loading: mutationLoading,
    error: mutationError }] =
    useMutation(EDITAR_OBJETIVO);
  
    const submitForm = (e) => {
      e.preventDefault();
      console.log('fd',_id, formData);
      // delete formData.presupuesto;

      editarObjetivo({
        variables: { _id, ...formData},
      });
    };

    useEffect(() => {
      if (mutationData) {
        toast.success('Objetivo modificado correctamente');
      }
    }, [mutationData]);
  
    useEffect(() => {
      if (mutationError) {
        toast.error('Error modificando el Objetivo');
      }
  
      if (queryError) {
        toast.error('Error consultando el Objetivo');
      }
    }, [queryError, mutationError]);
  
    if (queryLoading) return <div>Cargando....</div>;
  

  return (
  <div className='flew flex-col w-full h-full items-center justify-center p-10'>

  <Link to={`/proyectos/${queryData.objetivo.proyecto._id}`}>
  <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
  </Link>
  <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Proyecto</h1>
        <form
          onSubmit={submitForm}
          onChange={updateFormData}
          ref={form}
          className='flex flex-col items-center justify-center"'
        >
          <Input
            label='Descripción del objetivo:'
            type='text'
            name='descripcion'
            defaultValue={queryData.objetivo.descripcion}
            required={true}
          />
          
          <ButtonLoading
            disabled={Object.keys(formData).length === 0}
            loading={mutationLoading}
            text='Confirmar'
          />
        </form>

  </div>
    );
};

export default EditarObjetivos;
