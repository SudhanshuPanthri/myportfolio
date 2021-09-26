import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Projects from './components/Projects';
import Project from './components/Project';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/projects' exact component={Projects} />
        <Route path='/projects/:id'exact component={Project} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
