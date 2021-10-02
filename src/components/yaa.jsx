import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import yaa from "../assets/audio/yaa.mp3";
import img11 from "../assets/1/11.jpeg";

export default function Yaa() {
  return (
    <div className="yaa">
      <Accordion.Item eventKey="28">
        <Accordion.Header>ي</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={yaa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Middle of the tongue with the
            middle of the roof of the mouth.
          </p>
          <p>
            <strong>اللین Al Leen</strong> - ي and و sakinah preceded with
            fatha. Pronouncing the letter with ease, without jerking or raising
            the voice.
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
          <img className="d-block mx-auto" src={img11} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
