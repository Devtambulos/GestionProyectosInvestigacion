import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { useNavigate } from "react-router";
import { useQuery, useMutation } from "@apollo/client";
import { CREAR_AVANCE } from 'graphql/avances/mutations';
import { toast } from 'react-toastify';
import { GET_AVANCES } from 'graphql/avances/queries';
import ButtonLoading from 'components/ButtonLoading';
import Input from 'components/Input';
import { useUser } from 'context/userContext';

const CrearAvance = () => {
    const navigate = useNavigate();
    const { form, formData, updateFormData } = useFormData();
    const { userData } = useUser()
    const { _id } = useParams();
    const fecha = new Date();

    const [crearAvance,
        { data: dataMutation,
            loading: loadingMutation,
            error: errorMutation }] =
        useMutation(CREAR_AVANCE, { refetchQueries: [GET_AVANCES] })


    const submitForm = (e) => {
        e.preventDefault();
        crearAvance({
            variables: { ...formData, proyecto: _id, creadoPor: userData._id },
        });
        if(dataMutation){
            toast.success('Avance creado correctamente');};
          window.location.href=`/proyectos/${_id}`

    };

    useEffect(() => {
        if (dataMutation) {
            toast.success('Avance creado con éxito');            
        }
        if (errorMutation){
            toast.error('Error modificando el avance');
        }
    }, [dataMutation, errorMutation]);

    return (
        <div className='flex flex-col w-full h-full items-center justify-center p-10'>
            <div className='self-start'>
                <Link to={`/proyectos/${_id}`}>
                    <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
                </Link>
            </div>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Crear Nuevo Avance</h1>
            <form ref={form} onChange={updateFormData} onSubmit={submitForm} className='flex flex-col items-center justify-center'>
                <Input name='fecha' label='Fecha creación' defaultValue={`${fecha.toISOString().split('T')[0]}`} required={true} type='date' />
                <label> Descripción</label>
                <textarea type='text' name='descripcion' required={true} className="input w-full "/>
                <ButtonLoading text='Crear Avance' loading={loadingMutation} disabled={Object.keys(formData).length === 0} />
            </form>
        </div>
    )
}

export default CrearAvance
