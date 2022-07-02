import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AllPets from "./components/Pets/AllPets";
import Dashboard from "./components/dashboard/dashboard";
function App() {
  return (
    <Router>
      <Sidebar />
      {/* <AllPets /> */}
      <Routes>
        <Route path="/" element = {<Dashboard/>} />
        <Route exact path="/pets/all-pets" element = {<AllPets/>} />
      </Routes>
    </Router>
  );
}

// const App = () => {
//   return ( 
//     <Router>
//       <Sidebar/>
//       <Routes>
//         <Route exact path='/' element={<Dashboard/>}/>
//         <Route exact path='/pets/all-pets' element={<AllPets/>}/>
//       </Routes>
//     </Router>
//   )
// }
export default App;
