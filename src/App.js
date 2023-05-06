import './App.css';
import Home from './pages/Home';
import { Navbar } from './pages/Navbar';
import { Routes, Route } from "react-router-dom";
import Search from './pages/Search';
import Notif from './pages/Notif';
import Pesan from './pages/Pesan';
import './font.css'
import { HomeProvider } from './Context/Home-context';
import { NotifProvider } from './Context/Notif-context';
import { NavProvider } from './Context/Nav-context';
import { Sidebar } from './pages/Sidebar';
import Profil from './pages/Profil';
import { ProfilProvider } from './Context/Profil-context';


function App() {
  return (
    <div className="font-saya">
      <Navbar />
      <NavProvider>
      <Sidebar />
      <ProfilProvider>
      <HomeProvider>
      <NotifProvider>
        <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='search' element={<Search />} />
              <Route path='notif' element={<Notif />} />
              <Route path='pesan' element={<Pesan />} />
              <Route path='profil' element={<Profil />} />
            </Routes>
        </div>
      </NotifProvider>
      </HomeProvider>
      </ProfilProvider>
      </NavProvider>
    </div>
  );
}

export default App;
