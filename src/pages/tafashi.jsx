import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import Sheen from "../components/sheen";

export default function Tafashi() {
  return (
    <>
    <div className="tajweed-group">
       <h1>الاستطال Al Istitaala</h1><p><b>
    The sound and breath spreads through the mouth</b></p>
       </div>
    <Accordion>
      <Sheen/>
    </Accordion>
    </>
  );
}
