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
    }
  }
`


export {GET_PROYECTOS};