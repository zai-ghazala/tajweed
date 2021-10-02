import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

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
            <strong>Tongue letter</strong> - Tip of the tongue.
          </p>
          <p>
            From the tip of the tongue (to what lies opposite it) to the gums,
            slightly below the makhraj of ل
          </p>
          <p>Closer to the front teeth than the laam.</p>
          <p>
            Comes from 2 main areas makhraj – the tongue and the nose, this
            produces the ghunna sifah.
          </p>
          <p>
            <strong>الغنھ Al Ghunna</strong> - م and ن Sound running through the
            nasal cavity – this completes ن م{" "}
          </p>
          <hr />
          <p>
            <strong>الجھر Al Jahr</strong> - <b>No airflow</b> - All letters
            except <span className="inline-block">فحثه شخص سكت</span>{" "}
            “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>توسط Al Tawassut / البينية Al Bayniyyah</strong> -{" "}
            <b>Sound is not allowed to flow nor shortened</b> - The letters{" "}
            <span className="inline-block">لن عمر</span> “Lin ‘Umar”
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> -{" "}
            <b>
              Sound is directed downwards and outwards which gives the sound the
              quality of tarqeeq which is a lightness
            </b>{" "}
            - All letters except <span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> -{" "}
            <b>Sound is not retained in the mouth</b> - All letters except ص ض ط
            ظ
          </p>
          <img className="d-block mx-auto" src={img22} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
