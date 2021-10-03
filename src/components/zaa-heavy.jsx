import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import zaaHeavy from "../assets/audio/zaa-heavy.wav";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import img28a from "../assets/1/28a.jpeg"

export default function ZaaHeavy() {
  return (
    <div className="zaa-heavy">
      <Accordion.Item eventKey="16">
        <Accordion.Header>ظ</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          autoPlay
          src={zaaHeavy}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
          <p>
            <strong>Tongue letter</strong> - Tip of the tongue touching the
            bottom edges of the front two teeth
          </p>
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped
          </p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
        <p>
            <Link href="rikawah"><span className="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
          <p>
            <Link href="istila"><span className="arabic">الإستــعلاء</span> Al Isti’la</Link></p>
        <p>
            <Link href="itbaq"><span className="arabic">الاطباق</span> Al Itbaq</Link></p>
          <img className="d-block mx-auto" src={img28a} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
