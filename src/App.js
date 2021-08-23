import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/MenuBar";
import Home from "./pages/Home";
import ProfDetails from "./pages/ProfDetail";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}/>            
          <Route path="/cour" exact component={ProfDetails}/>
       </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
