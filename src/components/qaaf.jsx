import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import qaaf from "../assets/audio/qaaf.mp3";
import img7 from "../assets/1/7.jpeg";

export default function Qaaf() {
  return (
    <div className="qaaf">
      <Accordion.Item eventKey="20">
        <Accordion.Header>ق</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={qaaf} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Back of the tongue touching the
            soft fleshy part of roof of the mouth.
          </p>
          <p>The tongue is dipped in the middle.</p>
          <p>
            <strong>القلقلھ Al Qalqala</strong> - ق ط ب ج د Bouncing of the
            sound from the makhraj in these sakinah letters after shiddah
            occurs.
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
            <strong>الانفتاح Al Infitah</strong> -{" "}
            <b>Sound is not retained in the mouth</b> - All letters except ص ض ط
            ظ
          </p>
          <img className="d-block mx-auto" src={img7} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
