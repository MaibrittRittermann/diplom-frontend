import "./App.css";
import {Routes, Route} from 'react-router-dom';
import { Container } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import {getCurrentUser} from './services/loginService';
import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Home from "./routes/Home";
import LoginForm from "./routes/LoginForm";
import Logout from "./routes/Logout";
import Users from "./routes/Users";
import CreateUser from "./routes/CreateUser";
import Search from "./routes/Search";
import Upload from "./routes/Upload";

function App() {

  const [User, setUser] = useState({});

  useEffect (() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <div className="App">
      <Menu user={User}/>
        <header className="App-header">
          <Container>
            <h3 className="py-5 text-light">Find pressefotos</h3>
          </Container>
        </header>
      <Container>
        <ToastContainer />
        <Routes>
          <Route path="/users" element={<Users/>}/>
          <Route path="/createuser" element={<CreateUser/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
