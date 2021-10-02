import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import Meem from "../components/meem";
import Noon from "../components/noon";

export default function Ghunna() {
  return (
    <>
    <div className="tajweed-group">
    <h1>Al Ghunna</h1>
    <p>
    <b>Sound is allowed to flow</b></p><p>Except
            <span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span> “Ajid Qatin
            Bakath” and <span className="inline-block">لن عمر</span> “Lin ‘Umar”
            all the remaining letters.
          </p>
    </div>
    <Accordion>
      <Meem/>
      <Noon/>
    </Accordion>
    </>
  );
}
