import ButtonLoading from 'components/ButtonLoading';
import Input from 'components/Input';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { CREAR_AVANCE } from 'graphql/avances/mutations';
import { useUser } from 'context/userContext';
import { toast } from 'react-toastify';
import { GET_AVANCES } from 'graphql/avances/queries';

const CrearAvance = () => {

    const { userData } = useUser()
    const { form, formData, updateFormData } = useFormData();
    const { _id } = useParams();
    const fecha = new Date();

    const [crearAvance, { loading }] = useMutation(CREAR_AVANCE, {refetchQueries: [GET_AVANCES]})

   
    const submitForm = (e) => {
        e.prevenDefaul();
    }

    crearAvance({
        variables: { ...formData }
    }).then(()=>{
        toast.success("Avance creado con éxito");
    }).catch(()=>{
        toast.error("Error creando el avance");
    });
    
    return (
        <div className='flex flex-col w-full h-full items-center justify-center p-10'>
            <div className='self-start'>
                <Link to={`/proyectos/${_id}`}>
                    <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
                </Link>
            </div>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Crear Nuevo Avance</h1>
            <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
                <Input name='proyecto' label='Id del proyecto' defaultValue={`${_id}`} required={true} type='text' />
                <Input name='fecha' label='Fecha creación' defaultValue={`${fecha.toISOString().split('T')[0]}`} required={true} type='date' />
                <Input name='descripcion' label='Descripción' required={true} type='text' />
                <Input name='creadopor' label='Creado por' defaultValue={`${userData._id}`} required={true} type='text' />
                <ButtonLoading text='Crear Avance' loading={loading} disabled={Object.keys(formData).length === 0} />
            </form>
        </div>
    )
}

export default CrearAvance
