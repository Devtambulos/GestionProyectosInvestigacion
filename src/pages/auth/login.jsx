import React, { useEffect } from "react";
import useFormData from "hooks/useFormData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from "components/Input";
import ButtonLoading from "components/ButtonLoading";
import { useMutation } from "@apollo/client";
import { LOGIN } from "graphql/auth/mutation";
import { useAuth } from "context/authContext";

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

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10">
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
