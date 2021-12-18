import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
//import { Link } from "react-router-dom";
import "styles/tabla.css";
import PrivateRoute from "components/PrivateRoute";
import ReactLoading from "react-loading";
import { GET_PROYECTOS } from "graphql/proyectos/queries";
import Card from "../../components/Card";
import { CardNew } from "../../components/Card";
import PrivateComponent from "../../components/PrivateComponent";
import NavBar from 'components/Navbar';

const IndexProyecto = () => {
  const { data, error, loading } = useQuery(GET_PROYECTOS);

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

    
  return (
    <PrivateRoute roleList={["LIDER", "ADMINISTRADOR", "ESTUDIANTE"]}>
      <div className="items-center font-serif text-gray-800">
        <NavBar titulo="Proyectos"/>
        <div className="p-8 px-8 py-8 sm:px-16 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          <PrivateComponent roleList={["ADMINISTRADOR", "LIDER"]}>
            <CardNew />
          </PrivateComponent>
          {data && data.Proyectos.map((proyecto) => {
            return (
              <Card
                Key={proyecto._id}
                nombre={proyecto.nombre}
                lider={proyecto.lider?proyecto.lider.nombre + " " + proyecto.lider.apellido :""}
                estado={proyecto.estado}
                fase={proyecto.fase}
              />
            );
          })}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default IndexProyecto;
