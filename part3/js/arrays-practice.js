
var movies = ["Avengers", "The Devil Wears Prada", "The Intern", "The Texas Chainsaw Massacre", "Kabhi Khushi Kabhie Gham"];
window.console.log(movies[1]);



var movies = [];
movies[0] = "Avengers";
movies[1] = "The Devil Wears Prada";
movies[2] = "The Intern";
movies[3] = "The Texas Chainsaw Massacre";
movies[4] = "Kabhi Khushi Kabhie Gham";
window.console.log(movies[0]);




var movies = ["Avengers", "The Devil Wears Prada", "The Intern", "The Texas Chainsaw Massacre", "Kabhi Khushi Kabhie Gham"];
movies[movies.length] = "The 36th Chamber of Shaolin";
window.console.log(movies.length);




var movies = [];
movies[0] = "Avengers";
movies[1] = "The Devil Wears Prada";
movies[2] = "The Intern";
movies[3] = "The Texas Chainsaw Massacre";
movies[4] = "Kabhi Khushi Kabhie Gham";
delete movies[0];
window.console.log(movies);



var movies = [];
movies[0] = "Avengers";
movies[1] = "The Devil Wears Prada";
movies[2] = "The Intern";
movies[3] = "The Texas Chainsaw Massacre";
movies[4] = "Kabhi Khushi Kabhie Gham";
movies[5] = "The 36th Chamber of Shaolin";
movies[6] = "Mean Girls";

var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}



var movies = [];
movies[0] = "Avengers";
movies[1] = "The Devil Wears Prada";
movies[2] = "The Intern";
movies[3] = "The Texas Chainsaw Massacre";
movies[4] = "Kabhi Khushi Kabhie Gham";
movies[5] = "The 36th Chamber of Shaolin";
movies[6] = "Mean Girls";

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}



var movies = [];
movies[0] = "Avengers";
movies[1] = "The Devil Wears Prada";
movies[2] = "The Intern";
movies[3] = "The Texas Chainsaw Massacre";
movies[4] = "Kabhi Khushi Kabhie Gham";
movies[5] = "The 36th Chamber of Shaolin";
movies[6] = "Mean Girls";
movies.sort();

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}


var movies = [];
movies[0] = "Avengers";
movies[1] = "The Devil Wears Prada";
movies[2] = "The Intern";
movies[3] = "The Texas Chainsaw Massacre";
movies[4] = "Kabhi Khushi Kabhie Gham";
movies[5] = "The 36th Chamber of Shaolin";
movies[6] = "Mean Girls";

window.console.log("Movies I like:\n\n");
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

var leastFavMovies = [];
leastFavMovies[0] = "Mean Girls 2";
leastFavMovies[1] = "Pitch Perfect";
leastFavMovies[2] = "Jaws";

window.console.log("\n\nMovies I regret watching:\n\n");
var element;
for (element in leastFavMovies) {
    if (leastFavMovies.hasOwnProperty(element)) {
        window.console.log(leastFavMovies[element]);
    }
}



var movies = [];
movies[0] = "Avengers";
movies[1] = "The Devil Wears Prada";
movies[2] = "The Intern";
movies[3] = "The Texas Chainsaw Massacre";
movies[4] = "Kabhi Khushi Kabhie Gham";
movies[5] = "The 36th Chamber of Shaolin";
movies[6] = "Mean Girls";

var leastFavMovies = [];
leastFavMovies[0] = "Mean Girls 2";
leastFavMovies[1] = "Pitch Perfect";
leastFavMovies[2] = "Jaws";

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}



var movies = [];
movies[0] = "Avengers";
movies[1] = "The Devil Wears Prada";
movies[2] = "The Intern";
movies[3] = "The Texas Chainsaw Massacre";
movies[4] = "Kabhi Khushi Kabhie Gham";
movies[5] = "The 36th Chamber of Shaolin";
movies[6] = "Mean Girls";

var leastFavMovies = [];
leastFavMovies[0] = "Mean Girls 2";
leastFavMovies[1] = "Pitch Perfect";
leastFavMovies[2] = "Jaws";

movies = movies.concat(leastFavMovies);
window.console.log(movies.pop());
s