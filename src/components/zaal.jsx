import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from '@wzhonggo/react-h5-audio-player';
import '@wzhonggo/react-h5-audio-player/lib/styles.css';

export default function Zaal() {
  return (
    <div className="zaal">
      <Accordion.Item eventKey="8">
        <Accordion.Header>ذ</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src="/assets/audio/zaal.wav"
          onPlay={e => console.log("onPlay")} 
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="/tongue">Tongue letter</Link> – Tip of the tongue touching the
            bottom edges of the top front teeth
          </p>
          <p>Flat tongue as normal</p>
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
          <img className="d-block mx-auto articulation-point" src="/assets/diagrams/zaal.png" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
