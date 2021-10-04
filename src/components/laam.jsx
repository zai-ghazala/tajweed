import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "wouter";

import laam from "../assets/audio/laam.wav";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import img13 from "../assets/1/13.jpeg";
import img14 from "../assets/1/14.jpeg";
import img15 from "../assets/1/15.jpeg";
import img16 from "../assets/1/16.jpeg";

export default function Laam() {
  return (
    <div className="laam">
      <Accordion.Item eventKey="22">
        <Accordion.Header>ل</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src={laam}
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
              <img className="d-block mx-auto" src={img15} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img13} />
              <Carousel.Caption>
                <p>Edge of tip of tongue - the yellow area</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img14} />
              <Carousel.Caption>
                <p>Yellow area showing where tongue touches top palate</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img16} />
              <Carousel.Caption>
                <p>When{" "}<span className="arabic">ل</span>{" "}, the tongue is dipped in the middle</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
