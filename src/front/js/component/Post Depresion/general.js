import React from "react";
import { BlogPost } from "../blogpost";
import image1 from "../../../img/Psiento1.png";
import image2 from "../../../img/Psiento1.png";
import image3 from "../../../img/Psiento1.png";
import image4 from "../../../img/Psiento1.png";

const postinfo = [
  {
    id: 1,
    title: "TRASTORNO BIPOLAR",
    image:
      "https://www.radioformula.com.mx/u/fotografias/m/2022/8/25/f400x300-600659_617819_5050.jpg",
    text: "Este cuadro clínico puede aparecer en cualquier momento de la vida de una persona. El trastorno bipolar implica la presencia de momentos vinculados a la depresión alternados con situaciones de euforia y/o manía. Cabe destacar que la intensidad de cada uno de estos momentos suele ser alta, llevando a la persona a realizar acciones que pueden perjudicar a terceros y/o a sí misma. En estos casos, las causas suelen deberse a componentes neurológicos y factores psicológicos. A continuación, expondremos algunos puntos importantes del trastorno bipolar: Momentos alternados de depresión y euforia. Intentos de suicidio.Inestabilidad emocional. Pérdida de identidad.Sufrimiento. Angustia. Ideas delirantes. Sensación de grandeza.",
    modal: "modal1",
    modaltargeter: "#modal1",
  },
  {
    id: 2,
    title: "ALEXITIMIA",
    image:
      "https://mlajjgx4vasx.i.optimole.com/9X13q7M-hdJss1gj/w:auto/h:auto/q:55/https://www.msolucionagoya.es/wp-content/uploads/2017/11/Disen%CC%83o-sin-ti%CC%81tulo-1-1.png",
    text: "Este rasgo patológico se manifiesta en personas que presentan grandes dificultades para identificar y reconocer sentimientos propios. A su vez, esto ocasiona una sensación de despersonalización, debido a que la persona diagnosticada con alexitimia se siente distanciada de factores emocionales propios. Por este motivo, a las personas con alexitimia puede parecerles complejo entender aspectos propios y de otras personas. Los principales criterios para detectar la alexitimia son los siguientes: Escasa capacidad comprensiva. Dificultades para expresar sentimientos propios. Dificultades en las relaciones interpersonales. Disconformidad física e intelectual",
    modal: "modal2",
    modaltargeter: "#modal2",
  },
  {
    id: 3,
    title: "ANHEDONIA",
    image:
      "https://elempresario.mx/sites/default/files/imagecache/nota_completa/estres%20laboral.jpg",
    text: "Esta cualidad está vinculada a la pérdida de la posibilidad de sentir placer en momentos y actividades que en el pasado sí resultaban placenteras. En este sentido, la anhedonia se corresponde con un trastorno de la afectividad causado por una alteración de las emociones. Asimismo, este cuadro puede presentrse en otros trastornos como la esquizofrenia o la depresión, entre otros. Los síntomas principales que presentan las personas con anhedonia son: Falta de placer. Pérdida de interés en actividades recreativas. Aislamiento social. Falta de apetito. Baja autoestima. Angustia. Sensación de soledad.",
    modal: "modal3",
    modaltargeter: "#modal3",
  },
  {
    id: 4,
    title: "PARATIMIA",
    image:
      "https://i.pinimg.com/736x/f1/4a/37/f14a375482445b13b1a69fa4c8eaee7c--art-design-disorders.jpg",
    text: "La paratimia es una condición en la cual existe una discordancia entre las emociones, pensamientos y conductas de la persona con respecto a la situación contextual. Por ello, es frecuente que existan dificultades en la comprensión de emociones ajenas o en la realización de actividades cotidianas.Las características principales de la paratimia son: Incoherencia discursiva. Despersonalización. Irritación y/o alegría desmesurada.",
    modal: "modal4",
    modaltargeter: "#modal4",
  },
];

export const General = () => {
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
