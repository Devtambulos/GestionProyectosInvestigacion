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

const ELIMINAR_OBJETIVO = gql`
mutation EliminarObjetivo($_id: String!) {
    eliminarObjetivo(_id: $_id) {
      _id
    }
  }
`;

export {EDITAR_OBJETIVO, ELIMINAR_OBJETIVO};