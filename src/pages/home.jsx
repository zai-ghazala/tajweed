import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";

import img1 from "../assets/1/1.jpeg";
import img2 from "../assets/1/2.jpeg";
import img3 from "../assets/1/3.jpeg";
import img4 from "../assets/1/4.jpeg";
import img5 from "../assets/1/5.jpeg";
import img5a from "../assets/1/5a.jpeg";
import img6 from "../assets/1/6.jpeg";
import img6a from "../assets/1/6a.jpeg";
import img7 from "../assets/1/7.jpeg";
import img8 from "../assets/1/8.jpeg";
import img11 from "../assets/1/11.jpeg";
import img11a from "../assets/1/11a.jpeg";
import img11b from "../assets/1/11b.jpeg";
import img13 from "../assets/1/13.jpeg";
import img14 from "../assets/1/14.jpeg";
import img15 from "../assets/1/15.jpeg";
import img16 from "../assets/1/16.jpeg";
import img19 from "../assets/1/19.jpeg";
import img20 from "../assets/1/20.jpeg";
import img22 from "../assets/1/22.jpeg";
import img23 from "../assets/1/23.jpeg";
import img23a from "../assets/1/23a.jpeg";
import img23b from "../assets/1/23b.jpeg";
import img24 from "../assets/1/24.jpeg";
import img25 from "../assets/1/25.jpeg";
import img26 from "../assets/1/26.jpeg";
import img26a from "../assets/1/26a.jpeg";
import img27 from "../assets/1/27.jpeg";
import img27a from "../assets/1/27a.jpeg";
import img28 from "../assets/1/28.jpeg";
import img28a from "../assets/1/28a.jpeg";
import img29 from "../assets/1/29.jpeg";
import img30 from "../assets/1/30.jpeg";
import img31 from "../assets/1/31.jpeg";
import img32 from "../assets/1/32.jpeg";
import img33 from "../assets/1/33.jpeg";

import baa from "../assets/audio/baa.mp3";
import taa from "../assets/audio/taa.mp3";
import saa from "../assets/audio/saa.mp3";
import jeem from "../assets/audio/jeem.mp3";
import haa from "../assets/audio/haa.mp3";
import khaa from "../assets/audio/khaa.mp3";
import daal from "../assets/audio/daal.mp3";
import zaal from "../assets/audio/zaal.mp3";
import raa from "../assets/audio/raa.mp3";
import zaai from "../assets/audio/zaai.mp3";
import seen from "../assets/audio/seen.mp3";
import sheen from "../assets/audio/sheen.mp3";
import suad from "../assets/audio/suad.mp3";
import duad from "../assets/audio/duad.mp3";
import taaHeavy from "../assets/audio/taa-heavy.mp3";
import zaaHeavy from "../assets/audio/zaa-heavy.mp3";
import ain from "../assets/audio/ain.mp3";
import gain from "../assets/audio/gain.mp3";
import faa from "../assets/audio/faa.mp3";
import qaaf from "../assets/audio/qaaf.mp3";
import kaaf from "../assets/audio/kaaf.mp3";
import laam from "../assets/audio/laam.mp3";
import meem from "../assets/audio/meem.mp3";
import noon from "../assets/audio/noon.mp3";
import waw from "../assets/audio/waw.mp3";
import smallHaa from "../assets/audio/small-haa.mp3";
import hamzah from "../assets/audio/hamzah.mp3";
import yaa from "../assets/audio/yaa.mp3";

