import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "wouter";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Laam() {
  return (
    <div className="laam">
      <Accordion.Item eventKey="22">
        <Accordion.Header>ل</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src="/assets/audio/laam.wav"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
          <p>
            <Link href="tongue">Tongue letter</Link> - Front edge
          </p>
          <p>
            Touch the edge of tongue with the hard palate in front of the top
            front teeth
          </p>
          <p>
            <span className="arabic">ل</span>{" "}is only pronounced heavy in the word Allah if it is preceded by a
            fatha or dhamma
          </p>
          <p>The sound is directed up</p>
          <p>The tongue is dipped in the middle</p>
           <p>
            <Link href="inharaf"><span className="arabic">الانحراف</span> Al Inharaf</Link>
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
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto articulation-point" src="/assets/diagrams/laam1.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="articulation-point" src="/assets/diagrams/laam3.png" />
              <Carousel.Caption>
                <p>Edge of tip of tongue - the blue area</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto articulation-point" src="/assets/diagrams/laam2.png" />
              <Carousel.Caption>
                <p>Blue area showing where tongue touches top palate</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src="/assets/diagrams/laam4.jpg" />
              <Carousel.Caption>
                <p>Light <span className="arabic">ل</span>{" "} on the left-hand side</p>
                <p>Heavy <span className="arabic">ل</span>{" "} on the right-hand side</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
