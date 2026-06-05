import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";
import { PokemonPage } from "./03-examples/PokemonPage";

// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useState/TrafficLight";

import "./index.css";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    <PokemonPage />
  </StrictMode>,
);
