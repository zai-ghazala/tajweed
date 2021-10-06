import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "wouter";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Waw() {
  return (
    <div className="waw">
      <Accordion.Item eventKey="25">
        <Accordion.Header>و</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src="/assets/audio/waw.wav"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
          <p>
            <Link href="lips">Lip letter</Link> - Ghair madiya. Lips make a round
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
              <img className="d-block mx-auto articulation-point" src="/assets/diagrams/waw.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src="31.jpeg" />
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
