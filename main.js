const APIaddress = `https://moviesmern.herokuapp.com/movies/`
async function addMovie() {
    const data = {
        movie: {
            image: imageInput.value,
            linkToMovie: linkToMovieInput.value,
            movieName: movieNameInput.value,
            rating: ratingInput.value,
            synopsis: synopsisInput.value,
        }
    }
    try {
        await fetch(`${APIaddress}saveMovie`,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    }
    catch (error) {
    }
} 

async function getMovieName() {
    try {
        return await fetch(`${APIaddress}movie/searchByName`)
            .then((response) =>
                response.json())
    } catch (error) {
    }
}
function printMovieName() {
    getMovieName()
        .then((result) => {
            result.data.forEach(item => {
                moviesList.innerHTML += `${item.movieName} ` + "<br>" + `<img src =${item.image}/>`
            });
        })
}
printMovieName()


async function deletMovie(movieId) {
    try {
        return await fetch(`${APIaddress}movie/${movieId}`,{method:`DELETE`})
        .then(res => res.json())
    } catch (error) {
        
    }    
    finally{

    }
}


