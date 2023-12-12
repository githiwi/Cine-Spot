import {MovieData,Cinema,Movie} from "./component/models";

const MovieSchedules : MovieData = {

    "movies": [
    {
        "id":1,
        "title": "The Shawshank Redemption",
        "poster": "https://m.media-amazon.com/images/I/61JNdNKQyIL._AC_UF894,1000_QL80_.jpg",
        "cinemas": [
            {
                "name": "City Cinemas",
                "location": "123 Main St, Cityville",
                "showtimes": ["2023-12-10 15:00", "2023-12-10 18:00", "2023-12-10 21:00"]
            },
            {
                "name": "Mega Movies",
                "location": "456 Oak St, Townsville",
                "showtimes": ["2023-12-10 14:30", "2023-12-10 17:30", "2023-12-10 20:30"]
            },
            {
                "name": "Starplex Cinemas",
                "location": "789 Pine St, Villagetown",
                "showtimes": ["2023-12-10 13:45", "2023-12-10 16:45", "2023-12-10 19:45"]
            }
        ]
    },
    {
        "id":2,
        "title": "The Godfather",
        "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "cinemas": [
            {
                "name": "City Cinemas",
                "location": "123 Main St, Cityville",
                "showtimes": ["2023-12-10 14:00", "2023-12-10 17:00", "2023-12-10 20:00"]
            },
            {
                "name": "Mega Movies",
                "location": "456 Oak St, Townsville",
                "showtimes": ["2023-12-10 15:30", "2023-12-10 18:30", "2023-12-10 21:30"]
            }
        ]
    },
    {
        "id":3,
        "title": "Pulp Fiction",
        "poster": "https://c8.alamy.com/comp/EJWNYT/pulp-fiction-movie-poster-EJWNYT.jpg",
        "cinemas": [
            {
                "name": "Starplex Cinemas",
                "location": "789 Pine St, Villagetown",
                "showtimes": ["2023-12-10 12:30", "2023-12-10 15:30", "2023-12-10 18:30"]
            },
            {
                "name": "Mega Movies",
                "location": "456 Oak St, Townsville",
                "showtimes": ["2023-12-10 13:15", "2023-12-10 16:15", "2023-12-10 19:15"]
            }
        ]
    },
    {
        "id":4,
        "title": "The Dark Knight",
        "poster": "https://images4.alphacoders.com/573/57394.jpg",
        "cinemas": [
            {
                "name": "City Cinemas",
                "location": "123 Main St, Cityville",
                "showtimes": ["2023-12-10 13:45", "2023-12-10 16:45", "2023-12-10 19:45"]
            },
            {
                "name": "Starplex Cinemas",
                "location": "789 Pine St, Villagetown",
                "showtimes": ["2023-12-10 14:30", "2023-12-10 17:30", "2023-12-10 20:30"]
            }
        ]
    },
    {
        "id":5,
        "title": "Inception",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
        "cinemas": [
            {
                "name": "Mega Movies",
                "location": "456 Oak St, Townsville",
                "showtimes": ["2023-12-10 12:30", "2023-12-10 15:30", "2023-12-10 18:30"]
            },
            {
                "name": "Starplex Cinemas",
                "location": "789 Pine St, Villagetown",
                "showtimes": ["2023-12-10 13:15", "2023-12-10 16:15", "2023-12-10 19:15"]
            }
        ]
    }
]
}

export default MovieSchedules;