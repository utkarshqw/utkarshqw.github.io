import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';

import Project from './Component/Project';
import Intro from './Component/intro';
import Skill from './Component/skill';
import Contact from './Component/contact';
import Email from './Component/Email';
import Calender from './Component/Calender';
import GitHubCalendar from 'react-github-calendar';
import Github from './Component/Github';
import Stats from './Component/Stats';

function App() {
  return (
    <div className="App">
    <div style={{height:"70px"}}></div>
     


     
     
     <Navbar/>
     <Intro/>
     <Skill/>
     <Project/>
                           {/* <Calender/> */}
     <Github/>
     <Stats/>
     <Contact/>
     
     
     
    
    

    
    </div>
  );
}

export default App;
