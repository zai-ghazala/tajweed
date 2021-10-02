import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import haa from "../assets/audio/haa.mp3";
import img5 from "../assets/1/5.jpeg";

export default function Haa() {
  return (
    <div className="haa">
      <Accordion.Item eventKey="5">
        <Accordion.Header>ح</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={haa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Middle of the throat, epiglottis,
            what stops food going into our windpipe when we eat.
          </p>

          <p>Tongue is flat.</p>
          <hr />
          <p>
            <strong>الحمص Al Hams</strong> - <b>With airflow</b> -{" "}
            <span className="inline-block">فحثه شخص سكت</span> “Fa-hathu-hu
            shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> -{" "}
            <b>Sound is allowed to flow</b> - Except{" "}
            <span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span> “Ajid Qatin
            Bakath” and <span className="inline-block">لن عمر</span> “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> -{" "}
            <b>
              Sound is directed downwards and outwards which gives the sound the
              quality of tarqeeq which is a lightness
            </b>{" "}
            - All letters except <span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> -{" "}
            <b>Sound is not retained in the mouth</b> - All letters except ص ض ط
            ظ
          </p>
          <img className="d-block mx-auto" src={img5} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
