import React from "react";
import { BlogPost } from "../blogpost";
import imageAnsiedad1 from "../../../img/Ansiedad1.png";
import imageAnsiedad2 from "../../../img/Ansiedad2.jpg";
import imageAnsiedad3 from "../../../img/Ansiedad3.jpg";
import imageAnsiedad4 from "../../../img/Ansiedad4.jpg";

const postinfo = [
  {
    id: 1,
    title: "Ansiedad",
    image: imageAnsiedad1,
    text: "La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones. Puede ser una reacción normal al estrés. Por ejemplo, puede sentirse ansioso cuando se enfrenta a un problema difícil en el trabajo, antes de tomar un examen o antes de tomar una decisión importante. Si bien la ansiedad puede ayudar a enfrentar una situación, además de darle un impulso de energía o ayudarle a concentrarse, para las personas con trastornos de ansiedad el miedo no es temporal y puede ser abrumadora.",
    modal: "modal9",
    modaltargeter: "#modal9",
  },
  {
    id: 2,
    title: "Síntomas",
    image: imageAnsiedad2,
    text: "Los diferentes tipos de trastornos de ansiedad pueden tener síntomas diferentes. Pero todos muestran una combinación de: Pensamientos o creencias ansiosos difíciles de controlar: Le hacen sentir inquieto y tenso e interfieren con su vida diaria. No desaparecen y pueden empeorar con el tiempo. Síntomas físicos, como latidos cardíacos fuertes o rápidos, dolores y molestias inexplicables, mareos y falta de aire. Cambios en el comportamiento, como evitar las actividades cotidianas que solía hacer. NOTA: El uso de cafeína, otras sustancias y ciertos medicamentos pueden empeorar sus síntomas.",
    modal: "modal10",
    modaltargeter: "#modal10",
  },
  {
    id: 3,
    title: "Tipos de ansiedad",
    image: imageAnsiedad3,
    text: "Existen varios tipos de trastornos de ansiedad, incluyendo: Trastorno de ansiedad generalizada: Las personas con este trastorno se preocupan por problemas comunes como la salud, el dinero, el trabajo y la familia. Pero sus preocupaciones son excesivas y las tienen casi todos los días durante al menos 6 meses. TRASTORNO DE PANICO: Las personas con trastorno de pánico sufren de ataques de pánico. Estos son repentinos y repetidos momentos de miedo intenso sin haber un peligro aparente. Los ataques se producen rápidamente y pueden durar varios minutos o más. FOBIAS: Las personas con fobias tienen un miedo intenso a algo que representa poco o ningún peligro real. Su miedo puede ser por arañas, volar, ir a lugares concurridos o estar en situaciones sociales (conocida como ansiedad social)",
    modal: "modal11",
    modaltargeter: "#modal11",
  },
  {
    id: 4,
    title: "Tratamientos",
    image: imageAnsiedad4,
    text: "Los principales tratamientos para los trastornos de ansiedad son psicoterapia (terapia de conversación), medicamentos o ambos: La terapia cognitiva conductual es un tipo de psicoterapia que a menudo se usa para tratar los trastornos de ansiedad. Enseña diferentes formas de pensar y comportarse. Puede ayudarle a cambiar cómo reacciona ante las cosas que le causan miedo y ansiedad. Puede incluir terapia de exposición, la que se enfoca en confrontar sus miedos para que pueda hacer las cosas que ha estado evitando. Los medicamentos para tratar los trastornos de ansiedad incluyen medicamentos contra la ansiedad y ciertos antidepresivos. Algunos tipos de medicamentos pueden funcionar mejor para tipos específicos de trastornos de ansiedad. Debe comunicarse bien con su profesional de la salud para identificar qué medicamento es mejor para usted. Es posible que deba probar más de un medicamento antes de encontrar el correcto",
    modal: "modal12",
    modaltargeter: "#modal12",
  },
];

export const Ansiedad = () => {
  return (
    <div className="row wrap m-0 p-0 g-0">
      {postinfo.map((postinfo) => (
        <div
          className="col-md-2 col-sm-1 flex-grow-1 p-0 px-sm-1 mx-sm-2 g-0"
          key={postinfo.id}
        >
          <BlogPost
            className="p-0 m-0 g-0"
            title={postinfo.title}
            imageSource={postinfo.image}
            text={postinfo.text}
            modalId={postinfo.modal}
            modalTargeter={postinfo.modaltargeter}
          />
        </div>
      ))}
    </div>
  );
};
