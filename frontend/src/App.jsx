import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import GameLogSection from './components/GameLogSection'
import ThemeSelection from './components/ThemeSelection'
import CreateRoomLobby from './components/CreateRoomLobby';
import GameScreen from './components/GameScreen';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='gameLog' element={<GameLogSection />} />
        <Route path='themeSelection' element={<ThemeSelection />} />
        <Route path='/gameLobby' element={<CreateRoomLobby />} />
        <Route path='/game' element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
