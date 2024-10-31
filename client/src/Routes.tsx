import { useLocation, Routes, Route } from 'react-router-dom';
import LeftSection from './components/LeftSection/LeftSection';
import Disks from './pages/Disks';
import Documents from './pages/Documents';
import Favorites from './pages/Favorites';
import Files from './pages/Files';
import Home from './pages/Home';
import Images from './pages/Images';
import Login from './pages/Login';
import Protected from './pages/Protected';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import Sound from './pages/Sound';
import Trash from './pages/Trash';
import Video from './pages/Video';

export default function Router() {
  const location = useLocation();
  const showLeftSection =
    location.pathname !== '/login' && location.pathname !== '/sign-up';

  return (
    <>
      {showLeftSection && <LeftSection />}
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/images' element={<Images />} />
        <Route path='/documents' element={<Documents />} />
        <Route path='/sound' element={<Sound />} />
        <Route path='/video' element={<Video />} />
        <Route path='/files' element={<Files />} />
        <Route path='/disks' element={<Disks />} />
        <Route path='/protected' element={<Protected />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/trash' element={<Trash />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </>
  );
}
