// import './App.css';
// import {Home} from './page/Home'
import { Route,Routes } from 'react-router-dom';
import {LandingPage} from './page/LandingPage'
import { Register } from "./page/Register";
import  CreateBlog from "./page/CreateBlog";
import Verification from './page/Verfy';



function App() {
  const url = window.location.href.split("/");
  const token = url[url.length - 1];

  return (
    <div className="App">
      
    <Routes>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route exact path="/write" element={<CreateBlog />}></Route>
      <Route exact path="/register" element={<Register />}></Route>
      <Route exact path= {`verification/${token}`}  element={<Verification />} />
    </Routes>
    </div>
    




  );
}

export default App;
