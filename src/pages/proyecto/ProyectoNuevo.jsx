import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Input from 'components/Input';
import { GET_PROYECTOS } from "graphql/proyectos/queries";
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import DropDown from 'components/Dropdown';
import { Enum_FaseProyecto } from 'utils/enums';
import { Enum_EstadoProyecto } from 'utils/enums';
import NavBar from 'components/Navbar';
import { useUser } from 'context/userContext';
import ReactLoading from "react-loading";
import { CREAR_PROYECTO } from 'graphql/proyectos/mutations';


const ProyectoNuevo = () => {
    
    const { userData, setUserData } = useUser();
    const { form, formData, updateFormData } = useFormData(null);
    
    const [crearProyecto, {
        data: mutationData,
        loading: mutationLoading,
        error: mutationError
    }] = 
        useMutation(CREAR_PROYECTO);

    const submitForm = (e) => {
        e.preventDefault();
        console.log('fd', formData);
        const presupuesto = parseFloat(formData.presupuesto);
        delete formData.presupuesto;

        crearProyecto({
            variables: {...formData, presupuesto,lider: userData._id},
        });
        window.location.href="/proyectos"

        };
        
        useEffect(() => {
          if(mutationData){
          toast.success('Proyecto creado correctamente');

          console.log("proyecto creado", mutationData);}
        }, [mutationData]);
     
        useEffect(() => {
          if (mutationError) {
            toast.error("Error consultando los proyectos");
          }
        }, [mutationError]);
      
        //para ver la ruedita mientras carga la info de usuarios
        if (mutationLoading)
          return (
            <div className="flex justify-center items-center w-full h-full">
              <ReactLoading type="spin" color="blue" height={"20%"} width={"20%"} />{" "}
            </div>
          );
    



    return(<>
 <div className='w-full items-center justify-center'>
        <NavBar titulo="Crear Proyecto"/>
        <Link
        className='m-2 p-2'
        to={`/proyectos`}>
          <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
        </Link>
        <div className='flew flex-col w-full h-full items-center justify-center p-10'>
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
            required={true}
          />
          
          <Input
            label='Presupuesto del proyecto:'
            type='number'
            name='presupuesto'
            required={true}
          />
                    
          <Input
            label='fecha inicio:'
            type='date'
            name='fechaInicio'
            required={false}
          />
          <Input
            label='fecha fin:'
            type='date'
            name='fechaFin'
            required={false}
          />

          <ButtonLoading
            disabled={Object.keys(formData).length === 0}
            loading={mutationLoading}
            text='Confirmar'
          />
        </form>
      </div>
      </div>    </>)
}

export default ProyectoNuevo;