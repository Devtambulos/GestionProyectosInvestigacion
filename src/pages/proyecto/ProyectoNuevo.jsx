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
    
    const { data,
        error,
        loading } = useQuery(GET_PROYECTOS);
    
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
    
        crearProyecto({
            variables: {...formData},
        });
        };
        
        useEffect(() => {
          console.log("data servidor uno", data);
        }, [data]);
     
        useEffect(() => {
          if (error) {
            toast.error("Error consultando los proyectos");
          }
        }, [error]);
      
        //para ver la ruedita mientras carga la info de usuarios
        if (loading)
          return (
            <div className="flex justify-center items-center w-full h-full">
              <ReactLoading type="spin" color="blue" height={"20%"} width={"20%"} />{" "}
            </div>
          );
    



    return(<>
 <div className='w-full h-full items-center justify-center'>
        <NavBar titulo="Editar Proyectos"/>
        {/* <Link to={`/proyectos/${queryData.Proyecto._id}`}>
          <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
        </Link> */}
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
            // defaultValue={queryData.Proyecto.nombre}
            required={true}
          />
          
          <Input
            label='Presupuesto del proyecto:'
            type='number'
            name='presupuesto'
            // defaultValue={queryData.Proyecto.presupuesto}
            required={true}
          />
                    
          <Input
            label='fecha inicio:'
            type='date'
            name='fechaInicio'
            // defaultValue={queryData.Proyecto.fechaInicio}
            required={false}
          />
          <Input
            label='fecha fin:'
            type='date'
            name='fechaFin'
            // defaultValue={queryData.Proyecto.fechaFin}
            required={false}
          />
          <DropDown
            label='Fase del proyecto:'
            name='fase'
            // defaultValue={queryData.Proyecto.fase}
            required={true}
            options={Enum_FaseProyecto}
          />
            <DropDown
            label='Estado del proyecto:'
            name='estado'
            // defaultValue={queryData.Proyecto.estado}
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
      </div>    </>)
}

export default ProyectoNuevo;