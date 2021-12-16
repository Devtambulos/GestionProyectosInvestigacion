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
mutation EditarAvance($_id: String!, $descripcion: String) {
  editarAvance(_id: $_id, descripcion: $descripcion) {
    _id
    fecha
    descripcion
    observaciones
  }
}
`;


export { CREAR_AVANCE, EDITAR_AVANCE };