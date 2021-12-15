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
    }
    creadoPor {
      _id
    }
  }
}
`;

export { GET_AVANCES };