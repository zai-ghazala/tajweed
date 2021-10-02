import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import taaHeavy from "../assets/audio/taa-heavy.mp3";
import img27a from "../assets/1/27a.jpeg"

export default function TaaHeavy() {
  return (
    <div className="taa-heavy">
      <Accordion.Item eventKey="15">
        <Accordion.Header>ط</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={taaHeavy} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Where the extreme tip of the tongue
            touches the roots of the top front teeth.
          </p>{" "}
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped.
          </p>
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
            <strong>الشدۃ Al Shiddah</strong> -{" "}
            <b>Sound is not allowed to flow</b> -{" "}
            <span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span> “Ajid Qatin
            Bakath”
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
          <img className="d-block mx-auto" src={img27a} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
