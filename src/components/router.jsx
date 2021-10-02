import * as React from "react";
import { Switch, Route } from "wouter";
import Home from "../pages/home";
import Ghunna from "../pages/ghunna";
import Hams from "../pages/hams";
import Infitah from "../pages/infitah";
import Istifal from "../pages/istifal";
import Istila from "../pages/istila";
import Istitaala from "../pages/istitaala";
import Itbaq from "../pages/itbaq";
import Jahr from "../pages/jahr";
import Leen from "../pages/leen";
import Qalqala from "../pages/qalqala";
import Rikawah from "../pages/rikawah";
import Safeer from "../pages/safeer";
import Shiddah from "../pages/shiddah";
import Tafashi from "../pages/tafashi";
import Tawassut from "../pages/tawassut";

/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="ghunna" component={Ghunna} />
    <Route path="hams" component={Hams} />
    <Route path="infitah" component={Infitah} />
    <Route path="istifal" component={Istifal} />
    <Route path="istila" component={Istila} />
    <Route path="istitaala" component={Istitaala} />
    <Route path="itbaq" component={Itbaq} />
    <Route path="jahr" component={Jahr} />
    <Route path="leen" component={Leen} />
    <Route path="qalqala" component={Qalqala} />
    <Route path="rikawah" component={Rikawah} />
    <Route path="safeer" component={Safeer} />
    <Route path="shiddah" component={Shiddah} />
    <Route path="tafashi" component={Tafashi} />
    <Route path="tawassut" component={Tawassut} />
  </Switch>
);
