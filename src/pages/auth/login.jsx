import React, { useEffect } from "react";
import useFormData from "hooks/useFormData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from "components/Input";
import ButtonLoading from "components/ButtonLoading";
import { useMutation } from "@apollo/client";
import { LOGIN } from "graphql/auth/mutation";
import { useAuth } from "context/authContext";
import { toast } from 'react-toastify';


const Login = () => {
  const { setToken } = useAuth();

  const navigate = useNavigate();

  const { form, formData, updateFormData } = useFormData();

  const [
    login,
    { data: dataMutation, loading: loadingMutation, error: errorMutation },
  ] = useMutation(LOGIN);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("datosBack", formData);
    login({
      variables: formData,
    });
  };

  useEffect(() => {
    console.log("Data mutation", dataMutation);
    if (dataMutation) {
      if (dataMutation.login.token) {
        setToken(dataMutation.login.token);
        navigate("/");
      }
    }
  }, [dataMutation, navigate, setToken]);


  useEffect(()=>{
    if (dataMutation) {
      if (dataMutation.login.error) {
        toast.error('Error, alguno de los campos que ingresaste es invalido: Correo o contraseña');
      }
    }
  },[dataMutation])

  return (
    <div className="flex flex-col h-full w-full p-14 items-center justify-center">
      <div className="justify-self-start self-start">
        <Link to='/inicio'>
          <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
        </Link>
      </div>
      <h1 className="text-xl font-bold text-gray-900">Iniciar sesión</h1>
      <form
        className="flex flex-col"
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
      >
        <Input name="correo" type="email" label="Correo" required={true} />
        <Input
          name="password"
          type="password"
          label="Contraseña"
          required={true}
        />
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={loadingMutation}
          text="Iniciar Sesión"
        />
      </form>
      <span>¿No tienes una cuenta?</span>
      <Link to="/auth/register">
        <span className="text-blue-700">Regístrate</span>
      </Link>
    </div>
  );
};

export default Login;
