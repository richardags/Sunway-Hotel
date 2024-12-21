import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import { fetchHotels } from "../services/hotelService";

const HotelList: React.FC = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchHotels()
            .then((data) => {
                if (data.length === 0) {
                    setError("No hotels available.");
                } else {
                    setHotels(data);
                }
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch hotels.");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="hotel-list">
            {hotels.map((hotel) => (
                <HotelCard key={hotel.id} {...hotel} />
            ))}
        </div>
    );
};

export default HotelList;