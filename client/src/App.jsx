import './App.css'
import {Routes, Route} from "react-router-dom";
import Register from "./Auth/RegisterPage.jsx";
import Login from "./Auth/LoginPage.jsx";
import DashAdmin from "./Dashboard/DashAdmin.jsx";
import JoinClassroom from "./Classroom/JoinClassroom.jsx";
import Classroom from "./Classroom/Classroom.jsx";

function App() {

  return (
    <>
      <Routes>
          <Route path={'/register'} element={<Register />}/>
          <Route path={'/login'} element={
              <>
                  <JoinClassroom/>
                  <Login />
              </>
          } />
          <Route path={'/dashboard'} element={<DashAdmin />} />
          <Route path={'/classroom'} element={<Classroom/>} />
      </Routes>
    </>
  )
}

export default App
