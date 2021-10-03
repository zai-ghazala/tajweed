import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Baa from "../components/baa";
import Taa from "../components/taa";
import Saa from "../components/saa";
import Jeem from "../components/jeem";
import Haa from "../components/haa";
import Daal from "../components/daal";
import Zaal from "../components/zaal";
import Raa from "../components/raa";
import Zaai from "../components/zaai";
import Seen from "../components/seen";
import Sheen from "../components/sheen";
import Ain from "../components/ain";
import Faa from "../components/faa";
import Kaaf from "../components/kaaf";
import Laam from "../components/laam";
import Meem from "../components/meem";
import Noon from "../components/noon";
import Waw from "../components/waw";
import SmallHaa from "../components/small-haa";
import Hamzah from "../components/hamzah";
import Yaa from "../components/yaa";

export default function Istifal() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
      <h1><span class="arabic">الاستفال</span> Al Istifal </h1> <p><b>Sound is directed downwards and outwards which gives the sound the
              quality of tarqeeq which is a lightness
            </b></p><p>
            All letters <span class="except">except</span> {" "}<span className="inline-block arabic">خص ضغط قظ</span>{" "}
          </p>
          </div>
    <Accordion>
      <Baa/>
      <Taa/>
      <Saa/>
      <Jeem/>
      <Haa/>
      <Daal/>
      <Zaal/>
      <Raa/>
      <Zaai/>
      <Seen/>
      <Sheen/>
      <Ain/>
      <Faa/>
      <Kaaf/>
      <Laam/>
      <Meem/>
      <Noon/>
      <Waw/>
      <SmallHaa/>
      <Hamzah/>
      <Yaa/>
    </Accordion>
    </>
  );
}
