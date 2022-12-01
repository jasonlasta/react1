import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrouserRouter as Router, Switch, Route} from 'react-router-dom'



function App() {
  return (
   
    <div className='App'>
      <header>
    <NavBar />
      </header>
      <body>
    <ItemListContainer />
      </body>
      
    
  
    </div>
  );
}

export default App;
