import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import Suad from "../components/suad";
import Duad from "../components/duad";
import TaaHeavy from "../components/taa-heavy";
import ZaaHeavy from "../components/zaa-heavy";

export default function Itbaq() {
  return (
    <>
    <div className="tajweed-group">
    <h1>الاطباق Al Itbaq</h1><p><b>Sound is retained between tongue
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
