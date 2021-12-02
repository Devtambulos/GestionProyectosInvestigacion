import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "styles/tabla.css";
import PrivateRoute from "components/PrivateRoute";
import ReactLoading from "react-loading";
import { GET_PROYECTOS } from "graphql/proyectos/queries";
import Card from "../../components/Card";
import { CardNew } from "../../components/Card";
import PrivateComponent from "../../components/PrivateComponent";

const IndexProyecto = () => {
  const { data, error, loading } = useQuery(GET_PROYECTOS);

  useEffect(() => {
    console.log("data servidor uno", data);
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Error consultando los usuarios");
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
    <PrivateRoute roleList={["LIDER", "ADMINISTRADOR"]}>
      <div className="p-8 items-center font-serif text-gray-800">
        <div className="p-2 m-4 text-3xl font-serif text-gray-800 font-bold text-center w-full justify-center ">
          Proyectos
        </div>
        <div className="px-8 py-8 sm:px-16 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          <PrivateComponent roleList={["ADMINISTRADOR", "LIDER"]}>
            <CardNew />
          </PrivateComponent>
          {data.Proyectos.map((proyecto) => {
            return (
              <Card
                Key={proyecto._id}
                nombre={proyecto.nombre}
                lider={proyecto.lider.nombre}
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
