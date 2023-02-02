import './App.css';
import { Routes, Route } from "react-router-dom";
import PetsTable from './Views/PetsTable/PetsTable';
import PetForm from './Views/PetForm/PetForm';
import PetDetails from './Views/PetForm/PetDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/mascotas' element={<PetsTable/>} />
        <Route path='/crear-mascota' element={<PetForm/>} />
        <Route path='/crear-mascota/:id' element={<PetForm/>} />
        <Route path='/detalle-mascota/:id' element={<PetDetails/>} />

      </Routes>
    </div>
  );
}

export default App;
