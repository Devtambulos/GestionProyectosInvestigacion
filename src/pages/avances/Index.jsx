import React, {useEffect} from 'react';
import {useQuery} from '@apollo/client'
import { GET_AVANCES } from 'graphql/avances/queries';

const IndexAvances = () => {
  const {data,error,loading} =useQuery(GET_AVANCES);

  useEffect(() => {
    console.log('Data:',data);
  }, [data]);

  return <div>Avance</div>;
};

export default IndexAvances;

