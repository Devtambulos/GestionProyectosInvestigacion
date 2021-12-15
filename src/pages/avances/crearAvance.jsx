import ButtonLoading from 'components/ButtonLoading';
import Input from 'components/Input';
import React from 'react';
import { Link } from 'react-router-dom';



const crearAvance = () => {

    return (
        <div className='flex flex-col w-full h-full items-center justify-center p-10'>
            <div className='self-start'>
                <Link to='/proyectos'>
                    <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
                </Link>
            </div>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Crear Avance</h1>
            <form>
                <Input name='proyecto' label='Id del proyecto' required={true} type='text' />
                <Input name='fecha' label='Fecha creación' required={true} type='date' />
                <Input name='descripcion' label='Descripción' required={true} type='text' />
                <Input name='observaciones' label='Observaciones' required={true} type='text' />
                <Input name='creadopor' label='Creado por' required={true} type='text' />
                <ButtonLoading text='Crear Avance' loading={false} />
            </form>
        </div>
    )
}

export default crearAvance
