import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from '@wzhonggo/react-h5-audio-player';
import '@wzhonggo/react-h5-audio-player/lib/styles.css';

export default function Khaa() {
  return (
    <div className="khaa">
      <Accordion.Item eventKey="6">
        <Accordion.Header>خ</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer   
          
          src="/assets/audio/khaa.mp3"
          onPlay={e => console.log("onPlay")} 
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="/throat">Throat letter</Link> – Closest to the mouth
          </p>
          <p>
            Note that the tongue is dipped in the middle so the sound is
            directed up to produce a heavy sound
          </p>
          <hr />
         <p>
            <Link href="/hams"><span className="arabic">الهمس</span> Al Hams</Link>
          </p>
        <p>
            <Link href="/rikawah"><span className="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
          <p>
            <Link href="/istila"><span className="arabic">الإستــعلاء</span> Al Isti’la</Link></p>
           <p>
            <Link href="/infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          </div>
          <img className="d-block mx-auto articulation-point" src="/assets/diagrams/khaa.png" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
