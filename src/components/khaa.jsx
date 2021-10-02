import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import khaa from "../assets/audio/khaa.mp3";
import img6 from "../assets/1/6.jpeg";

export default function Khaa() {
  return (
    <div className="khaa">
      <Accordion.Item eventKey="6">
        <Accordion.Header>خ</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={khaa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Closest to the mouth.
          </p>
          <p>
            Note that the tongue is dipped in the middle so the sound is
            directed up to produce a heavy sound.
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
            <strong>الانفتاح Al Infitah</strong> -{" "}
            <b>Sound is not retained in the mouth</b> - All letters except ص ض ط
            ظ
          </p>
          <img className="d-block mx-auto" src={img6} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
