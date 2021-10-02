import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import Raa from "../components/raa";
import Ain from "../components/ain";
import Laam from "../components/laam";
import Meem from "../components/meem";
import Noon from "../components/noon";

export default function Tawassut() {
  return (
    <>
    <div className="tajweed-group">
    <h1>توسط Al Tawassut / البينية Al Bayniyyah</h1><p>
    <b>Sound is not allowed to flow nor shortened</b></p><p>The letters 
    {" "}<span className="inline-block">لن عمر</span>{" "} “Lin ‘Umar”
  </p>
  </div>
    <Accordion>
      <Raa/>
      <Ain/>
      <Laam/>
      <Meem/>
      <Noon/>
    </Accordion>
    </>
  );
}
