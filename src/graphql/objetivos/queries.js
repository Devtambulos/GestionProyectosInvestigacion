import { gql } from '@apollo/client';

const GET_OBJETIVOS = gql`
query FiltrarObjetivo($_id: String!) {
  filtrarObjetivo(idProyecto: $_id) {
    _id
    descripcion
    tipo
  }
}`;

const GET_OBJETIVO = gql`
query Objetivo($_id: String!) {
  objetivo(_id: $_id) {
    _id
    descripcion
    tipo
    proyecto {
      _id
    }
  }
}
`; 

export {GET_OBJETIVOS, GET_OBJETIVO};