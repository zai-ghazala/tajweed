import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import seen from "../assets/audio/seen.mp3";
import img26 from "../assets/1/26.jpeg";

export default function Seen() {
  return (
    <div className="seen">
      <Accordion.Item eventKey="11">
        <Accordion.Header>س</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={seen} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Extreme tip of the tongue touching
            the inner surface at the lower end of the bottom two front teeth.
          </p>
          <p>Tongue relaxed as normal.</p>
          <p>
            <strong>الصفیر As Safeer</strong> - س ص ز{" "}
            <b>Sound that is caused due to the narrow gap above the tongue.</b>
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
          <img className="d-block mx-auto" src={img26} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
