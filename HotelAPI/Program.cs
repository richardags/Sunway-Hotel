using HotelAPI.Services;

namespace HotelAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();

            // Add CORS Services
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigins", policy =>
                {
                    policy.WithOrigins("http://localhost:60000")
                          .AllowAnyMethod()
                          .AllowAnyHeader();
                });
            });

            // Register the HotelService with the JSON file path.
            builder.Services.AddSingleton<HotelService>(
                provider => new HotelService(builder.Environment.ContentRootPath));

            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseHttpsRedirection();
            app.UseCors("AllowSpecificOrigins");
            app.UseAuthorization();
            app.MapControllers();
            app.Run();
        }
    }
}