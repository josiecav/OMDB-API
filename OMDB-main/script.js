

async function getMovies() {
    try {
        const search = document.getElementById("search").value;
        const url = "http://www.omdbapi.com/?i=tt3896198&apikey=8b6c64db" + search;
     
        const headers = new Headers ();
        headers.append("Accept", "application/json");

        const response = await fetch(url, {headers:headers});
        const json = await response.json();
        
        const movieHolder = document.getElementById("movieHolder");

        for (movie of json.Search) {
            //  Create a div to hold each image and title 
            //  Give the div the css class of CARD


            // Create an image element
            //      point it to the image from this movie            


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