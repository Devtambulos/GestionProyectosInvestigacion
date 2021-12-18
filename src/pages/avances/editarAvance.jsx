import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { GET_AVANCE } from 'graphql/avances/queries';
import { GET_AVANCES } from 'graphql/avances/queries';
import { useQuery, useMutation } from '@apollo/client';
import { EDITAR_AVANCE } from 'graphql/avances/mutations';
import { toast } from 'react-toastify';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import { useUser } from 'context/userContext';
import PrivateComponent from 'components/PrivateComponent';


const EditarAvance = () => {
  const { userData } = useUser()
  const { form, formData, updateFormData } = useFormData();
  const { _id } = useParams();

  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_AVANCE, {
    variables: { _id },
  });

  const [editarAvance, {
    data: mutationData,
    loading: mutationLoading,
    error: mutationError }] =
    useMutation(EDITAR_AVANCE, { refetchQueries: [GET_AVANCES] });

  const submitForm = (e) => {
    e.preventDefault();
    editarAvance({
      variables: { _id, ...formData },
    });
    if (mutationData) {
      toast.success('Avance modificado correctamente');
    };
    window.location.href = `/proyectos/${queryData.avance.proyecto._id}`
  };

  useEffect(() => {
    if (mutationData) {
      toast.success('Avance modificado correctamente');
    }
    if (mutationError) {
      toast.error('Error modificando el Avance');
    }
    if (queryError) {
      toast.error('Error consultando el Avance');
    }
  }, [mutationData, queryError, mutationError]);


  if (queryLoading) return <div>Cargando....</div>;

  return (
    <div className='flew flex-col w-full h-full items-center justify-center p-10'>
      <Link to={`/proyectos/${queryData.avance.proyecto._id}`}>
        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
      </Link>

      <form onSubmit={submitForm} onChange={updateFormData} ref={form}
        className='flex flex-col items-center justify-center'>
        <PrivateComponent roleList={["ESTUDIANTE"]}>
          <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Descripción</h1>

          <textarea label='Descripción Avance:' type='text' name='descripcion' className="input w-full "
            defaultValue={queryData.avance.descripcion}
          />
        </PrivateComponent>
        <PrivateComponent roleList={["LIDER"]}>
          <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Observación</h1>

          <textarea label='Observaciones:' type='text' name='observaciones' className="input w-full "
            defaultValue={queryData.avance.observaciones}
          />
        </PrivateComponent>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={mutationLoading}
          text='Confirmar'
        />
      </form>
    </div >
  );
};


export default EditarAvance;