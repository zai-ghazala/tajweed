import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "wouter";

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
            circle
          </p>
          <p>
            <Link href="leen"><span className="arabic">اللین</span> Al Leen</Link></p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
        <p>
            <Link href="rikawah"><span className="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
         <p>
            <Link href="istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
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
