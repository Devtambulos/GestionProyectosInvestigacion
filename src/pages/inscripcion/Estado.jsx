import React, { useEffect } from "react";
import { useParams,Link } from 'react-router-dom';
import { Enum_EstadoInscripcion } from 'utils/enums';
import useFormData from 'hooks/useFormData';
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/client";
import { toast } from 'react-toastify';
import ButtonLoading from 'components/ButtonLoading';
import DropDown from 'components/Dropdown';
import { APROBAR_INSCRIPCION } from 'graphql/inscripcion/mutations';
import { RECHAZAR_INSCRIPCION } from 'graphql/inscripcion/mutations';

const EstadoInscripcion = () => {
    const navigate = useNavigate();
    const { form, formData, updateFormData } = useFormData();
    const { _id } = useParams();

    const [AprobarEstado,
        { data: dataMutation,
         loading: loadingMutation,
         error: errorMutation },] = 
         useMutation(APROBAR_INSCRIPCION);
    
    const [RechazarEstado,
        { data: dataMutationR,
        loading: loadingMutationR,
        error: errorMutationR },] = 
        useMutation(RECHAZAR_INSCRIPCION);

    const submitForm = (e) => {
        e.preventDefault();
        if(formData.tipo === "ACEPTADO"){
            AprobarEstado({
                variables: { _id: _id },
            });
        }else{
            RechazarEstado({
                variables: { _id: _id },
            });
        }
      };

    useEffect(() => {    
      if (dataMutation) {
        toast.success('Solicitud aceptada correctamente');
        navigate(`/proyectos/${_id}`);
      }
    }, [dataMutation]);

    useEffect(() => {    
        if (dataMutationR) {
          toast.success('Solicitud rechazada correctamente');
          navigate(`/proyectos/${_id}`);
        }
      }, [dataMutationR]);

    return (
        <div className='w-full h-full flex flex-col w-full h-full items-center p-10'>
            <div className='self-start'>
            <Link to={`/proyectos/${_id}`}>
          <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
            </Link>
            </div>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Estado Inscripcion</h1>
            <form  
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                className='flex flex-col items-center justify-center"'
            >
                <DropDown 
                name='tipo'
                label='Estado'
                required={true} 
                options = {Enum_EstadoInscripcion}
                 />
                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={loadingMutation}
                    text='Confirmar'
                />            
          </form>
        </div>
    )
}

export default EstadoInscripcion;