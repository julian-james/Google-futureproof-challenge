const form = document.querySelector('form');


const fetchAllMovies = (e) => {
    console.log('hi');
    e.preventDefault();
    document.getElementById("logo").style.display = 'none';
    // fetch('server/data.js')
    //     .then( resp => resp.json() )
    //     .then(document.getElementById('text'));
    
    
};


form.addEventListener('submit', fetchAllMovies);

