import React, {useEffect, useState} from "react";
import Sidebar from "components/Sidebar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "context/authContext";
import { useMutation } from "@apollo/client";
import { REFRESH_TOKEN } from "graphql/auth/mutation";
import { useNavigate } from "react-router";
import PrivateRoute from "components/PrivateRoute";


const PrivateLayout = () => {
  const navigate = useNavigate()
  const { authToken, setAuthToken, setToken } = useAuth();
  const [loadingAuth, setLoadingAuth] = useState(true)

  const [refreshToken, { data: dataMutation, loading: loadingMutation, error: errorMutation }] = useMutation(REFRESH_TOKEN);

  useEffect(() => {
    /* setAuthToken() */

    refreshToken();
    /* console.log(refreshToken) */
  }, [refreshToken])

  useEffect(()=>{
    console.log("dt",dataMutation)
    if(dataMutation){
      if(dataMutation.refreshToken.token){
        setToken(dataMutation.refreshToken.token)

      }else{
        setToken(null)
        navigate('/inicio')
      }
      setLoadingAuth(false)
    }
  },[dataMutation, setToken, setLoadingAuth, navigate])


  /* useEffect(()=>{
    console.log('token actual', authToken)
    console.log('lm', loadingMutation)
    console.log('la',loadingAuth);
  }, [authToken,loadingMutation, loadingAuth]) */


  if(loadingMutation ) return <div>Cargando...</div>


  return (
    <div className="flex flex-col md:flex-row flex-no-wrap h-screen">
      <Sidebar />
      <div className="flex w-full h-full">
        <div className="w-full h-full  overflow-y-scroll">
          
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PrivateLayout;
