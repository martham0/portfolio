import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './assets/sass/main.scss';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './component/Footer';
import skills from './assets/img/skills.png';
import project from './assets/img/projects.png';
import home from './assets/img/home.png';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="Navi">
            <ul>
              <li>
                <Link to="/">
                  {' '}
                  <img src={home} alt="Home" />
                </Link>
              </li>
              <li>
                <Link to="/skills">
                  <img src={skills} alt="Skills" />
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <img src={project} alt="Projects" />
                </Link>
              </li>
              <li></li>
            </ul>
          </nav>

          <Switch>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;
