import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import taaHeavy from "../assets/audio/taa-heavy.wav";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import img27a from "../assets/1/27a.jpeg"

export default function TaaHeavy() {
  return (
    <div className="taa-heavy">
      <Accordion.Item eventKey="15">
        <Accordion.Header>ط</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          autoPlay
          src={taaHeavy}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
          <p>
            <strong>Tongue letter</strong> - Where the extreme tip of the tongue
            touches the roots of the top front teeth
          </p>
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped
          </p>
 <p>
            <Link href="qalqala"><span className="arabic">القلقلھ</span> Al Qalqala</Link></p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
 <p>
            <Link href="shiddah"><span className="arabic">الشدۃ</span> Al Shiddah</Link></p>
          <p>
            <Link href="istila"><span className="arabic">الإستــعلاء</span> Al Isti’la</Link></p>
        <p>
            <Link href="itbaq"><span className="arabic">الاطباق</span> Al Itbaq</Link></p>
          <img className="d-block mx-auto" src={img27a} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
