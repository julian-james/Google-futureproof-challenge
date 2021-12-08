const form = document.querySelector('#form');
const feelingLucky = document.querySelector('#feeling-lucky');


const getResults = async (genre) => {
    const response = await fetch(`http://localhost:3000/genres/${genre}`);
    const data = await response.json();
    for (let i = 0; i < 10; i++) {
        document.getElementById(`movie${i+1}`).textContent = data[i].name;
        document.getElementById(`url${i+1}`).textContent = data[i].link;
        document.getElementById(`link${i+1}`).href = data[i].link;
    }
}

const fetchAllMovies = (e) => {
    e.preventDefault();
    document.getElementById("homepage").style.display = 'none';
    document.getElementById("results").style.display = 'block';
    document.getElementById("stylesheet1").disabled = "disabled";
    document.getElementById("stylesheet2").disabled = undefined;
    const genre = e.target.gsearch.value;
    getResults(genre);
};


form.addEventListener('submit', fetchAllMovies);


const getRandomMovie = async () => {
    const response = await fetch(`http://localhost:3000/genres`);
    const data = await response.json();
    const rand1 = Math.floor(Math.random() * 5);
    const rand2 = Math.floor(Math.random() * 10);
    const movieLink = data[rand1].movies[rand2].link;
    window.open(movieLink, "_self");
    // console.log('hellooooo')
}

feelingLucky.addEventListener('click', getRandomMovie);


