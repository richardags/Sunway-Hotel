import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const fetchHotels = async () => {
    const response = await axios.get(`${BASE_URL}/hotels`);
    return response.data;
};

export const fetchHotelById = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/hotels/${id}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            throw new Error("Hotel Not Found");
        }
        throw new Error("An error occurred while fetching the hotel details.");
    }
};