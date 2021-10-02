import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import Raa from "../components/raa";
import Laam from "../components/laam";

export default function Inharaf() {
  return (
    <>
    <div className="tajweed-group">
    <p>
    <h1>الانحراف Al Inharaf</h1><p><b>Diverting the sound
    of a letter away from its makhraj. Laam is read away from its
    makhraj and raa moves to a point in its makhraj</b></p>
  </p>
  </div>
    <Accordion>
      <Raa/>
      <Laam/>
    </Accordion>
    </>
  );
}
