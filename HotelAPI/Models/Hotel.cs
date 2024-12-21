using System.Text.Json.Serialization;

namespace HotelAPI.Models
{
    public class Hotel
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("location")]
        public string Location { get; set; }

        [JsonPropertyName("rating")]
        public double Rating { get; set; }

        [JsonPropertyName("imageUrl")]
        public string ImageUrl { get; set; }

        [JsonPropertyName("datesOfTravel")]
        public List<string> DatesOfTravel { get; set; }

        [JsonPropertyName("boardBasis")]
        public string BoardBasis { get; set; }

        [JsonPropertyName("rooms")]
        public List<Room> Rooms { get; set; }
    }
}