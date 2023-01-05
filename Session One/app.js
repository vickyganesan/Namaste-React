import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="title" key="heading1">
    React Heading
  </h1>
);

const heading2 = (
  <h1 id="title2" key="heading2">
    React Heading again too
  </h1>
);

const container = (
  <div>
    {heading}
    {heading2}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
