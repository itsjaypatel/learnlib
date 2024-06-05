import './App.css'
import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { LogoutPage } from './pages/LogoutPage';
import { SpaceDetailPage } from './pages/SpaceDetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/'>
           <Route path="" element={<HomePage/>}/>
            <Route path="home" element={<HomePage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
            <Route path='profile' element={<ProfilePage/>}/>
            <Route path='logout' element={<LogoutPage/>}/>
            <Route path='space-detail/:spaceId' element={<SpaceDetailPage/>}/>
            <Route path='*' element={<h2>Page Not Found</h2>}/>
          </Route>
          {/* <Route path='/'>
            <Route element={<HomePage/>}></Route>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
            <Route path='profile' element={<ProfilePage/>}/>
            <Route path='logout' element={<LogoutPage/>}/>
            <Route path='space-detail/:spaceId' element={<SpaceDetailPage/>}/>
            <Route path='*' element={<h2>Page Not Found</h2>}/>
          </Route> */}
      </Routes>
    </div>
  );
}

export default App;
