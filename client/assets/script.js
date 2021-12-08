const form = document.querySelector('#form');


const getResults = async (genre) => {
    const response = await fetch(`http://localhost:3000/genres/${genre}`)
    const data = await response.json();
    console.log(data);
}

const fetchAllMovies = (e) => {
    console.log('hi');
    e.preventDefault();
    document.getElementById("homepage").style.display = 'none';
    document.getElementById("results").style.display = 'block';
    document.getElementById("stylesheet1").disabled = "disabled";
    document.getElementById("stylesheet2").disabled = undefined;
    const genre = e.target.gsearch.value;
    getResults(genre);
};


form.addEventListener('submit', fetchAllMovies);

