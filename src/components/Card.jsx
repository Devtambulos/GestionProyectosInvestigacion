import { ReactComponent as IconFlag } from "../../src/assets/img/iconFlag.svg";
import { ReactComponent as IconCheckOn } from "../../src/assets/img/iconCheckOn.svg";
import { ReactComponent as IconInfo } from "../../src/assets/img/iconInfo.svg";
import { ReactComponent as VectorNew} from "../../src/assets/vectors/vectorNew.svg";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <Link to={`/proyectos/${props.Key}`}>
        <div key={props.Key} className="cursor-pointer shadow-DropDown rounded-xl p-4 w-full">
          <div
            className="relative w-full rounded-lg p-1 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${"https://es.unesco.org/youth/toptips/user/pages/images/home-feature-two_mobile.png"})`,
            }}
          >
            <img className="h-52 rounded-lg object-cover" alt="" src={""}></img>
          </div>
          <h3 className="pt-2">{props.nombre}</h3>
          {/* <div className="py-2 text-gray text-sm w-full text-justify">
            <p>
              Un proyecto es una planificación que consiste en un conjunto de
              objetivos que se encuentran interrelacionados y coordinados.​ De
              conformidad con el Project Management Institute, "un proyecto es
              un esfuerzo temporal que se lleva a cabo para crear un producto,
              servicio o resultado único".{props.descripcion}
            </p>
          </div> */}
          <div className="w-full py-2 text-gray text-sm h2 w-full flex items-center">
            <IconFlag className="fill-current text-indigo-800 h-5 w-5 mr-1" />
            <p className="text-indigo-800">Lider</p>
            <p>: {props.lider}</p>
          </div>
          <div className="py-2 text-gray text-sm h2 w-full flex items-center">
            <IconCheckOn className="fill-current text-indigo-800 h-5 w-5 mr-1" />
            <p className="text-indigo-800">Estado</p>
            <p>: {props.estado}</p>
          </div>
          <div className="py-2 text-gray text-sm w-full flex items-center">
            <IconInfo className="fill-current text-indigo-800 h-5 w-5 mr-1" />
            <p className="text-indigo-800">Fase</p>
            <p>: {props.fase}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export function CardNew() {
  return(<>
    <Link to={`/proyectos/crear`}>
      <div className="flex flex-col items-center justify-center cursor-pointer shadow-DropDown rounded-xl p-4 w-full h-full">
        <VectorNew className="fill-current text-indigo-800"/>
        <h4 className="text-center">Agrega un nuevo proyecto</h4>
      </div>
    </Link>
  </>)
}