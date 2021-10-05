import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Qaaf() {
  return (
    <div className="qaaf">
      <Accordion.Item eventKey="20">
        <Accordion.Header>ق</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src="/assets/audio/qaaf.wav"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
          <p>
            <Link href="tongue">Tongue letter</Link> - Back of the tongue touching the
            soft fleshy part of roof of the mouth
          </p>
          <p>The tongue is dipped in the middle</p>
 <p>
            <Link href="qalqala"><span className="arabic">القلقلة</span> Al Qalqala</Link></p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
          <p>
            <Link href="shiddah"><span className="arabic">الشدۃ</span> Al Shiddah</Link></p>
          <p>
            <Link href="istila"><span className="arabic">الإستــعلاء</span> Al Isti’la</Link></p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src="/assets/diagrams/qaaf.png" />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
