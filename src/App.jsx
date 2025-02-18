import MainPage from "./Frontend/MainPage";
import { Route, Routes } from "react-router-dom";
// import Courses from './Frontend/Courses'
import Login from './Frontend/Login'
// import HirePage from './Frontend/HirePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      {/* <Route path="/courses" element={<Courses />}></Route> */}
      {/* <Route path="/explore-program" element={<HirePage />}></Route> */}
    </Routes>
   
  );
}

export default App;