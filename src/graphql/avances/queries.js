import {gql} from '@apollo/client';

const GET_ESTUDIANTES = gql`
query Estudiantes {
    FiltrarRol(rol:ESTUDIANTE) {
      _id
      nombre
      apellido
      identificacion
      correo
      rol
      estado
      inscripciones {
        _id
        estado
        proyecto {
          _id
        }
      }
      avances {
        _id
        descripcion
        proyecto {
          _id
        }
      }
      proyectos {
        _id
        nombre
      }
    }
  }
`;

export {GET_ESTUDIANTES};