import React from "react";
import { useParams } from "react-router-dom";

const Proyecto = () => {
  const {_id} = useParams();
  return (
    <div className="px-8 py-8 sm:px-16 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-5">
      PROYECTO ID: {_id}
    </div>
  );
};

export default Proyecto;
