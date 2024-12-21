import React from "react";
import { Link } from "react-router-dom";

interface Room {
    roomType: string;
    amount: number;
}

interface HotelCardProps {
    id: number;
    name: string;
    location: string;
    rating: number;
    imageUrl: string;
    datesOfTravel: string[];
    boardBasis: string;
    rooms: Room[];
}

const HotelCard: React.FC<HotelCardProps> = ({
    id,
    name,
    location,
    rating,
    imageUrl,
    datesOfTravel,
    boardBasis,
    rooms,
}) => {
    return (
        <div className="hotel-card">
            <img src={imageUrl} alt={name} className="hotel-image" />
            <h3>{name}</h3>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Rating:</strong> {rating}</p>
            <p><strong>Available Dates:</strong> {datesOfTravel.join(", ")}</p>
            <p><strong>Board Basis:</strong> {boardBasis}</p>
            <p><strong>Rooms:</strong></p>
            <ul>
                {rooms.map((room, index) => (
                    <li key={index}>
                        {room.roomType} - {room.amount} available
                    </li>
                ))}
            </ul>
            <Link to={`/hotels/${id}`} className="details-link">
                View Details
            </Link>
        </div>
    );
};

export default HotelCard;