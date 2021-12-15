import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import ButtonLoading from 'components/ButtonLoading';
import Input from 'components/Input';
import { EDITAR_PERFIL } from 'graphql/usuarios/mutations';
import useFormData from 'hooks/useFormData';
import { uploadFormData } from 'utils/uploadFormData';
import { useUser } from 'context/userContext';
import { GET_USUARIO } from 'graphql/usuarios/queries';
import { toast } from 'react-toastify'
import NavBar from 'components/Navbar';
import { useParams, Link } from 'react-router-dom';

const Perfil = () => {
  const [editFoto, setEditFoto] = useState(false);
  const { form, formData, updateFormData } = useFormData(null);
  const { userData, setUserData } = useUser();
  const { _id } = useParams();

  const {
    data: queryData,
    loading: queryLoading,
    refetch,
  } = useQuery(GET_USUARIO, {
    variables: {
      _id: userData._id,
    },
  });
  
  console.log("queryData perfil", queryData);

  const [editarPerfil, { 
    data: dataMutation, 
    error: errorMutation,
    loading: loadingMutation }] =
    useMutation(EDITAR_PERFIL);



  useEffect(() => {
    
    if (dataMutation) {  
      setUserData({ ...userData, foto: dataMutation.editarPerfil.foto });
      toast.success('Perfil modificado correctamente');
      refetch();
      console.log("Data M", dataMutation);
      console.log("Data ID", dataMutation._id);
      console.log("userData", userData);
      console.log("formData", formData);
    }
  }, [dataMutation]);
  console.log("dataMutation perfil", dataMutation);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log('fd perfil',_id, formData);
    const formUploaded = await uploadFormData(formData);
    editarPerfil({
      variables: {
        _id: userData._id,
        campos: formUploaded,
      },
    });
  };

  if (queryLoading) return <div>Loading...</div>;


  return (
    <div className='items-center justify-center w-full'>
      <NavBar titulo="Perfil del usuario"/>
      <div className='p-10 flex flex-col items-center justify-center w-full'>
      <form ref={form} 
      onChange={updateFormData} 
      onSubmit={submitForm}>
        <Input
          defaultValue={queryData.Usuario.nombre}
          label='Nombre'
          name='nombre'
          type='text'
          required={true}
        />
        <Input
         defaultValue={queryData.Usuario.apellido}
          label='Apellido'
          name='apellido'
          type='text'
          required={true}
        />
        <Input
         defaultValue={queryData.Usuario.identificacion}
          label='Identificación'
          name='identificacion'
          type='text'
          required={true}  
        />
        {queryData.Usuario.foto && !editFoto ? (
          <div className='flex flex-col items-center'>
            <img
              className='h-32'
              src={queryData.Usuario.foto}
              alt='Foto Usuario'
            />
            <button
              type='button'
              onClick={() => setEditFoto(true)}
              className='bg-indigo-300 p-1 my-2 rounded-md text-white'
            >
              Cambiar imagen
            </button>
          </div>
        ) : (
          <div>
            <Input label='Foto' name='foto' type='file' required />
            <button
              type='button'
              onClick={() => setEditFoto(false)}
              className='bg-indigo-300 p-1 my-2 rounded-md text-white'
            >
              Cancelar
            </button>
          </div>
        )}
          <ButtonLoading
          text='Confirmar'
          loading={loadingMutation}
          disabled={false}
        />
          
       </form>
     </div>
  </div>
  );
};

export default Perfil;