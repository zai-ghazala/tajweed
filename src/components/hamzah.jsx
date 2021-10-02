import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";

import hamzah from "../assets/audio/hamzah.mp3";
import img1 from "../assets/1/1.jpeg";
import img2 from "../assets/1/2.jpeg";
import img4 from "../assets/1/4.jpeg"

export default function Hamzah() {
  return (
    <div className="hamzah">
      <Accordion.Item eventKey="27">
        <Accordion.Header>ء</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={hamzah} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Furthest part, from the vocal
            chords.
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
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img1} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img2} />
              <Carousel.Caption>
                <p>When ه is sakinah, the vocal chords are partially open</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img4} />
              <Carousel.Caption>
                <p>When ء and ه are mutharrikah, vocal chords are all open.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
