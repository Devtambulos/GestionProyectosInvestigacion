import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
//import { Link } from "react-router-dom";
import "styles/tabla.css";
import PrivateRoute from "components/PrivateRoute";
import ReactLoading from "react-loading";
import { GET_PROYECTOS } from "graphql/proyectos/queries";
import { GET_INSCRIPCIONES } from "graphql/inscripcion/queries";
import { CREAR_INSCRIPCION } from 'graphql/inscripcion/mutations';
import Card from "../../components/Card";
import { CardNew, CardStudent } from "../../components/Card";
import PrivateComponent from "../../components/PrivateComponent";
import NavBar from 'components/Navbar';
import { useUser } from 'context/userContext';



const IndexProyecto = () => {
  
  const { userData } = useUser();

  const _id = userData._id;

  const { data, error, loading } = useQuery(GET_PROYECTOS);
  
  const {data: dataI} = useQuery(GET_INSCRIPCIONES);

  const [crearInscripcion, {error: errorC}] = useMutation(CREAR_INSCRIPCION);

  useEffect(() => {
    if (error) {
      toast.error("Error consultando los proyectos");
    }
  }, [error]);

  useEffect(() => {
    if (errorC) {
      toast.error("Error consultando los proyectos");
    }
  }, [errorC]);

  //para ver la ruedita mientras carga la info de usuarios
  if (loading)
    return (
      <div className="flex justify-center items-center w-full h-full">
        <ReactLoading type="spin" color="blue" height={"20%"} width={"20%"} />{" "}
      </div>
    );

  const Comprobar = (proyectoId) => {
    let state = false;
    let project = false;

    dataI.Inscripciones.map((i)=>{
      if(_id === i.estudiante._id){
        state = true;
      }
    });

    dataI.Inscripciones.map((i)=>{
      if(proyectoId === i.proyecto._id){
        project = true;
      }
    });

    if(state && project){
      toast.success("Ya estás inscrito en este proyecto");
    }else{
      crearInscripcion({
        variables: {
          proyecto: proyectoId,
          estudiante: userData._id,
        },
      });
    }
  }    
    

  return (
    <PrivateRoute roleList={["LIDER", "ADMINISTRADOR", "ESTUDIANTE"]}>
      <div className="items-center font-serif text-gray-800">
        <NavBar titulo="Proyectos"/>
        <div className="p-8 px-8 py-8 sm:px-16 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          <PrivateComponent roleList={["ADMINISTRADOR", "LIDER"]}>
            <CardNew />
          </PrivateComponent>
          <PrivateComponent roleList={["ESTUDIANTE"]}>
            {data && data.Proyectos.map((proyecto) => {
              return (
                <Card
                  Key={proyecto._id}
                  nombre={proyecto.nombre}
                  lider={proyecto.lider?proyecto.lider.nombre:""}
                  estado={proyecto.estado}
                  fase={proyecto.fase}
                />
              );
            })}
          </PrivateComponent>
          <PrivateComponent roleList={["LIDER", "ADMINISTRADOR","ESTUDIANTE"]}>
            {data && data.Proyectos.map((proyecto) => {
              return (
                <CardStudent
                  Key={proyecto._id}
                  nombre={proyecto.nombre}
                  lider={proyecto.lider?proyecto.lider.nombre:""}
                  estado={proyecto.estado}
                  fase={proyecto.fase}
                  onClick={() => Comprobar(proyecto._id)}
                />
              );
            })}
          </PrivateComponent>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default IndexProyecto;

