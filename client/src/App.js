import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Intro from './components/Intro'
import About from './components/About'
import Developer from './components/Developer'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <Header />
            </Grid>
            <Grid item xs={10}>
              <Intro />
              <Body />
            </Grid>
          </Grid>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/developer">
            <Developer />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/">
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;













// return (
//   <div className="App">
//     <Header />
//     <Intro />
//     <Body />
//   </div>
// );