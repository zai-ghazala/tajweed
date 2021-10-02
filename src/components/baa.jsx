import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import baa from "../assets/audio/baa.mp3";
import img32 from "../assets/1/32.jpeg";

export default function Baa() {
  return (
    <div className="baa">
      <Accordion.Item eventKey="1">
        <Accordion.Header>ب</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={baa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Lip letter</strong> - Lips come together then move apart for
            ب creating a bounce.
          </p>
          <p>Tongue relaxed as normal.</p>
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

          <img className="d-block mx-auto" src={img32} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
