import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USUARIOS } from "graphql/usuarios/queries";
import { GET_INSCRIPCIONES } from "graphql/inscripcion/queries";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "styles/tabla.css";
import PrivateRoute from "components/PrivateRoute";
import NavBar from "components/Navbar";
import ReactLoading from "react-loading";

const Inscripcio = (nombre) => {

  const { data, error, loading } = useQuery(GET_INSCRIPCIONES);
  const { dataU } = useQuery(GET_USUARIOS);

  useEffect(() => {
    if (error) {
      toast.error("Error consultando los usuarios inscritos");
    }
  }, [error]);

  //para ver la ruedita mientras carga la info de usuarios
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <ReactLoading
          type="spin"
          color="rgb(67, 56, 202)"
          height={"20%"}
          width={"20%"}
        />
      </div>
    );
  }

  return (
    <PrivateRoute roleList={["LIDER", "ADMINISTRADOR"]}>
      <div className="items-center font-serif text-gray-800">
        <NavBar titulo={`Usuarios Inscritos a ${nombre}`} />
        <div className="p-8 items-center font-serif text-gray-800">
          <table className="tabla ">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Estado</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.Inscripcinoes.map((u) => {
                  const idEstudiante = u.estudiante;
                  const usuario = dataU.Usuarios.includes(idEstudiante);
                  return (
                    <tr key={usuario._id}>
                      <td>{usuario.nombre}</td>
                      <td>{usuario.apellido}</td>
                      <td>{idEstudiante}</td>
                      <td>
                        <Link to={`/usuarios/editar/${u._id}`}>
                          <i
                            className="fas fa-pen text-green-400 hover:text-green-600 cursor-pointer
                        p-2 hover:bg-green-100 rounded-full"
                          />
                        </Link>
                      </td>
                    </tr>
                  )
                }
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Inscripcio;
