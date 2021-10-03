import React from "react";
import { Router, Link } from "wouter";

import home from "./assets/home.png";
import ReloadPrompt from "./components/reload-prompt";
import AddToHomescreen from 'react-add-to-homescreen';

/**
 * This code defines the react app
 *
 * Imports the router functionality to provide page navigation
 * Defines the Home function outlining the content on each page
 * Content specific to each page (Home and About) is defined in their components in /pages
 * Each page content is presented inside the overall structure defined here
 * The router attaches the page components to their paths
 */

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

handleAddToHomescreenClick = () => {
  alert(`
    1. Open Share menu
    2. Tap on "Add to Home Screen" button`);
};

// Home function that is reflected across the site
export default function Home() {

  return (
    <Router hook={useHashLocation}>
      <Seo />
      <main role="main" className="wrapper">
      <ReloadPrompt />
      <AddToHomescreen onAddToHomescreenClick={this.handleAddToHomescreenClick} />
      <div className="return">
      <Link href="/"><a><img src={home} alt="home"/></a></Link></div>
      <div className="content"><PageRouter /></div>
      </main>
    </Router>
  );
}
