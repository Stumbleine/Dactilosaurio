
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage.js";
import MultiplayerPage from "../src/pages/MultiplayerPage.js";
import PracticePage from "../src/pages/PracticePage.js";
import RoomPage from "../src/pages/RoomPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import NavBar from "./components/NavBar.js";
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>

        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/multiplayer" element={<MultiplayerPage />}></Route>
          <Route path="/practice" element={<PracticePage />}></Route>
          <Route path="/room" element={<RoomPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
