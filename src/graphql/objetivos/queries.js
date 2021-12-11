import { gql } from '@apollo/client';

const GET_OBJETIVOS = gql
`
query filtrarObjetivo {
    filtrarObjetivo(idProyecto: $_idProyecto) {
      _id
      descripcion
      tipo
    }
  }`;

export {GET_OBJETIVOS};