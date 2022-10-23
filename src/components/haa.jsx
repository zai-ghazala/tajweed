import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from '@wzhonggo/react-h5-audio-player';
import '@wzhonggo/react-h5-audio-player/lib/styles.css';

export default function Haa() {
  return (
    <div className="haa">
      <Accordion.Item eventKey="5">
        <Accordion.Header>ح</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer autoPlay 
          
          src="/assets/audio/haa.wav"
          onPlay={e => console.log("onPlay")} 
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="/throat">Throat letter</Link> – Middle of the throat, epiglottis,
            what stops food going into our windpipe when we eat
          </p>

          <p>Tongue is flat</p>
          <hr />
         <p>
            <Link href="/hams"><span className="arabic">الهمس</span> Al Hams</Link>
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
          <img className="d-block mx-auto articulation-point" src="/assets/diagrams/haa.jpg" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
