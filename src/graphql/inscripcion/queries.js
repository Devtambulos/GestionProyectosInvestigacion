import { gql } from '@apollo/client';

const GET_INSCRIPCIONES = gql`
query Query {
  Inscripciones {
      _id
      estado
      fechaIngreso
      fechaEgreso
      proyecto {
        _id
      }
      estudiante {
        _id
      }
    }
  }
`;

const GET_INSCRIPCION = gql`
query Query {
    Inscripcion {
      _id
      estado
      fechaIngreso
      fechaEgreso
      proyecto {
        _id
      }
      estudiante {
        _id
      }
    }
  }
`;

export {GET_INSCRIPCIONES, GET_INSCRIPCION};