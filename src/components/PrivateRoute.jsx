import { useUser } from "context/userContext";
import React from "react";

const PrivateRoute = ({ roleList, authConfirm,children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData.rol) && userData.estado === "AUTORIZADO") {
    return children;
  }

  return (
    <div className="text-9xl text-red-500 ">
      No estás autorizado para ver este sitio.
    </div>
  );
};

export default PrivateRoute;