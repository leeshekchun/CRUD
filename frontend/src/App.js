import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Owner from './Owner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Owner/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
