

async function getMovies() {
    try {
        const search = document.getElementById("search").value;
        const url = "http://www.omdbapi.com/?apikey=[8b6c64db]&s=" + search;
     
        const headers = new Headers ();
        headers.append("Accept", "application/json");

        const response = await fetch(url, {headers:headers});
        const json = await response.json();
        
        const movieHolder = document.getElementById("movieHolder");

        for (movie of json.Search) {
            let divContainer = document.createElement('div');
            divContainer.classList.add("card");

            let img = document.createElement('img');
            img.src = movie.Poster;
            img.width = 100;
            
            movieHolder.appendChild(img);

            divContainer.src = movie.Title;
            divContainer.src = movie.Year;

            card.appendChild(divContainer);

            // Create a CONTAINER div to hold the title and year.
            // Give the CONTAINER div the style of container

            // Add the CONTAINER to the CARD
            // Add all the elements to the movieHolder element
        }


    }
    catch (error) {
        console.log(error)
    }
}