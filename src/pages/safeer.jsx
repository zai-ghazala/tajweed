import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import Zaai from "../components/zaai";
import Seen from "../components/seen";
import Suad from "../components/suad";

export default function Safeer() {
  return (
    <>
    <div className="tajweed-group">
    <h1>الصفیر As Safeer</h1><p><b>Sound that is caused due to the narrow gap above the tongue</b></p>
    </div>
    <Accordion>
      <Zaai/>
      <Seen/>
      <Suad/>
    </Accordion>
    </>
  );
}
