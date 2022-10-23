import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "wouter";

import AudioPlayer from '@wzhonggo/react-h5-audio-player';
import '@wzhonggo/react-h5-audio-player/lib/styles.css';

export default function Waw() {
  return (
    <div className="waw">
      <Accordion.Item eventKey="25">
        <Accordion.Header>و</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer autoPlay 
          
          src="/assets/audio/waw.mp3"
          onPlay={e => console.log("onPlay")} 
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="/lips">Lip letter</Link> – Lips make a round
            circle
          </p>
          <p>
            <Link href="/leen"><span className="arabic">اللین</span> Al Leen</Link></p>
          <hr />
          <p>
            <Link href="/jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
        <p>
            <Link href="/rikawah"><span className="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
         <p>
            <Link href="/istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="/infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          </div>
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto articulation-point" src="/assets/diagrams/waw.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto diagram-small" src="/assets/images/31.jpeg" />
            </Carousel.Item>
          </Carousel>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
