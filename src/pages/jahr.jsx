import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Baa from "../components/baa";
import Jeem from "../components/jeem";
import Daal from "../components/daal";
import Zaal from "../components/zaal";
import Raa from "../components/raa";
import Zaai from "../components/zaai";
import Duad from "../components/duad";
import TaaHeavy from "../components/taa-heavy";
import ZaaHeavy from "../components/zaa-heavy";
import Ain from "../components/ain";
import Gain from "../components/gain";
import Qaaf from "../components/qaaf";
import Laam from "../components/laam";
import Meem from "../components/meem";
import Noon from "../components/noon";
import Waw from "../components/waw";
import Hamzah from "../components/hamzah";
import Yaa from "../components/yaa";

export default function Jahr() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
    <h1>Al Jahr</h1>
    <p>
    <b>No airflow</b></p><p>All letters
            except {" "}<span className="inline-block">فحثه شخص سكت</span>
    </p>
    </div>
    <Accordion>
      <Baa/>
      <Jeem/>
      <Daal/>
      <Zaal/>
      <Raa/>
      <Zaai/>
      <Duad/>
      <TaaHeavy/>
      <ZaaHeavy/>
      <Ain/>
      <Gain/>
      <Qaaf/>
      <Laam/>
      <Meem/>
      <Noon/>
      <Waw/>
      <Hamzah/>
      <Yaa/>
    </Accordion>
  </>
  );
}
