import React, { useEffect } from "react";
import Input from "../../components/Input";
import DropDown from "../../components/Dropdown";
import { Enum_Rol } from "../../utils/enums";
import ButtonLoading from "components/ButtonLoading";
import useFormData from "hooks/useFormData";
import { Link } from "react-router-dom";
import { REGISTRO } from "graphql/auth/mutation";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router";
import { useAuth } from "context/authContext";
import { toast } from 'react-toastify';

const Registro = () => {
  const { setToken } = useAuth();

  const navigate = useNavigate();
  const { form, formData, updateFormData } = useFormData();

  const [
    registro,
    { data: dataMutation, loading: loadingMutation, error: errorMutation },
  ] = useMutation(REGISTRO);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("datos back", formData);
    registro({
      variables: formData,
    });
  };

  useEffect(() => {
    console.log("Data mutation", dataMutation);
    if (dataMutation) {
      if (dataMutation.registro.token) {
        setToken(dataMutation.registro.token);
        navigate("/");
      }
    }
  }, [dataMutation, navigate, setToken]);

  useEffect(()=>{
    console.log("0 error", errorMutation)
    if(errorMutation || dataMutation){
      if(errorMutation || dataMutation.registro.error){
        toast.error('Error: Ingresaste un dato invalido');
        toast.info('Prueba ingresando otro correo y/o tu documento de identidad correctamente')
        console.log("1 error", errorMutation)
      }
    }
  },[errorMutation, dataMutation])

  return (
    <div className="flex  flex-col h-full w-full p-14 items-center justify-center">
      <div className="justify-self-start self-start">
        <Link to='/inicio'>
          <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
        </Link>
      </div>
      <h1 className="text-3xl font-bold my-4">Regístrate</h1>
      <form
        className="flex flex-col"
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
      >
        <div className="grid grid-cols-2 gap-5">
          <Input label="Nombre:" name="nombre" type="text" required />
          <Input label="Apellido:" name="apellido" type="text" required />
          <Input
            label="Documento:"
            name="identificacion"
            type="text"
            required
          />
          <DropDown
            label="Rol deseado:"
            name="rol"
            required={true}
            options={Enum_Rol}
          />
          <Input label="Correo:" name="correo" type="email" required />
          <Input label="Contraseña:" name="password" type="password" required />
        </div>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={loadingMutation}
          text="Registrarme"
        />
      </form>
      <span>¿Ya tienes una cuenta?</span>
      <Link to="/auth/login">
        <span className="text-blue-700">Inicia sesión</span>
      </Link>
    </div>
  );
};

export default Registro;
