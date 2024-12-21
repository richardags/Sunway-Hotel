using System.Text.Json.Serialization;

namespace HotelAPI.Models
{
    public class Room
    {
        [JsonPropertyName("roomType")]
        public string RoomType { get; set; }

        [JsonPropertyName("amount")]
        public int Amount { get; set; }
    }
}