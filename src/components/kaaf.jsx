import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import kaaf from "../assets/audio/kaaf.mp3";
import img8 from "../assets/1/8.jpeg";

export default function Kaaf() {
  return (
    <div className="kaaf">
      <Accordion.Item eventKey="21">
        <Accordion.Header>ك</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={kaaf} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Back of the tongue touching where
            the hard part of the roof of the mouth meets the soft part.
          </p>
          <hr />
          <p>
            <strong>الحمص Al Hams</strong> - <b>With airflow</b> -{" "}
            <span className="inline-block">فحثه شخص سكت</span> “Fa-hathu-hu
            shakhsun sakath”
          </p>
          <p>
            <strong>الشدۃ Al Shiddah</strong> -{" "}
            <b>Sound is not allowed to flow</b> -{" "}
            <span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span> “Ajid Qatin
            Bakath”
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
          <img className="d-block mx-auto" src={img8} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
