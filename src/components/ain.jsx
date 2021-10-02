import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ain from "../assets/audio/ain.mp3";
import img5a from "../assets/1/5a.jpeg";

export default function Ain() {
  return (
    <div className="ain">
      <Accordion.Item eventKey="17">
        <Accordion.Header>ع</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={ain} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Middle of the throat, epiglottis,
            what stops food going into our windpipe when we eat.
          </p>
          <p>Tongue is flat.</p>
          <hr />
          <p>
            <strong>الجھر Al Jahr</strong> - <b>No airflow</b> - All letters
            except <span className="inline-block">فحثه شخص سكت</span>{" "}
            “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>توسط Al Tawassut / البينية Al Bayniyyah</strong> -{" "}
            <b>Sound is not allowed to flow nor shortened</b> - The letters{" "}
            <span className="inline-block">لن عمر</span> “Lin ‘Umar”
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> -{" "}
            <b>
              Sound is directed downwards and outwards which gives the sound the
              quality of tarqeeq which is a lightness
            </b>{" "}
            - All letters except{" "}
            <span className="inline-block">
              {" "}
              <span className="inline-block">خص ضغط قظ</span>{" "}
            </span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> -{" "}
            <b>Sound is not retained in the mouth</b> - All letters except ص ض ط
            ظ
          </p>
          <img className="d-block mx-auto" src={img5a} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
