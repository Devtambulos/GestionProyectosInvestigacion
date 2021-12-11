import React, {useEffect} from 'react';
import {useQuery} from '@apollo/client'
import { GET_ESTUDIANTES } from 'graphql/avances/queries';

const IndexAvances = () => {
  const {data,error,loading} =useQuery(GET_ESTUDIANTES);

  useEffect(() => {
    console.log('Data:',data);
  }, [data]);

  return <div>Avance</div>;
};

export default IndexAvances;

