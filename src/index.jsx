import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";


import makeAsyncScriptLoader from "react-async-script";
import KoFi from "./components/ko-fi.jsx";
const AsyncScriptComponent = makeAsyncScriptLoader("https://storage.ko-fi.com/cdn/scripts/overlay-widget.js")(KoFi);
const onLoad = () => console.log("script loaded")

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <AsyncScriptComponent asyncScriptOnLoad={onLoad} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept();
}
