
import './App.css';
import Homepage from './Homepage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Singlegame from './Singlegame';
import Topic from './Topic';


function App() {
  return (
    <BrowserRouter>
    <Topic/>
    <Routes>
      <Route path='/' element={<Homepage></Homepage>}/>
      <Route path='/:id' element={<Singlegame></Singlegame>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
