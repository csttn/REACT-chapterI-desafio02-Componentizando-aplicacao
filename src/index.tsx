import { render } from "react-dom";

import { App } from "./App";
import { ShowFilmsProvider } from "./context/ShowFilmsContext";

render(
  <ShowFilmsProvider>
    <App />
  </ShowFilmsProvider>,

  document.getElementById("root")
);
