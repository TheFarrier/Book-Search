import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  document.title = "Google Book search";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path={["/","/search"]} component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
