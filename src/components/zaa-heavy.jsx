import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import zaaHeavy from "../assets/audio/zaa-heavy.mp3";
import img28a from "../assets/1/28a.jpeg"

export default function ZaaHeavy() {
  return (
    <div className="zaa-heavy">
      <Accordion.Item eventKey="16">
        <Accordion.Header>ظ</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={zaaHeavy} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Tip of the tongue touching the
            bottom edges of the front two teeth.
          </p>{" "}
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped.
          </p>
          <hr />
          <p>
            <strong>الجھر Al Jahr</strong> - <b>No airflow</b> - All letters
            except <span className="inline-block">فحثه شخص سكت</span>{" "}
            “Fa-hathu-hu shakhsun sakath”
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
          <img className="d-block mx-auto" src={img28a} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
