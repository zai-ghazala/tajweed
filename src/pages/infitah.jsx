import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Baa from "../components/baa";
import Taa from "../components/taa";
import Saa from "../components/saa";
import Jeem from "../components/jeem";
import Haa from "../components/haa";
import Khaa from "../components/khaa";
import Daal from "../components/daal";
import Zaal from "../components/zaal";
import Raa from "../components/raa";
import Zaai from "../components/zaai";
import Seen from "../components/seen";
import Sheen from "../components/sheen";
import Ain from "../components/ain";
import Gain from "../components/gain";
import Faa from "../components/faa";
import Qaaf from "../components/qaaf";
import Kaaf from "../components/kaaf";
import Laam from "../components/laam";
import Meem from "../components/meem";
import Noon from "../components/noon";
import Waw from "../components/waw";
import SmallHaa from "../components/small-haa";
import Hamzah from "../components/hamzah";
import Yaa from "../components/yaa";

export default function Infitah() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
    <h1>الانفتاح Al Infitah</h1><p><b>Sound is not retained in the mouth</b></p><p>All letters except ص ض ط ظ</p>  
    </div>  
    <Accordion>
      <Baa/>
      <Taa/>
      <Saa/>
      <Jeem/>
      <Haa/>
      <Khaa/>
      <Daal/>
      <Zaal/>
      <Raa/>
      <Zaai/>
      <Seen/>
      <Sheen/>
      <Ain/>
      <Gain/>
      <Faa/>
      <Qaaf/>
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
