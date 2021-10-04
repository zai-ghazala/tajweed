import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "wouter";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Hamzah() {
  return (
    <div className="hamzah">
      <Accordion.Item eventKey="27">
        <Accordion.Header>ء</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src="/assets/audio/hamzah.wav"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
          <p>
            <Link href="throat">Throat letter</Link> - Furthest part, from the vocal
            chords
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
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src= "/assets/images/1.jpeg" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src= "/assets/images/2.jpeg" />
              <Carousel.Caption>
                <p>When <span className="arabic">ه</span> is sakinah, the vocal chords are partially open</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src= "/assets/images/4.jpeg" />
              <Carousel.Caption>
                <p>When <span className="arabic">ء</span> and <span className="arabic">ه</span> are mutharrikah, vocal chords are all open</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
