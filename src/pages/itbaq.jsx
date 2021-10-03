import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Suad from "../components/suad";
import Duad from "../components/duad";
import TaaHeavy from "../components/taa-heavy";
import ZaaHeavy from "../components/zaa-heavy";

export default function Itbaq() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
    <h1><span className="arabic">الاطباق</span> Al Itbaq</h1><p><b>Sound is retained between tongue
    and top palate</b></p>
    </div>
    <Accordion>
      <Suad/>
      <Duad/>
      <TaaHeavy/>
      <ZaaHeavy/>
    </Accordion>
    </>
  );
}
