import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";

import raa from "../assets/audio/raa.mp3";
import img23 from "../assets/1/23.jpeg";
import img23a from "../assets/1/23a.jpeg";
import img23b from "../assets/1/23b.jpeg";
import img24 from "../assets/1/24.jpeg";
import img25 from "../assets/1/25.jpeg";

export default function Raa() {
  return (
    <div className="raa">
      <Accordion.Item eventKey="9">
        <Accordion.Header>ر</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={raa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Tip of the tongue.
          </p>
          <p>
            From the tip of the tongue, to what is opposite it, of the gums by
            the two top front teeth, near the makhraj of ن
          </p>
          <p>
            There is a tiny gap in the middle of the tongue – this is where the
            sound comes from, this stops takreer.
          </p>
          <p>
            ر is normally considered a “light” letter. Sound is directed
            outward, so tongue is flat.
          </p>
          <p>
            ر is heavy if the ر has a fatha or dhamma on it, if theر is sakin
            and the letter before it is a fatha or dhamma.
          </p>
          <p>
            Sound is directed to the top of the mouth, so tongue is dipped in
            middle to make sound heavy.
          </p>
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
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img23} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img23a} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img23b} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img24} />
              <Carousel.Caption>
                <p>Normally considered a light letter.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img25} />
              <Carousel.Caption>
                <p>When ر is heavy</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
