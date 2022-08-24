import React from "react";

const Test = () => {
  return (
    <div id="test-div" className="container-lg">
      <h1>
        <strong>Test de Ansiedad PSIENTO</strong>
      </h1>
      <form
        id="fs-frm"
        name="survey-form"
        accept-charset="utf-8"
        action="https://formspree.io/f/{form_id}"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <div className="container">
            <label for="timely">
              1. ¿Tienes preocupaciones constantes, angustia al pensar o
              imaginar determinadas cosas o anticipar lo peor en distintas
              circunstancias?{" "}
            </label>
            <select name="timely" id="timely" required="">
              <option value="" selected="" disabled="">
                Escoge
              </option>
              <option value="1">Si</option>
              <option value="3">No</option>
            </select>
          </div>
          <div className="container">
            <label for="timely">
              2. ¿Sientes temblores, ganas de llorar o sensación de alarma?
            </label>
            <select name="quality" id="quality" required="">
              <option value="" selected="" disabled="">
                Escoge
              </option>
              <option value="1">Si</option>
              <option value="3">No</option>
            </select>
          </div>
          <div className="container">
            <label for="timely">
              3. ¿Sientes miedo a estar solo, a la oscuridad, a que pase algo
              imprevisto?{" "}
            </label>
            <select name="quality" id="quality" required="">
              <option value="" selected="" disabled="">
                Escoge
              </option>
              <option value="1">Si</option>
              <option value="3">No</option>
            </select>
          </div>
          <div className="container">
            <label for="timely">
              4. ¿Sufres de Insomnio o sientes incapacidad para poder descansar?{" "}
            </label>
            <select name="quality" id="quality" required="">
              <option value="" selected="" disabled="">
                Escoge
              </option>
              <option value="1">Si</option>
              <option value="3">No</option>
            </select>
          </div>
          <div className="container">
            <label for="timely">
              5. ¿Tienes dificultad para decidir, concentrase, reflexionar o
              fallos de memoria?{" "}
            </label>
            <select name="quality" id="quality" required="">
              <option value="" selected="" disabled="">
                Escoge
              </option>
              <option value="1">Si</option>
              <option value="3">No</option>
            </select>
          </div>
          <div className="container">
            <label for="timely">
              6. ¿Tienes desánimo, te levantas con negatividad y tienes la
              sensación de que va a ser un mal día?{" "}
            </label>
            <select name="quality" id="quality" required="">
              <option value="" selected="" disabled="">
                Escoge
              </option>
              <option value="1">Si</option>
              <option value="3">No</option>
            </select>
          </div>
        </fieldset>
        <div className="container">
          <label for="message">Comentarios Adicionales</label>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
            required=""
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Survey Responses"
          />
          <input type="submit" value="Enviar Respuestas" />
        </div>
      </form>
    </div>
  );
};
export default Test;
