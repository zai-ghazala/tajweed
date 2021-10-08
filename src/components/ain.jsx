import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Ain() {
  return (
    <div className="ain">
      <Accordion.Item eventKey="17">
        <Accordion.Header>ع</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src="/assets/audio/ain.wav"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="throat">Throat letter</Link> – Middle of the throat, epiglottis,
            what stops food going into our windpipe when we eat
          </p>
          <p>Tongue is flat</p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
          <p>
            <Link href="tawassut"><span className="arabic">التوسط</span> Al Tawassut / <span className="arabic">البينية</span> Al Bayniyyah</Link>
          </p>
  <p>
            <Link href="istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          </div>
          <img className="d-block mx-auto articulation-point" src="/assets/diagrams/ain.jpg" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
