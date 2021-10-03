import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "wouter";

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
            chords
          </p>
          <hr />
          <p>
            <Link href="jahr"><span class="arabic">الجھر</span> Al Jahr</Link> 
          </p>
 <p>
            <Link href="shiddah"><span class="arabic">الشدۃ</span> Al Shiddah</Link></p>
         <p>
            <Link href="istifal"><span class="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span class="arabic">الانفتاح</span> Al Infitah</Link>
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
                <p>When ء and ه are mutharrikah, vocal chords are all open</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
