import React from "react";
import { BlogPost } from "../blogpost";
import image1 from "../../../img/Psiento1.png";
import image2 from "../../../img/Psiento1.png";
import image3 from "../../../img/Psiento1.png";
import image4 from "../../../img/Psiento1.png";

const postinfo = [
  {
    id: 1,
    title: "La depresión y sus sintomas",
    image: "https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, molestias quae. Atque ipsum, et nobis aliquam voluptas eos sapiente sit natus obcaecati, ipsam est explicabo nihil repellendus placeat. Rem, quasi. Iste harum veniam magnam distinctio amet rerum dignissimos facilis inventore impedit deserunt reiciendis iusto voluptas autem voluptatum, necessitatibus ea cupiditate voluptates cum quidem quibusdam suscipit nemo tempore? Quia, pariatur esse? Iure magnam tempora laboriosam distinctio ullam, possimus culpa? Fuga molestiae dicta ipsum enim amet itaque iste qui ea, dignissimos, culpa aliquid minus illum, vel iure corporis aperiam at ullam porro.",
    modal: "modal1",
    modaltargeter: "#modal1"
  },
  {
    id: 2,
    title: "La depresión y sus sintomas",
    image: "https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, molestias quae. Atque ipsum, et nobis aliquam voluptas eos sapiente sit natus obcaecati, ipsam est explicabo nihil repellendus placeat. Rem, quasi. Iste harum veniam magnam distinctio amet rerum dignissimos facilis inventore impedit deserunt reiciendis iusto voluptas autem voluptatum, necessitatibus ea cupiditate voluptates cum quidem quibusdam suscipit nemo tempore? Quia, pariatur esse? Iure magnam tempora laboriosam distinctio ullam, possimus culpa? Fuga molestiae dicta ipsum enim amet itaque iste qui ea, dignissimos, culpa aliquid minus illum, vel iure corporis aperiam at ullam porro.",
    modal: "modal2",
    modaltargeter: "#modal2"
  },
  {
    id: 3,
    title: "La depresión y sus sintomas",
    image: "https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, molestias quae. Atque ipsum, et nobis aliquam voluptas eos sapiente sit natus obcaecati, ipsam est explicabo nihil repellendus placeat. Rem, quasi. Iste harum veniam magnam distinctio amet rerum dignissimos facilis inventore impedit deserunt reiciendis iusto voluptas autem voluptatum, necessitatibus ea cupiditate voluptates cum quidem quibusdam suscipit nemo tempore? Quia, pariatur esse? Iure magnam tempora laboriosam distinctio ullam, possimus culpa? Fuga molestiae dicta ipsum enim amet itaque iste qui ea, dignissimos, culpa aliquid minus illum, vel iure corporis aperiam at ullam porro.",
    modal: "modal3",
    modaltargeter: "#modal3"
  },
  {
    id: 4,
    title: "La depresión y sus sintomas",
    image: "https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, molestias quae. Atque ipsum, et nobis aliquam voluptas eos sapiente sit natus obcaecati, ipsam est explicabo nihil repellendus placeat. Rem, quasi. Iste harum veniam magnam distinctio amet rerum dignissimos facilis inventore impedit deserunt reiciendis iusto voluptas autem voluptatum, necessitatibus ea cupiditate voluptates cum quidem quibusdam suscipit nemo tempore? Quia, pariatur esse? Iure magnam tempora laboriosam distinctio ullam, possimus culpa? Fuga molestiae dicta ipsum enim amet itaque iste qui ea, dignissimos, culpa aliquid minus illum, vel iure corporis aperiam at ullam porro.",
    modal: "modal4",
    modaltargeter: "#modal4"
  }
];

export const PostGroup4 = () => {
  console.log(postinfo);
  return (
    <div className="row wrap m-0 container-fluid p-0 g-0">
        {
            postinfo.map(postinfo => (
                <div className="col-lg-2 flex-grow-1 p-0 mx-2 g-0" key={postinfo.id}>
                    <BlogPost className="p-0 m-0 g-0" title={postinfo.title} imageSource={postinfo.image} text={postinfo.text} modalId={postinfo.modal} modalTargeter={postinfo.modaltargeter}/>
          </div>
        ))}
    </div>
  );
};
