import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";

import waw from "../assets/audio/waw.mp3";
import img30 from "../assets/1/30.jpeg";
import img31 from "../assets/1/31.jpeg";

export default function Waw() {
  return (
    <div className="waw">
      <Accordion.Item eventKey="25">
        <Accordion.Header>و</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={waw} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Lip letter</strong> - Ghair madiya. Lips make a round
            circle.
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
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img30} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img31} />
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
