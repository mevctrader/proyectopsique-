import React from "react";

const Test = () => {
  return (
    <div id="test-div" className="container-fluid pb-5">
      <h1 className="row justify-content-center m-0 pt-3 mb-3">
        <strong className="col-auto">Test de Ansiedad Psiento</strong>
      </h1>
      <div className="rounded bg-white container shadow">
        <form
          id="fs-frm"
          name="survey-form"
          accept-charset="utf-8"
          action="https://formspree.io/f/{form_id}"
          method="post"
        >
          <fieldset id="fs-frm-inputs">
            <div className="container mt-3">
              <label for="timely">
                1. ¿Tienes preocupaciones constantes, angustia al pensar,
                imaginar determinadas cosas o anticipar lo peor en distintas
                circunstancias?
              </label>
              <div>
                <select className="select" placeholder="Example placeholder" name="timely" id="timely" required="">
                  <option value="" selected="" disabled="">
                    Responde
                  </option>
                  <option value="1">Si</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
            <div className="container mt-3">
              <label for="timely">
                2. ¿Sientes temblores, ganas de llorar o sensación de alarma?
              </label>
              <div>
                
                <select name="quality" id="quality" required="">
                  <option value="" selected="" disabled="">
                    Responde
                  </option>
                  <option value="1">Si</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
            <div className="container mt-3">
              <label for="timely">
                3. ¿Sientes miedo si estas solo, a la oscuridad, o a que pase
                algo imprevisto?
              </label>
              <div>
                
                <select name="quality" id="quality" required="">
                  <option value="" selected="" disabled="">
                    Responde
                  </option>
                  <option value="1">Si</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
            <div className="container mt-3">
              <label for="timely">
                4. ¿Sufres de insomnio o sientes incapacidad para poder
                descansar?
              </label>
              <div>
                
                <select name="quality" id="quality" required="">
                  <option value="" selected="" disabled="">
                    Responde
                  </option>
                  <option value="1">Si</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
            <div className="container mt-3">
              <label for="timely">
                5. ¿Tienes dificultad para decidir, concentrarte, reflexionar o
                fallos de memoria?
              </label>
              <div>
                
                <select name="quality" id="quality" required="">
                  <option value="" selected="" disabled="">
                    Responde
                  </option>
                  <option value="1">Si</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
            <div className="container mt-3">
              <label for="timely">
                6. ¿Tienes desánimo, te levantas con negatividad y tienes la
                sensación de que va a ser un mal día?
              </label>
              <div>
                <select name="quality" id="quality" required="">
                  <option value="" selected="" disabled="">
                    Responde
                  </option>
                  <option value="1">Si</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
          </fieldset>
          <div className="container mt-3">
            <div>
              <label for="message">Comentarios Adicionales</label>
            </div>
            <textarea
              cols="120"
              rows="4"
              name="message"
              id="message"
              placeholder="Insertar Comentario."
              required=""
              className="w-75"
            ></textarea>
          </div>
          <div className="container mt-3 pb-5">
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Survey Responses"
            />
            <input
              type="submit"
              value="Enviar Respuestas"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Test;
