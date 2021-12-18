import { gql } from '@apollo/client';

const CREAR_AVANCE = gql`
mutation crearAvance(
  $descripcion: String!, 
  $proyecto: String!, 
  $creadoPor: String!
  ) {
  crearAvance(
    descripcion: $descripcion, 
    proyecto: $proyecto, 
    creadoPor: $creadoPor
    ) {
    _id
  }
}
`;

const EDITAR_AVANCE = gql`
mutation EditarAvance($_id: String!, $descripcion: String, $observaciones: String) {
  editarAvance(_id: $_id, descripcion: $descripcion, observaciones: $observaciones) {
    _id
    fecha
    descripcion
    observaciones
  }
}
`;

const ELIMINAR_AVANCE = gql`
mutation EliminarAvance($_id: String!) {
  eliminarAvance(_id: $_id) {
    _id
  }
}
`;

export { CREAR_AVANCE, EDITAR_AVANCE, ELIMINAR_AVANCE };