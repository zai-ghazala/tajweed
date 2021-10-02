import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import meem from "../assets/audio/meem.mp3";
import img33 from "../assets/1/33.jpeg";

export default function Meem() {
  return (
    <div className="meem">
     <Accordion.Item eventKey="23">
        <Accordion.Header>م</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={meem} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Lip letter</strong> - Lips come together.
          </p>
          <p>Hold lips for longer than ب </p>
          <p>
            Sound comes from the lip makhraj, for the م sound also comes from
            the nose.
          </p>
          <p>Tongue relaxed as normal.</p>
          <p>
            <strong>الغنھ Al Ghunna</strong> - م and ن Sound running through the
            nasal cavity – this completes ن م{" "}
          </p>
          <hr />
          <p>
            <strong>الجھر Al Jahr</strong> - <b>No airflow</b> - All letters
            except <span className="inline-block">فحثه شخص سكت</span>{" "}
            “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>توسط Al Tawassut / البينية Al Bayniyyah</strong> -{" "}
            <b>Sound is not allowed to flow nor shortened</b> - The letters{" "}
            <span className="inline-block">لن عمر</span> “Lin ‘Umar”
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
          <img className="d-block mx-auto" src={img33} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
