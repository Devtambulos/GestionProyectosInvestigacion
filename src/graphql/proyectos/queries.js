import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`
query Query {
    Proyectos {
      _id
      nombre
      presupuesto
      fechaInicio
      fechaFin
      estado
      fase
      lider {
        _id
        nombre
        apellido
        identificacion
      }
      objetivos {
        _id
        descripcion
        tipo
      }
      avances {
        _id
        fecha
        descripcion
        observaciones
      }
    }
  }
`;

const GET_PROYECTO = gql`
  query Proyecto($_id: String!) {
    Proyecto(_id: $_id) {
      _id
      nombre
      presupuesto
      fechaInicio
      fechaFin
      estado
      fase
      lider {
        _id
        nombre
        apellido
        identificacion
      }
      objetivos {
        _id
        descripcion
        tipo
      }
      avances {
        _id
        fecha
        descripcion
        observaciones
      }
    }
  }
`;


export {GET_PROYECTOS, GET_PROYECTO};