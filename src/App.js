import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import User from "./components/User";
import ThemeContainer from "./components/ThemeContainer";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <ThemeContainer>
          <Router>
            <header>
              <Header />
            </header>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/user/:id">
                <User />
              </Route>
              <Route path="/about">
                <AboutUs />
              </Route>
              <Route path="*">
                <Home />
              </Route>
            </Switch>
            <footer style={{ textAlign: "center" }}>
              <a href="https://github.com/melihsahtulek/">by melihsahtulek</a>
            </footer>
          </Router>
        </ThemeContainer>
      </div>
    </ThemeProvider>
  );
};

export default App;
