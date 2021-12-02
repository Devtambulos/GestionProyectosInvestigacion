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
`


export {GET_PROYECTOS};