import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from '@wzhonggo/react-h5-audio-player';
import '@wzhonggo/react-h5-audio-player/lib/styles.css';

export default function TaaHeavy() {
  return (
    <div className="taa-heavy">
      <Accordion.Item eventKey="15">
        <Accordion.Header>ط</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer   
          
          src="/assets/audio/taa-heavy.mp3"
          onPlay={e => console.log("onPlay")} 
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="/tongue">Tongue letter</Link> – Where the extreme tip of the tongue
            touches the roots of the top front teeth
          </p>
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped
          </p>
 <p>
            <Link href="/qalqala"><span className="arabic">القلقلة</span> Al Qalqala</Link></p>
          <hr />
          <p>
            <Link href="/jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
 <p>
            <Link href="/shiddah"><span className="arabic">الشدۃ</span> Al Shiddah</Link></p>
          <p>
            <Link href="/istila"><span className="arabic">الإستــعلاء</span> Al Isti’la</Link></p>
        <p>
            <Link href="/itbaq"><span className="arabic">الاطباق</span> Al Itbaq</Link></p>
            </div>
          <img className="d-block mx-auto articulation-point" src="/assets/diagrams/taa-heavy.png" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
