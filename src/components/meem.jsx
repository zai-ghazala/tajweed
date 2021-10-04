import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Meem() {
  return (
    <div className="meem">
     <Accordion.Item eventKey="23">
        <Accordion.Header>م</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src="/assets/audio/meem.wav"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
          <p>
            <Link href="lips">Lip letter</Link> - Lips come together
          </p>
          <p>Hold lips for longer than{" "}<span className="arabic">ب</span></p>
          <p>
            Sound comes from the lip makhraj, for the{" "}<span className="arabic">م</span>{" "}sound also comes from
            the nose
          </p>
          <p>Tongue relaxed as normal</p>
          <p>
            <Link href="ghunna"><span className="arabic">الغنھ</span> Al Ghunna</Link> 
          </p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
          <p>
            <Link href="tawassut"><span className="arabic">التوسط</span> Al Tawassut / <span className="arabic">البينية</span> Al Bayniyyah</Link>
          </p>
         <p>
            <Link href="istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src="/assets/images/33.jpeg" />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
