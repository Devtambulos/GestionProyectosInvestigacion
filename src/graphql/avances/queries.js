import { gql } from '@apollo/client';

const GET_AVANCES = gql`
  query FiltrarAvance($_id: String!) {
    filtrarAvance(idProyecto:$_id) {
      _id
      fecha
      descripcion
      observaciones
      proyecto {
        _id
        nombre
      }
      creadoPor {
        correo
      }
    }
  }
`;
const GET_AVANCE = gql`
 query Avance($_id: String!) {
  avance(_id: $_id) {
    _id
    fecha
    descripcion
    observaciones
    proyecto {
      _id
      nombre
    }
    creadoPor {
      _id
      correo
      rol
      estado
    }
  }
}
 
 `;

export { GET_AVANCES, GET_AVANCE };