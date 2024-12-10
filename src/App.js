import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Component/NavigationBar';
import HomePage from './Component/HomePage';
import NewBike from './Component/NewBike';
import UsedBike from './Component/UsedBike';
import Accessory from './Component/Accessory';
import Create from './Component/Create';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newbike" element={<NewBike/>}/>
        <Route path="/usedbike" element={<UsedBike/>}/>
        <Route path="/accessory" element={<Accessory/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </Router>
  );
}

export default App;
