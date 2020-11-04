const API_KEY = "4c35529a1da572defcdd856989f93c44";

const requests = {
    fetchTrending: '/trending/all/weeek?api_key=${API_KEY}&language=en-us',
    fetchNetflixOriginals: '/discover/tv?api_key=${API_KEY}&with_networks=213',
    fetchTopRated:  '/movie/top_rated?api_key=${API_KEY}&language=en-US',
 fetchActionMovies:  '/discover/movie?api_key=${API_KEY}&with_genres=28',
 fetchComedyMovies:  '/discover/movie?api_key=${API_KEY}&with_genres=35',
 fetchHorrorMovies:  '/discover/movie?api_key=${API_KEY}&with_genres327' ,
fetchRomanceMovies:  '/discover/movie?api_key3D${API_KEY}&with_genres-10749',
 fetchDocumentaries:  '/discover/movie?api_key=${API_KEY}&with_genres-99',
}


export default requests