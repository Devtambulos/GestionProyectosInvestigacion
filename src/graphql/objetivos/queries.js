import { gql } from '@apollo/client';

const GET_OBJETIVOS = gql`
query FiltrarObjetivo($_id: String!) {
  filtrarObjetivo(idProyecto: $_id) {
    _id
    descripcion
    tipo
  }
}`;

export {GET_OBJETIVOS};