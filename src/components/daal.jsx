import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import daal from "../assets/audio/daal.mp3";
import img27 from "../assets/1/27.jpeg";

export default function Daal() {
  return (
    <div className="daal">
      <Accordion.Item eventKey="7">
        <Accordion.Header>د</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={daal} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Where the extreme tip of the tongue
            touches the roots of the top front teeth.
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
            - All letters except{" "}
            <span className="inline-block">
              {" "}
              <span className="inline-block">خص ضغط قظ</span>{" "}
            </span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> -{" "}
            <b>Sound is not retained in the mouth</b> - All letters except ص ض ط
            ظ
          </p>
          <img className="d-block mx-auto" src={img27} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
