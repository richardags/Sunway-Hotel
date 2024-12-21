using HotelAPI.Services;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HotelAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HotelsController : ControllerBase
    {
        private readonly HotelService _hotelService;
        private readonly ILogger<HotelsController> _logger;

        public HotelsController(HotelService hotelService, ILogger<HotelsController> logger)
        {
            _hotelService = hotelService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetHotels()
        {
            try
            {
                var hotels = _hotelService.GetAllHotels();
                return Ok(hotels);
            }
            catch(Exception ex)
            {
                // Log the exception
                _logger.LogError(ex, "An error occurred while fetching the list of hotels.");

                // Return 500 Internal Server Error
                return StatusCode(500);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetHotelById(int id)
        {
            try
            {
                var hotel = _hotelService.GetHotelById(id);
                if (hotel == null)
                {
                    return NotFound(new { message = "Hotel not found" });
                }
                return Ok(hotel);
            }
            catch(Exception ex)
            {
                // Log the exception
                _logger.LogError(ex, "An error occurred while fetching hotel with ID {HotelId}", id);

                // Return 500 Internal Server Error
                return StatusCode(500);
            }            
        }
    }
}