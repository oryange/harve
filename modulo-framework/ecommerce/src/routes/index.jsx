import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";

export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}
