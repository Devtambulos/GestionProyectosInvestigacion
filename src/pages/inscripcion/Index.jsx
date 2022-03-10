import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USUARIOS } from "graphql/usuarios/queries";
import { GET_INSCRIPCIONES } from "graphql/inscripcion/queries";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "styles/tabla.css";
import PrivateRoute from "components/PrivateRoute";
import ReactLoading from "react-loading";
import { useUser } from 'context/userContext';


const Inscripcio = (props) => {

  const { userData, setUserData } = useUser();


  const { data, error, loading } = useQuery(GET_INSCRIPCIONES);
  
  const { data: dataUser, error: errorUser, loading: load } = useQuery(GET_USUARIOS);
  console.log("usuarios",dataUser);
  
  useEffect(() => {
    if (error) {
      toast.error("Error consultando los usuarios inscritos");
    }
  }, [error]);

  useEffect(() => {
    if (errorUser) {
      toast.error("Error consultando los usuarios");
    }
  }, [errorUser]);

  // para ver la ruedita mientras carga la info de usuarios
  if (load) {
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
    <PrivateRoute roleList={["LIDER", "ADMINISTRADOR","ESTUDIANTE"]}>
      <div className="items-center font-serif text-gray-800">
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
                data.Inscripciones.map((u) => {
                  let idP = props.id;
                  const idEstudiante = u.estudiante._id;  
                  const idProyecto = u.proyecto._id;
                  const nombre = dataUser.Usuarios.filter(e => e._id === idEstudiante)
                  console.log("filter",nombre);
                  if (idProyecto === idP){
                    return (
                      <tr key={nombre[0]._id} className="text-center">
                        <td>{nombre[0].nombre}</td>
                        <td>{nombre[0].apellido}</td>
                        <td>{u.estado}</td>
                        <td>
                          <Link to={`/proyectos/inscripcion/${u._id}`}>
                            <i
                              className="fas fa-pen text-green-400 hover:text-green-600 cursor-pointer
                          p-2 hover:bg-green-100 rounded-full"
                            />
                          </Link>
                        </td>
                      </tr>
                    )
                  }
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

