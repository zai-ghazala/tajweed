import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import suad from "../assets/audio/suad.mp3";
import img26a from "../assets/1/26a.jpeg"

export default function Suad() {
  return (
    <div className="suad">
      <Accordion.Item eventKey="13">
        <Accordion.Header>ص</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={suad} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Extreme tip of the tongue touching
            the inner surface at the lower end of the bottom two front teeth.
          </p>
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped.
          </p>
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
            <strong>الإستــعلاء Al Isti’la</strong> -{" "}
            <b>
              Sound is directed upwards between the tongue and the top palate.
              (Up and inside) This gives the letter the quality of tafkheem
              which is a thick heaviness
            </b>{" "}
            - The following letters{" "}
            <span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الاطباق Al Itbaq</strong> - Sound is retained between tongue
            and top palate - ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img26a} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
