import { gql } from '@apollo/client';

const CREAR_AVANCE = gql`
`;

const EDITAR_AVANCE = gql`
mutation EditarAvance($_id: String!, $campos: camposAvances!) {
  editarAvance(_id: $_id, campos: $campos) {
    _id
    fecha
    descripcion
    observaciones
  }
}
`;

const ELIMINAR_AVANCE = gql`
`;

export {CREAR_AVANCE, EDITAR_AVANCE, ELIMINAR_AVANCE};