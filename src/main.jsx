import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import PlayerContextProvider from './contact/PlayerContext';
createRoot(document.getElementById("root")).render(
 
    <BrowserRouter>
     <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
    </BrowserRouter>
  
);

