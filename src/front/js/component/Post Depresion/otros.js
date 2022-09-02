import React from "react";
import { BlogPost } from "../blogpost";
import imageOtros1 from "../../../img/Otros1.jpg";
import image2 from "../../../img/Otros2.jpg";
import image3 from "../../../img/Otros3.jpg";
import image4 from "../../../img/Otros4.jpg";

const postinfo = [
  {
    id: 1,
    title: "Insomnio",
    image: imageOtros1,
    text: "El insomnio es un trastorno frecuente del sueño. En el insomnio, tiene dificultades para conciliar el sueño, para mantenerse dormido o para lograr un sueño de buena calidad. Esto ocurre incluso cuando tiene el tiempo y el entorno correcto para dormir bien. El insomnio puede interferir con sus actividades diarias y puede hacer que sienta somnolencia durante el día. El insomnio de corto tiempo puede ser causado por estrés o por cambios en sus horarios o en su entorno. Puede durar unos días o semanas. El insomnio crónico (de largo plazo) ocurre 3 o más noches por semana, dura más de 3 meses y no puede ser explicado completamente por otro problema de salud. Para diagnosticar insomnio, el proveedor de atención médica posiblemente le pregunta sobre sus hábitos de sueño y le pida que lleve un diario del sueño. Su proveedor posiblemente también le recomiende hábitos de un estilo de vida saludable como un horario de sueño regular, terapia cognitivo conductual para el insomnio y medicamentos pa a ayudarle a manejar el insomnio. El insomnio puede afectar la memoria y la concentración. El insomnio crónico aumenta el riesgo de tener presión arterial alta, cardiopatía isquémica, diabetes y cáncer.",
    modal: "modal13",
    modaltargeter: "#modal13",
  },
  {
    id: 2,
    title: "Fobias",
    image: image2,
    text: "Una fobia es un tipo de trastorno de ansiedad. Es un temor fuerte e irracional de algo que representa poco o ningún peligro real. Existen muchos tipos de fobias. La acrofobia es el temor a las alturas. La agorafobia es el temor a los lugares públicos y la claustrofobia es el temor a los espacios cerrados. Si se siente ansioso e inseguro de las situaciones sociales cotidianas, usted podría tener una fobia social. Otras fobias comunes incluyen los túneles, conducir en autopistas, el agua, volar, los animales y la sangre. Las personas con fobias intentan evitar lo que les provoca miedo. Si eso no es posible, pueden sentir: Pánico y miedo Taquicardia, cuando el corazón late muy rápido, Falta de aire, Temblores, Un fuerte deseo de huir, En general, las fobias comienzan en la niñez o en la adolescencia y continúan durante la edad adulta. Las causas de las fobias no se comprenden bien todavía pero sí se sabe que a veces pueden ser hereditarias. El tratamiento ayuda a la mayoría de las personas con fobias. Entre las opciones se encuentran medicamentos, psicoterapia o ambas.",
    modal: "modal14",
    modaltargeter: "#modal14",
  },
  {
    id: 3,
    title: "TDAH",
    image: image3,
    text: "El trastorno por déficit de atención con hiperactividad (TDAH) se trata de un trastorno que implica que una persona experimente dificultades para controlar sus pensamientos, atención, comportamientos y emociones. Por lo tanto, las personas con TDAH pueden tener dificultades en la organización, pueden estar inquietas o parecer desinteresadas o desconectadas del entorno. En cambio, su neurodivergencia implica pensar de manera innovadora, ser capaces de ver planteamientos que los demás no pueden, tener más energía y a menudo ser más sensibles.",
    modal: "modal15",
    modaltargeter: "#modal15",
  },
  {
    id: 4,
    title: "Neurodivergencia",
    image: image4,
    text: "La neurodiversidad o neurodivergencia es un concepto relacionado con la promoción de la idea de que la diversidad en las características humanas aparece como resultado de variaciones normales en el campo neurológico. El término fue concebido por la comunidad autista para referirse a la neurología atípica del autismo, y se utiliza para desvincularse de lo relacionado con trastornos mentales. Sin embargo, ha llegado a utilizarse con problemas de salud mental como TDAH, dislexia y otros a pesar de que el equivalente al movimiento autista en la salud mental (movimiento de supervivientes de la psiquiatría) rechaza o limita la importancia de lo neurológico o cerebral por biologicismo e influencia de la industria farmacéutica.",
    modal: "modal16",
    modaltargeter: "#modal16",
  },
];

export const Otros = () => {
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
