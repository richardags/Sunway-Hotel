import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HotelsPage from "./pages/HotelsPage";
import HotelDetailPage from "./pages/HotelDetailPage";
import "./styles/main.css";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Route for the Hotels List */}
                <Route path="/hotels" element={<HotelsPage />} />

                {/* Route for Hotel Details */}
                <Route path="/hotels/:id" element={<HotelDetailPage />} />

                {/* Redirect all unknown routes to the Hotels List */}
                <Route path="*" element={<Navigate to="/hotels" />} />
            </Routes>
        </Router>
    );
};

export default App;