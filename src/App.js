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
import ShowAvatar from './pages/Show-Avatar';
import TulisTweet from './pages/Tulis-Tweet';
import EditProfil from './pages/Edit-Profil';
import { EditProfilProvider } from './Context/EditProfil-context';


function App() {
  return (
    <div className="font-saya">
      <Navbar />
      <NavProvider>
      <EditProfilProvider>
      <Sidebar />
      <ProfilProvider>
      <HomeProvider>
      <ShowAvatar />
      <NotifProvider>
        <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='search' element={<Search />} />
              <Route path='notif' element={<Notif />} />
              <Route path='pesan' element={<Pesan />} />
              <Route path='profil' element={<Profil />}/>
              <Route path='/profil/edit-profil' element={<EditProfil />} />
              <Route path='tulis-tweet' element={<TulisTweet />} />
            </Routes>
        </div>
      </NotifProvider>
      </HomeProvider>
      </ProfilProvider>
      </EditProfilProvider>
      </NavProvider>
    </div>
  );
}

export default App;
