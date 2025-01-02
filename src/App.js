import { Provider } from "react-redux";
import "./App.css";
import Main from "./components/Main";
import appStore from "./utils/appStore";

function App() {
  return <Provider store={appStore}><Main /></Provider>;
}

export default App;
