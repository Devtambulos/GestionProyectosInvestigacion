import { gql } from '@apollo/client';

const EDITAR_OBJETIVO = gql`
mutation EditarObjetivo(
    $_id: String!
    $descripcion: String!) {
    editarObjetivo(_id: $_id, descripcion: $descripcion) {
      _id
      descripcion
      tipo
    }
  }
`;

const CREAR_OBJETIVO = gql`
mutation Mutation(
  $descripcion: String!
  $tipo: Enum_TipoObjetivo!
  $proyecto: String!) {
  crearObjetivo(descripcion: $descripcion, tipo: $tipo, proyecto: $proyecto) {
    _id
    descripcion
    tipo
  }
}
`;

export {EDITAR_OBJETIVO, CREAR_OBJETIVO};