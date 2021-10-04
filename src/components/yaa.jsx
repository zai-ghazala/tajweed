import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import yaa from "../assets/audio/yaa.wav";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import img11 from "../assets/1/11.jpeg";

export default function Yaa() {
  return (
    <div className="yaa">
      <Accordion.Item eventKey="28">
        <Accordion.Header>ي</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src={yaa}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
          <p>
            <Link href="tongue">Tongue letter</Link> - Ghair madiya. Middle of the tongue with the
            middle of the roof of the mouth
          </p>
         <p>
            <Link href="leen"><span className="arabic">اللین</span> Al Leen</Link></p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
        <p>
            <Link href="rikawah"><span className="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
         <p>
            <Link href="istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img11} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
