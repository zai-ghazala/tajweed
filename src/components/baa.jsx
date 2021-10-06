import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Baa() {
  return (
    <div className="baa">
      <Accordion.Item eventKey="1">
        <Accordion.Header>ب</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src="/assets/audio/baa.wav"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
          <p>
            <Link href="lips">Lip letter</Link> - Lips come together then move apart for{" "}
            <span className="arabic">ب</span>{" "}creating a bounce
          </p>
          <p>Tongue relaxed as normal</p>
 <p>
            <Link href="qalqala"><span className="arabic">القلقلة</span> Al Qalqala</Link></p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
 <p>
            <Link href="shiddah"><span className="arabic">الشدۃ</span> Al Shiddah</Link></p>
         <p>
            <Link href="istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>

           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>

          <img className="d-block mx-auto articulation-point" src="/assets/diagrams/baa.png"/>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
