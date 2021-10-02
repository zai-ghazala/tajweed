import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import sheen from "../assets/audio/sheen.mp3";
import img11a from "../assets/1/11a.jpeg";

export default function Sheen() {
  return (
    <div className="sheen">
      <Accordion.Item eventKey="12">
        <Accordion.Header>ش</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={sheen} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Middle of the tongue with the
            middle of the roof of the mouth.
          </p>
          <p>
            <strong>التفشي Al Tafashi</strong> - The sound and breath spreads
            through the mouth.
          </p>
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
          <img className="d-block mx-auto" src={img11a} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
