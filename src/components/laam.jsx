import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";

import laam from "../assets/audio/laam.mp3";
import img13 from "../assets/1/14.jpeg";
import img14 from "../assets/1/14.jpeg";
import img15 from "../assets/1/15.jpeg";
import img16 from "../assets/1/16.jpeg";

export default function Laam() {
  return (
    <div className="laam">
      <Accordion.Item eventKey="22">
        <Accordion.Header>ل</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={laam} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Front edge.
          </p>
          <p>
            Touch the edge of tongue with the hard palate in front of the top
            front teeth.
          </p>
          <p>
            ل is only pronounced heavy in the word Allah if it is preceded by a
            fatha or dhamma.
          </p>
          <p>The sound is directed up.</p>
          <p>The tongue is dipped in the middle.</p>
          <p>
            <strong>الانحراف Al Inharaf</strong> - ر and ل Diverting the sound
            of a letter away from its makhraj. Laam is read away from its
            makhraj and raa moves to a point in its makhraj.
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
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img15} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img13} />
              <Carousel.Caption>
                <p>Edge of tip of tongue - the yellow area.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img14} />
              <Carousel.Caption>
                <p>Yellow area showing where tongue touches top palate</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img16} />
              <Carousel.Caption>
                <p>When ل is heavy, the tongue is dipped in the middle.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
