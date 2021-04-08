import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/views/Main";

function App() {
  return (
    <Router>
      <Route path="/" component={Main}></Route>
    </Router>
  );
}

export default App;
