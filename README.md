Hotel Management Application
============================

Hotel Management Application is a full-stack web application for managing hotel information.

Features
--------

### HotelAPI (Backend)

*   Provides RESTful API with the following endpoints:
    *   `GET /api/hotels`: Retrieve a list of hotels.
    *   `GET /api/hotels/{id}`: Retrieve details of a specific hotel.
*   Handles errors gracefully with appropriate HTTP status codes.

### hotelspa (Frontend)

*   Displays a list of hotels with details such as:
    *   Name, location, rating, image, dates of travel, board basis, and room details.
*   Allows users to view more details about a specific hotel.
*   Fully responsive design.

Prerequisites
-------------

Before running the project, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (v20.5.1 or higher)
*   [npm](https://www.npmjs.com/) (comes with Node.js)
*   [.NET SDK](https://dotnet.microsoft.com/download/dotnet) (v9.0 or higher)

Installation
------------

### Clone the Repository
```bash
git clone https://github.com/richardags/Sunway-Hotel.git cd Sunway-Hotel
```

### Backend Setup

1.  Navigate to the `HotelAPI` folder:
```bash
    cd HotelAPI
```
2.  Run the API:
```bash
    dotnet run
```  
3.  The API will be available at `http://localhost:5000`.

### Frontend Setup

1.  Navigate to the `hotelspa` folder:
```bash
    cd hotelspa
```  
2.  Start the application:
```bash
    dotnet run
```
3.  The frontend will be available at `http://localhost:5050`.

API Endpoints
-------------

### `GET /api/hotels`

Fetches a list of hotels.

Example response:

```json
[   {     "id": 1,     "name": "Seaside Paradise",     "location": "Maldives",     "rating": 4.9,     "imageUrl": "https://example.com/images/seaside-paradise.jpg",     "datesOfTravel": ["2024-01-01", "2024-01-07"],     "boardBasis": "All Inclusive",     "rooms": [       { "roomType": "Deluxe Suite", "amount": 5 },       { "roomType": "Family Room", "amount": 3 }     ]   } ]
```

### `GET /api/hotels/{id}`

Fetches details of a specific hotel.

Example response:

```json
{   "id": 1,   "name": "Seaside Paradise",   "location": "Maldives",   "rating": 4.9,   "imageUrl": "https://example.com/images/seaside-paradise.jpg",   "datesOfTravel": ["2024-01-01", "2024-01-07"],   "boardBasis": "All Inclusive",   "rooms": [     { "roomType": "Deluxe Suite", "amount": 5 },     { "roomType": "Family Room", "amount": 3 }   ] }
```

Error response:

```json
{   "message": "Hotel not found",   "statusCode": 404 }
```

Running the Application
-----------------------

1.  Start the backend API using Visual Studio or `dotnet run`.
2.  Start the React frontend using `dotnet run`.
3.  Open your browser and navigate to `http://localhost:5050`.

Contributing
------------

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

License
-------

[MIT](https://choosealicense.com/licenses/mit/)
