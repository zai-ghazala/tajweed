
import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import jeem from "../assets/audio/jeem.wav";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import img11b from "../assets/1/11b.jpeg";

export default function Jeem() {
    return (
    <div className="jeem">
     <Accordion.Item eventKey="4">
      <Accordion.Header>ج</Accordion.Header>
      <Accordion.Body>
      <AudioPlayer
          
          src={jeem}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
        <p>
          <Link href="tongue">Tongue letter</Link> - Middle of the tongue with the
          middle of the roof of the mouth
        </p>
        <p>
            <Link href="qalqala"><span className="arabic">القلقلھ</span> Al Qalqala</Link>
        </p>
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
        <img className="d-block mx-auto" src={img11b} />
      </Accordion.Body>
    </Accordion.Item>
</div>
);
}
