import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHotelById } from "../services/hotelService";

const HotelDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Extract the ID from the URL
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (id) {
            fetchHotelById(Number(id))
                .then((data) => {
                    setHotel(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return hotel ? (
        <div className="hotel-detail">
            <h1>{hotel.name}</h1>
            <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />
            <p><strong>Location:</strong> {hotel.location}</p>
            <p><strong>Rating:</strong> {hotel.rating}</p>
            <p><strong>Available Dates:</strong> {hotel.datesOfTravel.join(", ")}</p>
            <p><strong>Board Basis:</strong> {hotel.boardBasis}</p>
            <p><strong>Rooms:</strong></p>
            <ul>
                {hotel.rooms.map((room, index) => (
                    <li key={index}>
                        {room.roomType} - {room.amount} available
                    </li>
                ))}
            </ul>
        </div>
    ) : null;
};

export default HotelDetailPage;