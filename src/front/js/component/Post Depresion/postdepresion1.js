import React from "react";
import { BlogPost } from "../blogpost";
import image1 from "../../../img/Psiento1.png";
import image2 from "../../../img/Psiento1.png";
import image3 from "../../../img/Psiento1.png";
import image4 from "../../../img/Psiento1.png";

const postinfo = [
  {
    id: 1,
    title: "DEPRESIÓN",
    image:"https://1.bp.blogspot.com/-X8aBKb8w_Ik/WsPDHypHyKI/AAAAAAAAB0Y/lzuE_CbZdAAvkOAJagbTZLvSY8Yk-5F8gCEwYBhgL/s400/DDS3.jpg",
    text: "La depresión es un trastorno emocional que causa un sentimiento de tristeza constante y una pérdida de interés en realizar diferentes actividades. También denominada «trastorno depresivo mayor» o «depresión clínica», afecta los sentimientos, los pensamientos y el comportamiento de una persona, y puede causar una variedad de problemas físicos y emocionales. Es posible que tengas dificultades para realizar las actividades cotidianas y que, a veces, sientas que no vale la pena vivir Más que solo una tristeza pasajera, la depresión no es una debilidad y uno no puede recuperarse de la noche a la mañana de manera sencilla. La depresión puede requerir tratamiento a largo plazo. Pero no te desanimes. La mayoría de las personas con depresión se sienten mejor con medicamentos, con psicoterapia o con ambos",
    modal: "modal5",
    modaltargeter: "#modal5",
  },
  {
    id: 2,
    title: "SINTOMAS",
    image:"https://culturacolectiva-cultura-colectiva-prod.cdn.arcpublishing.com/resizer/8jVYXX5xySJGVmCJYPAtraek3o4=/400x300/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/culturacolectiva/2NVI3ERWTVAFHOLIOCEMJ37LKU.jpg",
    text: "por lo general, las personas tienen varios episodios de depresión. Durante estos episodios, los síntomas se producen durante gran parte del día, casi todos los días y pueden consistir en: Sentimientos de tristeza, ganas de llorar, vacío o desesperanza. Arrebatos de enojo, irritabilidad o frustración, incluso por asuntos de poca importancia. Pérdida de interés o placer por la mayoría de las actividades habituales o todas, como las relaciones sexuales, los pasatiempos o los deportes. Alteraciones del sueño, como insomnio o dormir demasiado. Cansancio y falta de energía, por lo que incluso las tareas pequeñas requieren un esfuerzo mayor. Falta de apetito y adelgazamiento, o más antojos de comida y aumento de peso. Ansiedad, agitación o inquietud. Lentitud para razonar, hablar y hacer movimientos corporales. Sentimientos de inutilidad o culpa, fijación en fracasos del pasado o autorreproches. Dificultad para pensar, concentrarse, tomar decisiones y recordar cosas. Pensamientos frecuentes o recurrentes sobre la muerte, pensamientos suicidas, intentos suicidas o suicidio. Problemas físicos inexplicables, como dolor de espalda o de cabeza",
    modal: "modal6",
    modaltargeter: "#modal6",
  },
  {
    id: 3,
    title: "POSIBLES CAUSAS",
    image:"https://terapi-app.com/blog/wp-content/uploads/2022/07/factores-que-provocan-estres-400x300.png",
    text: "Existen múltiples acontecimientos vitales estresantes que pueden causar la depresión. Algunos de los acontecimientos estresantes que con mayor frecuencia pueden causar depresión son: La muerte de un ser querido o duelo. Problemas laborales. Problemas económicos. Rupturas sentimentales. Enfermedades propias o de familiares y la vejez es una etapa de la vida especialmente vulnerable. Como ocurre con otros trastornos psiquiátricos, los acontecimientos adversos durante la infancia constituyen un importante factor de riesgo de desarrollar una depresión o un Trastorno depresivo mayor. Esto sucede con mayor frecuencia cuando los acontecimientos adversos son múltiples y son experiencias negativas de distintos tipos. Es especialmente relevante en este caso las situaciones de abuso infantil o ambientes de violencia familiar.",
    modal: "modal7",
    modaltargeter: "#modal7",
  },
  {
    id: 4,
    title: "CUANDO PEDIR AYUDA?",
    image:"https://1.bp.blogspot.com/-Mhny74p6dpE/X7PkROWGCBI/AAAAAAAAAsM/gdRCzaPIqQwddZ4qJIOq-2U_zj44rgxeACLcBGAsYHQ/s16000/a1_opt.jpg",
    text: "Si te sientes deprimido, pide una cita con un médico o un profesional de salud mental tan pronto como sea posible. Si no quieres buscar tratamiento, habla con un amigo o un ser querido, cualquier proveedor de atención médica, un líder religioso u otra persona en quien confíes.",
    modal: "modal8",
    modaltargeter: "#modal8",
  },
];

export const Depresion = () => {
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
