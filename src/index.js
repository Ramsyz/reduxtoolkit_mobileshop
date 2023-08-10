import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";
import { Store } from "./Redux/Store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
