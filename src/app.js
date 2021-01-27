import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './assets/sass/main.scss';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import Four0Four from './component/Four0Four';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
            <Route component={Four0Four}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
