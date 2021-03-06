import { gql } from '@apollo/client';

const EDITAR_PROYECTO = gql`
mutation EditarProyecto(
  $_id: String!
  $nombre: String
  $presupuesto: Float
  $fechaInicio: Date
  $fechaFin: Date
  $estado: Enum_EstadoProyecto
  $fase: Enum_FaseProyecto
  ) {
    editarProyecto(
      _id: $_id
      nombre: $nombre
      presupuesto: $presupuesto
      fechaInicio: $fechaInicio
      fechaFin: $fechaFin
      estado: $estado
      fase: $fase
      ) {
      _id
      nombre
      presupuesto
      fechaInicio
      fechaFin
      estado
      fase
    }
  }
`;

const CREAR_PROYECTO = gql `
mutation Mutation(
  $nombre: String!
  $presupuesto: Float!
  $lider: String!
  $fechaInicio: Date
  $fechaFin: Date
  $estado: Enum_EstadoProyecto
  $fase: Enum_FaseProyecto) {
  crearProyecto(
    nombre: $nombre
    presupuesto: $presupuesto
    lider: $lider
    fechaInicio: $fechaInicio
    fechaFin: $fechaFin
    estado: $estado
    fase: $fase) {
    _id
    nombre
    presupuesto
    fechaInicio
    fechaFin
    estado
    fase
    lider {
      _id
    }
  }
}
`;


export {EDITAR_PROYECTO, CREAR_PROYECTO};