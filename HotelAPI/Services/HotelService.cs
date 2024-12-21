using HotelAPI.Models;
using System.Text.Json;

namespace HotelAPI.Services
{
    public class HotelService
    {
        private readonly string _filePath;

        public HotelService(string rootPath)
        {
            _filePath = Path.Combine(rootPath, "Data", "hotels.json");
        }

        public List<Hotel> GetAllHotels()
        {
            var json = File.ReadAllText(_filePath);
            return JsonSerializer.Deserialize<List<Hotel>>(json);
        }

        public Hotel GetHotelById(int id)
        {
            var hotels = GetAllHotels();
            return hotels.FirstOrDefault(h => h.Id == id);
        }
    }
}