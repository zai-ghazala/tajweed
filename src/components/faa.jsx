import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Faa() {
  return (
    <div className="faa">
      <Accordion.Item eventKey="19">
        <Accordion.Header>ف</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src="/assets/audio/faa.wav"
          onPlay={e => console.log("onPlay")} 
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="/lips">Lip letter</Link> – The edge of the front top teeth
            touching the inside lower lip
          </p>
         <p>
            <Link href="/hams"><span className="arabic">الهمس</span> Al Hams</Link>
          </p>
          <hr />
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
          <img className="d-block mx-auto articulation-point" src="/assets/diagrams/faa.png"/>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
