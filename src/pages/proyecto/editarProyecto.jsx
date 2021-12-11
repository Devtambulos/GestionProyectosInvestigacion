import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTO } from 'graphql/proyectos/queries';
import {EDITAR_PROYECTO} from 'graphql/proyectos/mutations';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import DropDown from 'components/Dropdown';
import { Enum_FaseProyecto } from 'utils/enums';
import { Enum_EstadoProyecto } from 'utils/enums';
import { parse } from 'postcss';

const EditarProyecto = () => {
  const { form, formData, updateFormData } = useFormData();
  const { _id } = useParams();

  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_PROYECTO, {
    variables: { _id },
  });

  console.log(queryData);
  
  const [editarProyecto, {
    data: mutationData,
    loading: mutationLoading,
    error: mutationError }] =
    useMutation(EDITAR_PROYECTO);
  
    const submitForm = (e) => {
      e.preventDefault();
      console.log('fd',_id, formData);
      const presupuesto = parseFloat(formData.presupuesto);
      delete formData.presupuesto;

      editarProyecto({
        variables: { _id, ...formData, presupuesto },
      });
    };

    useEffect(() => {
      if (mutationData) {
        toast.success('Proyecto modificado correctamente');
      }
    }, [mutationData]);
  
    useEffect(() => {
      if (mutationError) {
        toast.error('Error modificando el Proyecto');
      }
  
      if (queryError) {
        toast.error('Error consultando el Proyecto');
      }
    }, [queryError, mutationError]);
  
    if (queryLoading) return <div>Cargando....</div>;
  
    return (
      <div className='flew flex-col w-full h-full items-center justify-center p-10'>
          editar proyectos
        <Link to={`/proyectos/${queryData.Proyecto._id}`}>
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
            label='Nombre del Proyecto:'
            type='text'
            name='nombre'
            defaultValue={queryData.Proyecto.nombre}
            required={true}
          />
          
          <Input
            label='Presupuesto del proyecto:'
            type='number'
            name='presupuesto'
            defaultValue={queryData.Proyecto.presupuesto}
            required={true}
          />
                    
          <Input
            label='fecha inicio:'
            type='date'
            name='fechaInicio'
            defaultValue={queryData.Proyecto.fechaInicio}
            required={false}
          />
          <Input
            label='fecha fin:'
            type='date'
            name='fechaFin'
            defaultValue={queryData.Proyecto.fechaFin}
            required={false}
          />
          <DropDown
            label='Fase del proyecto:'
            name='fase'
            defaultValue={queryData.Proyecto.fase}
            required={true}
            options={Enum_FaseProyecto}
          />
            <DropDown
            label='Estado del proyecto:'
            name='estado'
            defaultValue={queryData.Proyecto.estado}
            required={true}
            options={Enum_EstadoProyecto}
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
  
  export default EditarProyecto;
  
  