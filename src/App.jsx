import ProfileDetails from './components/ProfileDetails/ProfileDetails'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileEditPage from './components/ProfileEditPage/ProfileEditPage';

function App() {
  

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route index element={ <ProfileDetails/>} />
          <Route path="profile" element = {<ProfileDetails />} />
          <Route path='edit' element = {<ProfileEditPage/>} />
        
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
