import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";

import smallHaa from "../assets/audio/small-haa.mp3";
import img1 from "../assets/1/1.jpeg";
import img3 from "../assets/1/3.jpeg";
import img4 from "../assets/1/4.jpeg";

export default function SmallHaa() {
  return (
    <div className="small-haa">
     <Accordion.Item eventKey="26">
        <Accordion.Header>ه</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={smallHaa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Furthest part, from the vocal
            chords.
          </p>
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
              <img className="d-block mx-auto" src={img3} />
              <Carousel.Caption>
                <p>When ء is sakinah, the vocal chords are closed.</p>
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
