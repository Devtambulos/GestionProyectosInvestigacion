import React, { useEffect } from "react";
import { useParams,Link } from 'react-router-dom';
import { Enum_TipoObjetivo } from 'utils/enums';
import useFormData from 'hooks/useFormData';
import { useNavigate } from "react-router";
import { useQuery, useMutation } from "@apollo/client";
import { CREAR_OBJETIVO } from 'graphql/objetivos/mutations';
import { toast } from 'react-toastify';
import { GET_OBJETIVOS } from "graphql/objetivos/queries";
import ButtonLoading from 'components/ButtonLoading';
import DropDown from 'components/Dropdown';
import Input from 'components/Input';

const CrearObjetivo = () => {
    const navigate = useNavigate();
    const { form, formData, updateFormData } = useFormData();
    const { _id } = useParams();

    console.log(_id);
    
    const [crearObjetivo,
        { data: dataMutation,
         loading: loadingMutation,
         error: errorMutation },] = 
         useMutation(CREAR_OBJETIVO);

    const submitForm = (e) => {
        e.preventDefault();
        console.log('fd',_id, formData);  
        crearObjetivo({
          variables: { ...formData, proyecto:_id },
        });
        if(dataMutation){
        toast.success('Objetivo creado correctamente');};
        window.location.href=`/proyectos/${_id}`
      };
      

    useEffect(() => {
      if(dataMutation){
        toast.success('Objetivo creado correctamente');};
        console.log("Data mutation", dataMutation);
    
       
    }, [dataMutation]);

    return (
        <div className='flex flex-col w-full h-full items-center justify-center p-10'>
            <div className='self-start'>
            <Link to={`/proyectos/${_id}`}>
          <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
            </Link>
            </div>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Crear Objetivo</h1>
            <form  
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                className='flex flex-col items-center justify-center"'
            >
                <DropDown 
                name='tipo'
                label='Tipo de Objetivo'
                required={true} 
                options = {Enum_TipoObjetivo}
                 />
                <Input name='descripcion' label='Descripción' required={true}  type = 'text'/>
                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={loadingMutation}
                    text='Confirmar'
                />            
          </form>
        </div>
    )
}

export default CrearObjetivo
