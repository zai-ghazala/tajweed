import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function ZaaHeavy() {
  return (
    <div className="zaa-heavy">
      <Accordion.Item eventKey="16">
        <Accordion.Header>ظ</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src="/assets/audio/zaa-heavy.wav"
          onPlay={e => console.log("onPlay")} 
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="/tongue">Tongue letter</Link> – Tip of the tongue touching the
            bottom edges of the front two teeth
          </p>
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped
          </p>
          <hr />
          <p>
            <Link href="/jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
        <p>
            <Link href="/rikawah"><span className="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
          <p>
            <Link href="/istila"><span className="arabic">الإستــعلاء</span> Al Isti’la</Link></p>
        <p>
            <Link href="/itbaq"><span className="arabic">الاطباق</span> Al Itbaq</Link></p>
            </div>
          <img className="d-block mx-auto articulation-point" src="/assets/diagrams/zaa-heavy.png"/>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
