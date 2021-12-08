const action = [
    {id:1, name:"Spider-Man: No Way Home", link:"https://www.imdb.com/title/tt10872600/"},
    {id:2, name:"The Last Duel", link:"https://www.imdb.com/title/tt4244994/"},
    {id:3, name:"Dune", link:"https://www.imdb.com/title/tt1160419/"},
    {id:4, name:"Red Notice", link:"https://www.imdb.com/title/tt7991608/"},
    {id:5, name:"The Matrix Resurrections", link:"https://www.imdb.com/title/tt10838180/"},
    {id:6, name:"Shang-Chi and the Legend of the Ten Rings", link:"https://www.imdb.com/title/tt9376612/"},
    {id:7, name:"No Time to Die", link:"https://www.imdb.com/title/tt2382320/"},
    {id:8, name:"Venom: Let There Be Carnage", link:"https://www.imdb.com/title/tt7097896/"},
    {id:9, name:"Resident Evil: Welcome to Raccoon City", link:"https://www.imdb.com/title/tt6920084/"},
    {id:10, name:"Eternals", link:"https://www.imdb.com/title/tt9032400/"}
];

const crime = [
    {id:1, name:"House of Gucci", link:"https://www.imdb.com/title/tt11214590/"},
    {id:2, name:"Red Notice", link:"https://www.imdb.com/title/tt7991608/"},
    {id:3, name:"Antim: The Final Truth", link:"https://www.imdb.com/title/tt13491110/"},
    {id:4, name:"West Side Story", link:"https://www.imdb.com/title/tt3581652/"},
    {id:5, name:"Nightmare Alley", link:"https://www.imdb.com/title/tt7740496/"},
    {id:6, name:"Jai Bhim", link:"https://www.imdb.com/title/tt15097216/"},
    {id:7, name:"Army of Thieves", link:"https://www.imdb.com/title/tt13024674/"},
    {id:8, name:"The King's Man", link:"https://www.imdb.com/title/tt6856242/"},
    {id:9, name:"The Batman", link:"https://www.imdb.com/title/tt1877830/"},
    {id:10, name:"Satyameva Jayate 2", link:"https://www.imdb.com/title/tt10739666/"},
];

const thriller = [
    {id:1, name:"The Last Duel", link:"https://www.imdb.com/title/tt4244994/"},
    {id:2, name:"Red Notice", link:"https://www.imdb.com/title/tt7991608/"},
    {id:3, name:"No Time to Die", link:"https://www.imdb.com/title/tt2382320/"},
    {id:4, name:"Venom: Let There Be Carnage", link:"https://www.imdb.com/title/tt7097896/"},
    {id:5, name:"Last Night in Soho", link:"https://www.imdb.com/title/tt9639470/"},
    {id:6, name:"Nightmare Alley", link:"https://www.imdb.com/title/tt7740496/"},
    {id:7, name:"Army of Thieves", link:"https://www.imdb.com/title/tt13024674/"},
    {id:8, name:"Pig", link:"https://www.imdb.com/title/tt11003218/"},
    {id:9, name:"The King's Man", link:"https://www.imdb.com/title/tt6856242/"},
    {id:10, name:"Die Hard", link:"https://www.imdb.com/title/tt0095016/"}
];

const sciFi = [
    {id:1, name:"Spider-Man: No Way Home", link:"https://www.imdb.com/title/tt10872600/"},
    {id:2, name:"Ghostbusters: Afterlife", link:"https://www.imdb.com/title/tt4513678/"},
    {id:3, name:"Dune", link:"https://www.imdb.com/title/tt1160419/"},
    {id:4, name:"The Matrix Resurrections", link:"https://www.imdb.com/title/tt10838180/"},
    {id:5, name:"Shang-Chi and the Legend of the Ten Rings", link:"https://www.imdb.com/title/tt9376612/"},
    {id:6, name:"Venom: Let There Be Carnage", link:"https://www.imdb.com/title/tt7097896/"},
    {id:7, name:"Resident Evil: Welcome to Raccoon City", link:"https://www.imdb.com/title/tt6920084/"},
    {id:8, name:"Eternals", link:"https://www.imdb.com/title/tt9032400/"},
    {id:9, name:"Free Guy", link:"https://www.imdb.com/title/tt6264654/"},
    {id:10, name:"Omicron", link:"https://www.imdb.com/title/tt0191326/"}
];

const comedy = [
    {id:1, name:"Ghostbusters: Afterlife", link:"https://www.imdb.com/title/tt4513678/"},
    {id:2, name:"Encanto", link:"https://www.imdb.com/title/tt2953050/"},
    {id:3, name:"Red Notice", link:"https://www.imdb.com/title/tt7991608/"},
    {id:4, name:"A Castle for Christmas", link:"https://www.imdb.com/title/tt13070602/"},
    {id:5, name:"Licorice Pizza", link:"https://www.imdb.com/title/tt11271038/"},
    {id:6, name:"National Lampoon's Christmas Vacation", link:"https://www.imdb.com/title/tt0097958/"},
    {id:7, name:"8-Bit Christmas", link:"https://www.imdb.com/title/tt11540284/"},
    {id:8, name:"Home Alone", link:"https://www.imdb.com/title/tt0099785/"},
    {id:9, name:"Free Guy", link:"https://www.imdb.com/title/tt6264654/"},
    {id:10, name:"Silent Night", link:"https://www.imdb.com/title/tt11628854/"}
];

const genre = [
    {id:1, name:"action", movies:action},
    {id:2, name:"crime", movies:crime},
    {id:3, name:"thriller", movies:thriller},
    {id:4, name:"sci-fi", movies:sciFi},
    {id:5, name:"comedy", movies:comedy}
]

module.exports = genre;