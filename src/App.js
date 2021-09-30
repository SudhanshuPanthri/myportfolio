import './App.css';
import {BrowserRouter as Router,Switch,Route,useLocation} from 'react-router-dom'
import Home from './components/Home';
import Projects from './components/Projects';
import Project from './components/Project';
import {AnimatePresence} from 'framer-motion'
function App() {
  const location=useLocation()
  return (
    <>
      <AnimatePresence exitBeforeEnter>
       <Switch location={location} key={location.key}>
         <Route path='/' exact component={Home}/>
         <Route path='/projects' exact component={Projects} />
         <Route path='/projects/:id'exact component={Project} />
       </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