export default function Home() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>ا</Accordion.Header>
        <Accordion.Body>
          <p>See ء</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>ب</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={baa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>

          <p>
            <strong>Lip letter</strong> - Lips come together then move apart for
            ب creating a bounce.
          </p>
          <p>Tongue relaxed as normal.</p>
          <p>
            <strong>القلقلھ Al Qalqala</strong> - ق ط ب ج د Bouncing of the
            sound from the makhraj in these sakinah letters after shiddah
            occurs.
          </p>

          <hr />

          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الشدۃ Al Shiddah</strong> - <b>Sound is not allowed to flow</b> -
            {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath”
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>

          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>

          <img className="d-block mx-auto" src={img32} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>ت</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={taa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Where the extreme tip of the tongue
            touches the roots of the top front teeth.
          </p>
          <p>Tongue relaxed as normal.</p>

          <hr />

          <p>
            <strong>الحمص Al Hams</strong> - <b>With airflow</b> - {" "}<span className="inline-block">فحثه شخص سكت</span>{" "}“Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الشدۃ Al Shiddah</strong> - <b>Sound is not allowed to flow</b> -
            {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath”
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img27} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>ث</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={saa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Tip of the tongue touching the
            bottom edges of the front two teeth.
          </p>
          <p>Flat tongue as normal.</p>

          <hr />

          <p>
            <strong>الحمص Al Hams</strong> - <b>With airflow</b> - {" "}<span className="inline-block">فحثه شخص سكت</span>{" "}“Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img28} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>ج</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={jeem} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Middle of the tongue with the
            middle of the roof of the mouth.
          </p>
          <p>
            <strong>القلقلھ Al Qalqala</strong> - ق ط ب ج د Bouncing of the
            sound from the makhraj in these sakinah letters after shiddah
            occurs.
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الشدۃ Al Shiddah</strong> - <b>Sound is not allowed to flow</b> -
            {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath”
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img11b} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>ح</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={haa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Middle of the throat, epiglottis,
            what stops food going into our windpipe when we eat.
          </p>

          <p>Tongue is flat.</p>
          <hr />
          <p>
            <strong>الحمص Al Hams</strong> - <b>With airflow</b> - {" "}<span className="inline-block">فحثه شخص سكت</span>{" "}“Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img5} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>خ</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={khaa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Closest to the mouth.
          </p>
          <p>
            Note that the tongue is dipped in the middle so the sound is
            directed up to produce a heavy sound.
          </p>
          <hr />
          <p>
            <strong>الحمص Al Hams</strong> - <b>With airflow</b> - {" "}<span className="inline-block">فحثه شخص سكت</span>{" "}“Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الإستــعلاء Al Isti’la</strong> - <b>Sound is directed upwards
            between the tongue and the top palate. (Up and inside) This gives
            the letter the quality of tafkheem which is a thick heaviness</b> - The
            following letters {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img6} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>د</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={daal} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Where the extreme tip of the tongue
            touches the roots of the top front teeth.
          </p>
          <p>Tongue relaxed as normal.</p>
          <p>
            <strong>القلقلھ Al Qalqala</strong> - ق ط ب ج د Bouncing of the
            sound from the makhraj in these sakinah letters after shiddah
            occurs.
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الشدۃ Al Shiddah</strong> - <b>Sound is not allowed to flow</b> -
            {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath”
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">{" "}<span className="inline-block">خص ضغط قظ</span>{" "}</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img27} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>ذ</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={zaal} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Tip of the tongue touching the
            bottom edges of the front two teeth.
          </p>{" "}
          <p>Flat tongue as normal.</p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">{" "}<span className="inline-block">خص ضغط قظ</span>{" "}</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img28} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>ر</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={raa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Tip of the tongue.
          </p>
          <p>
            From the tip of the tongue, to what is opposite it, of the gums by
            the two top front teeth, near the makhraj of ن
          </p>
          <p>
            There is a tiny gap in the middle of the tongue – this is where the
            sound comes from, this stops takreer.
          </p>
          <p>
            ر is normally considered a “light” letter. Sound is directed
            outward, so tongue is flat.
          </p>
          <p>
            ر is heavy if the ر has a fatha or dhamma on it, if theر is sakin
            and the letter before it is a fatha or dhamma.
          </p>
          <p>
            Sound is directed to the top of the mouth, so tongue is dipped in
            middle to make sound heavy.
          </p>
          <p>
            <strong>الانحراف Al Inharaf</strong> - ر and ل Diverting the sound
            of a letter away from its makhraj. Laam is read away from its
            makhraj and raa moves to a point in its makhraj.
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">{" "}<span className="inline-block">خص ضغط قظ</span>{" "}</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img23} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img23a} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img23b} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img24} />
              <Carousel.Caption>
                <p>Normally considered a light letter.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img25} />
              <Carousel.Caption>
                <p>When ر is heavy</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>ز</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={zaai} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Extreme tip of the tongue touching
            the inner surface at the lower end of the bottom two front teeth.
          </p>
          <p>Tongue relaxed as normal.</p>
          <p>
            <strong>الصفیر As Safeer</strong> - س ص ز <b>Sound that is caused due
            to the narrow gap above the tongue.</b>
          </p>
          <hr />
          <p>
            <strong>الحمص Al Hams</strong> - <b>With airflow</b> - {" "}<span className="inline-block">فحثه شخص سكت</span>{" "}“Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except{" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "}“Ajid Qatin Bakath” and{" "}<span className="inline-block">لن عمر</span>{" "}“Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img26} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header>س</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={seen} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Extreme tip of the tongue touching
            the inner surface at the lower end of the bottom two front teeth.
          </p>
          <p>Tongue relaxed as normal.</p>
          <p>
            <strong>الصفیر As Safeer</strong> - س ص ز <b>Sound that is caused due
            to the narrow gap above the tongue.</b>
          </p>
          <hr />
          <p>
            <strong>الحمص Al Hams</strong> - <b>With airflow</b> - {" "}<span className="inline-block">فحثه شخص سكت</span>{" "}“Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img26} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="12">
        <Accordion.Header>ش</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={sheen} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Middle of the tongue with the
            middle of the roof of the mouth.
          </p>
          <p>
            <strong>التفشي Al Tafashi</strong> - The sound and breath spreads
            through the mouth.
          </p>
          <hr />
          <p>
            <strong>الحمص Al Hams</strong> - <b>With airflow</b> - {" "}<span className="inline-block">فحثه شخص سكت</span>{" "}“Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img11a} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="13">
        <Accordion.Header>ص</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={suad} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Extreme tip of the tongue touching
            the inner surface at the lower end of the bottom two front teeth.
          </p>
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped.
          </p>
          <p>
            <strong>الصفیر As Safeer</strong> - س ص ز <b>Sound that is caused due
            to the narrow gap above the tongue.</b>
          </p>
          <hr />
          <p>
            <strong>الحمص Al Hams</strong> - <b>With airflow</b> - {" "}<span className="inline-block">فحثه شخص سكت</span>{" "}“Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الإستــعلاء Al Isti’la</strong> - <b>Sound is directed upwards
            between the tongue and the top palate. (Up and inside) This gives
            the letter the quality of tafkheem which is a thick heaviness</b> - The
            following letters {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الاطباق Al Itbaq</strong> - Sound is retained between tongue
            and top palate - ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img26a} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="14">
        <Accordion.Header>ض</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={duad} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Sides of the tongue.
          </p>
          <p>
            Touch the edge of tongue with the hard palate in front of the top
            front teeth.
          </p>
          <p>
            Make contact with the makhraj of ل but then put pressure on sides of
            tongue.
          </p>
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped.
          </p>
          <p>
            <strong>الاستطال Al Istitaala</strong> - The forward movement of the
            tongue stretching from the back to the front.
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الإستــعلاء Al Isti’la</strong> - <b>Sound is directed upwards
            between the tongue and the top palate. (Up and inside) This gives
            the letter the quality of tafkheem which is a thick heaviness</b> - The
            following letters {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الاطباق Al Itbaq</strong> - Sound is retained between tongue
            and top palate - ص ض ط ظ
          </p>
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img20} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img19} />
              <Carousel.Caption>
                <p>
                  Pressure on both sides, but if not possible, then one side.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="15">
        <Accordion.Header>ط</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={taaHeavy} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Where the extreme tip of the tongue
            touches the roots of the top front teeth.
          </p>{" "}
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped.
          </p>
          <p>
            <strong>القلقلھ Al Qalqala</strong> - ق ط ب ج د Bouncing of the
            sound from the makhraj in these sakinah letters after shiddah
            occurs.
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الشدۃ Al Shiddah</strong> - <b>Sound is not allowed to flow</b> -
            {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath”
          </p>
          <p>
            <strong>الإستــعلاء Al Isti’la</strong> - <b>Sound is directed upwards
            between the tongue and the top palate. (Up and inside) This gives
            the letter the quality of tafkheem which is a thick heaviness</b> - The
            following letters {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الاطباق Al Itbaq</strong> - Sound is retained between tongue
            and top palate - ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img27a} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="16">
        <Accordion.Header>ظ</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={zaaHeavy} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Tip of the tongue touching the
            bottom edges of the front two teeth.
          </p>{" "}
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped.
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الإستــعلاء Al Isti’la</strong> - <b>Sound is directed upwards
            between the tongue and the top palate. (Up and inside) This gives
            the letter the quality of tafkheem which is a thick heaviness</b> - The
            following letters {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الاطباق Al Itbaq</strong> - Sound is retained between tongue
            and top palate - ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img28a} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="17">
        <Accordion.Header>ع</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={ain} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Middle of the throat, epiglottis,
            what stops food going into our windpipe when we eat.
          </p>
          <p>Tongue is flat.</p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>توسط Al Tawassut</strong> - <b>Sound is not allowed to flow nor
            shortened</b> - The letters {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img5a} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="18">
        <Accordion.Header>غ</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={gain} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Closest to the mouth.
          </p>
          <p>
            Note that the tongue is dipped in the middle so the sound is
            directed up to produce a heavy sound.
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الإستــعلاء Al Isti’la</strong> - <b>Sound is directed upwards
            between the tongue and the top palate. (Up and inside) This gives
            the letter the quality of tafkheem which is a thick heaviness</b> - The
            following letters {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img6a} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="19">
        <Accordion.Header>ف</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={faa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Lip letter</strong> - The edge of the front top teeth
            touching the inside lower lip.
          </p>
          <p>
            <strong>الحمص Al Hams</strong> - <b>With airflow</b> - {" "}<span className="inline-block">فحثه شخص سكت</span>{" "}“Fa-hathu-hu shakhsun sakath”
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img29} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="20">
        <Accordion.Header>ق</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={qaaf} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Back of the tongue touching the
            soft fleshy part of roof of the mouth.
          </p>
          <p>The tongue is dipped in the middle.</p>
          <p>
            <strong>القلقلھ Al Qalqala</strong> - ق ط ب ج د Bouncing of the
            sound from the makhraj in these sakinah letters after shiddah
            occurs.
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الإستــعلاء Al Isti’la</strong> - <b>Sound is directed upwards
            between the tongue and the top palate. (Up and inside) This gives
            the letter the quality of tafkheem which is a thick heaviness</b> - The
            following letters {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img7} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="21">
        <Accordion.Header>ك</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={kaaf} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Back of the tongue touching where
            the hard part of the roof of the mouth meets the soft part.
          </p>
          <hr />
          <p>
            <strong>الحمص Al Hams</strong> - <b>With airflow</b> - {" "}<span className="inline-block">فحثه شخص سكت</span>{" "}“Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img8} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="22">
        <Accordion.Header>ل</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={laam} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Front edge.
          </p>
          <p>
            Touch the edge of tongue with the hard palate in front of the top
            front teeth.
          </p>
          <p>
            ل is only pronounced heavy in the word Allah if it is preceded by a
            fatha or dhamma.
          </p>
          <p>The sound is directed up.</p>
          <p>The tongue is dipped in the middle.</p>
          <p>
            <strong>الانحراف Al Inharaf</strong> - ر and ل Diverting the sound
            of a letter away from its makhraj. Laam is read away from its
            makhraj and raa moves to a point in its makhraj.
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>توسط Al Tawassut</strong> - <b>Sound is not allowed to flow nor
            shortened</b> - The letters {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img15} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img13} />
              <Carousel.Caption>
                <p>Edge of tip of tongue - the yellow area.</p>
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
                <p>When ل is heavy, the tongue is dipped in the middle.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="23">
        <Accordion.Header>م</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={meem} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Lip letter</strong> - Lips come together.
          </p>
          <p>Hold lips for longer than ب </p>
          <p>
            Sound comes from the lip makhraj, for the م sound also comes from
            the nose.
          </p>
          <p>Tongue relaxed as normal.</p>
          <p>
            <strong>الغنھ Al Ghunna</strong> - م and ن Sound running through the
            nasal cavity – this completes ن م{" "}
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>توسط Al Tawassut</strong> - <b>Sound is not allowed to flow nor
            shortened</b> - The letters {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img33} />
        </Accordion.Body>
      </Accordion.Item>
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
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>توسط Al Tawassut</strong> - <b>Sound is not allowed to flow nor
            shortened</b> - The letters {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
          </p>
          <p>
            <strong>الإستــعلاء Al Isti’la</strong> - <b>Sound is directed upwards
            between the tongue and the top palate. (Up and inside) This gives
            the letter the quality of tafkheem which is a thick heaviness</b> - The
            following letters {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img22} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="25">
        <Accordion.Header>و</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={waw} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Lip letter</strong> - Ghair madiya. Lips make a round
            circle.
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img30} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img31} />
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="26">
        <Accordion.Header>ه</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={smallHaa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Furthest part, from the vocal
            chords.
          </p>
          <p>
            <strong>اللین Al Leen</strong> - ي and و sakinah preceded with
            fatha. Pronouncing the letter with ease, without jerking or raising
            the voice.
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الشدۃ Al Shiddah</strong> - <b>Sound is not allowed to flow</b> -
            {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img1} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img3} />
              <Carousel.Caption>
                <p>When ء is sakinah, the vocal chords are closed.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img4} />
              <Carousel.Caption>
                <p>When ء and ه are mutharrikah, vocal chords are all open.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="27">
        <Accordion.Header>ء</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={hamzah} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Furthest part, from the vocal
            chords.
          </p>
          <hr />
          <p>
            <strong>الحمص Al Hams</strong> - <b>With airflow</b> - {" "}<span className="inline-block">فحثه شخص سكت</span>{" "}“Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img1} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img2} />
              <Carousel.Caption>
                <p>When ه is sakinah, the vocal chords are partially open</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img4} />
              <Carousel.Caption>
                <p>When ء and ه are mutharrikah, vocal chords are all open.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="28">
        <Accordion.Header>ي</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={yaa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Middle of the tongue with the
            middle of the roof of the mouth.
          </p>
          <p>
            <strong>اللین Al Leen</strong> - ي and و sakinah preceded with
            fatha. Pronouncing the letter with ease, without jerking or raising
            the voice.
          </p>
          <hr />
          <p>
            <strong>الجحر Al Jahr</strong> - <b>No airflow</b> - All letters except
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu shakhsun sakath”
          </p>
          <p>
            <strong>الرخاوة Al Rikawah</strong> - <b>Sound is allowed to flow</b> -
            Except {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} “Ajid Qatin Bakath” and {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
            all the remaining letters.
          </p>
          <p>
            <strong>الاستفال Al Istifal </strong> - <b>Sound is directed downwards
            and outwards which gives the sound the quality of tarqeeq which is a
            lightness</b> - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          <p>
            <strong>الانفتاح Al Infitah</strong> - <b>Sound is not retained in the
            mouth</b> - All letters except ص ض ط ظ
          </p>
          <img className="d-block mx-auto" src={img11} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
