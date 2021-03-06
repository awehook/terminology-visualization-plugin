import React from "react";
import ReactDOM, { render } from "react-dom";
import { store } from "./store";
import ModuleViewer from "./components/module-viewer";

let ws;
try {
  if (window.enableWebSocket) {
    ws = new WebSocket(`ws://${location.host}`);
  }
} catch (err) {
  console.warn(
    "Couldn't connect to websocket server so you'll have to reload page manually to see updates"
  );
}

window.addEventListener("load", () => {
  console.log("load:", window.viewerData);
  store.setData(window.viewerData);
  render(
    <ModuleViewer modules={window.viewerData.modules} />,
    document.getElementById("app")
  );
});
