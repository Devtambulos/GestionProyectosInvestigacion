import React from "react";
import Card from "../../components/Card";

const Proyectos = () => {
  const proyectos = [
    {
      _id: "123faber456",
      nombre: "Proyecto Atlas",
      lider: "Faber Hoyos",
      estado: "Activo",
      fase: "Nulo",
    },
    {
      _id: "123f12456",
      nombre: "Proyecto Star",
      lider: "Faber Hoyos",
      estado: "Activo",
      fase: "Nulo",
    },
    {
      _id: "123fghther456",
      nombre: "Proyecto Luna",
      lider: "Faber Hoyos",
      estado: "Activo",
      fase: "Nulo",
    },
  ];

  return (
    <div className="px-8 py-8 sm:px-16 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-5">
      {proyectos.map((proyecto) => {
        return (
          <Card
            _id={proyecto._id}
            nombre={proyecto.nombre}
            lider={proyecto.lider}
            estado={proyecto.estado}
            fase={proyecto.fase}
          />
        );
      })}
    </div>);
};

export default Proyectos;

