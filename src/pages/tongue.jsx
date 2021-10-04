import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Taa from "../components/baa";
import Saa from "../components/saa";
import Jeem from "../components/jeem";
import Daal from "../components/daal";
import Zaal from "../components/zaal";
import Raa from "../components/raa";
import Zaai from "../components/zaai";
import Seen from "../components/seen";
import Sheen from "../components/sheen";
import Suad from "../components/suad";
import Duad from "../components/duad";
import TaaHeavy from "../components/taa-heavy";
import ZaaHeavy from "../components/zaa-heavy";
import Qaaf from "../components/qaaf";
import Kaaf from "../components/kaaf";
import Laam from "../components/laam";
import Noon from "../components/noon";
import Yaa from "../components/yaa";

export default function Tongue() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
    <p>
    <h1>Tongue Letters</h1>
  </p>
  </div>
    <Accordion>
      <Taa/>
      <Saa/>
      <Jeem/>
      <Daal/>
      <Zaal/>
      <Raa/>
      <Zaai/>
      <Seen/>
      <Sheen/>
      <Suad/>
      <Duad/>
      <TaaHeavy/>
      <ZaaHeavy/>
      <Qaaf/>
      <Kaaf/>
      <Laam/>
      <Noon/>
      <Yaa/>
    </Accordion>
    </>
  );
}
