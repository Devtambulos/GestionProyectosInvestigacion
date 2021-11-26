import { gql } from "@apollo/client";

const REGISTRO = gql`
  mutation Mutation(
    $nombre: String!
    $apellido: String!
    $identificacion: String!
    $correo: String!
    $rol: String!
    $password: String!
  ) {
    registro(
      nombre: $nombre
      apellido: $apellido
      identificacion: $identificacion
      correo: $correo
      rol: $rol
      password: $password
    ){
      token
      error
    }
  }
`;

const LOGIN = gql`
  mutation Login($correo: String!,
  $password: String!) {
  login(correo: $correo,
  password: $password) {
    token
    error
  }
}
`


export { REGISTRO, LOGIN }