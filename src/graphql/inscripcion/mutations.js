import { gql } from '@apollo/client';

const CREAR_INSCRIPCION = gql`
mutation CrearInscripcion(
    $estado: Enum_EstadoInscripcion
    $proyecto: String!
    $estudiante: String!
  ) {
    crearInscripcion(estado: $estado, proyecto: $proyecto, estudiante: $estudiante) {
      estado
      proyecto
      estudiante
    }
  }
`;

const APROBAR_INSCRIPCION = gql`
mutation AprobarInscripcion(
    $_id: String!
  ) {
    aprobarInscripcion(_id: $_id) {
      _id
    }
  }
`;

const TERMINAR_INSCRIPCION = gql`
mutation TerminarInscripcion(
    $_id: String!
  ) {
    terminarInscripcion(_id: $_id) {
      _id
    }
  }
`;

const ELIMINAR_INSCRIPCION = gql`
mutation EliminarInscripcion(
    $_id: String!
  ) {
    eliminarInscripcion(_id: $_id) {
      _id
    }
  }
`;

export {CREAR_INSCRIPCION, APROBAR_INSCRIPCION, TERMINAR_INSCRIPCION, ELIMINAR_INSCRIPCION};