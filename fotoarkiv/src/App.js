import "./App.css";
import {Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {getCurrentUser} from './services/loginService';
import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Home from "./routes/Home";
import LoginForm from "./routes/LoginForm";
import Logout from "./routes/Logout";
import Users from "./routes/Users";
import CreateUser from "./routes/CreateUser";
import Result from "./routes/Result";
import Upload from "./routes/Upload";

function App() {

  const [User, setUser] = useState({});

  useEffect (() => {
    setUser(getCurrentUser());
    console.log(User.name);
  }, []);

  return (
    <div className="App">
      <Menu user={User}/>
      
        <ToastContainer />
        <Routes>
          <Route path="/users" element={<Users/>}/>
          <Route path="/createuser" element={<CreateUser/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/" element={<Home user={User} />}/>
        </Routes>
  
    </div>
  );
}

export default App;
