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

export {EDITAR_OBJETIVO};