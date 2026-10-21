

async function getMovies() {
    try {
        const search = document.getElementById("search").value;
    
        const url = "http://www.omdbapi.com/?apikey=8b6c64db&s=" + search;

        const response = await fetch(url);
        const json = await response.json();
        
        const movieHolder = document.getElementById("movieHolder");

        for (movie of json.Search) {
            let divContainer = document.createElement('div');
            divContainer.classList.add("card");
            let img = document.createElement('img');
            img.src = movie.Poster;
            img.width = 100;

            let card = document.createElement('div');
            card.classList.add('container');
            let movieTitle = document.createElement("h3");
            movieTitle.textContent = movie.Title + ": " + movie.Year;

            card.appendChild(movieTitle);
            
            divContainer.appendChild(img);
            divContainer.appendChild(card);
            
            movieHolder.appendChild(divContainer);
        }

    }
    catch (error) {
        console.log(error)
    }
}