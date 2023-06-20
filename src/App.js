import './App.css';
import { Nav } from './component/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Firstpara } from './component/Firstpara';
import { Projects } from './component/Projects';
import { Skills } from './component/Skills';
import { Contact } from './component/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Firstpara/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
