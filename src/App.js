// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Assets/css/style.css';
import Home from './Pages/Home';
import ToDo from "./Pages/ToDoapp";
import Calculator from "./Pages/Calculator"
import ClickCounter from "./Pages/ClickCounter"
import InnerPageHeader from './Components/InnerPageHeader';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/to-do" element={<><InnerPageHeader /> <ToDo /></>} />
                <Route path="/calculator" element={<> <InnerPageHeader /><Calculator /></>} />
                <Route path="/click-counter" element={<> <InnerPageHeader /><ClickCounter /></>} />
                <Route path="/ecommerce" element={<><InnerPageHeader /> <ToDo /></>} />
                <Route path="/Weather-app" element={<><InnerPageHeader /> <ToDo /></>} />
                <Route path="/quiz-app" element={<><InnerPageHeader /> <ToDo /></>} />
                <Route path="/contact" element={<><InnerPageHeader /> <ToDo /></>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
