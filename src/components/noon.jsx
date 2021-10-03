import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import noon from "../assets/audio/noon.mp3";
import img22 from "../assets/1/22.jpeg";

export default function Noon() {
  return (
    <div className="noon">
      <Accordion.Item eventKey="24">
        <Accordion.Header>ن</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={noon} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Tip of the tongue
          </p>
          <p>
            From the tip of the tongue (to what lies opposite it) to the gums,
            slightly below the makhraj of{" "}<span className="arabic">ل
          </span></p>
          <p>Closer to the front teeth than the {" "}<span className="arabic">ل
          </span></p>
          <p>
            Comes from 2 main areas makhraj – the tongue and the nose, this
            produces the ghunna sifah
          </p>
          <p>
            <Link href="ghunna"><span className="arabic">الغنھ</span> Al Ghunna</Link> 
          </p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
          <p>
            <Link href="tawassut"><span className="arabic">التوسط</span> Al Tawassut / البينية Al Bayniyyah</Link>
          </p>
         <p>
            <Link href="istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img22} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
