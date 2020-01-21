/* 
Your job is to sign each of these promising young music stars to the appropriate label.

JumpStop Records works with Funk and Rap artists.
Chatten Records works with Country and Bluegrass artists.
Polar Records works with Pop artists.
Create an array for each of these record labels.

Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

Bruce Atikins is a Country artist and is 23 years old
Jensen Brown is a Pop artist and is 20 years old
Dre Funkz is a Funk artist and is 25 years old
Dusta Grimes is a Rap artist and is 21 years old
Bartholomew Danielson is a Bluegrass artist and is 23 years old
Avilee Dallas is a Country artist and is 19 years old
Austin Kinkaid is a Pop artist and is 22 years old
Loyoncé Branis is a Rap artist and is 27 years old
*/

let jumpStop = [];
let chatten = [];
let polar = [];

const createFunkArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    };
};

const createRapArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    };
};

const createCountryArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    };
};

const createBluegrassArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    };
};

const createPopArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    };
};





chatten.push(createCountryArtist("Bruce Atikins","country", 23));

polar.push(createPopArtist("Jensen Brown", "pop",  20));

jumpStop.push(createFunkArtist("Dre Funkz", "funk", 25));

jumpStop.push(createRapArtist("Dusta Grimes", "rap", 21));

chatten.push(createBluegrassArtist("Bartholomew Danielson", "bluegrass", 23));

chatten.push(createCountryArtist("Avilee Dallas", "country", 19));

polar.push(createPopArtist("Austin Kinkaid", "pop", 22));

jumpStop.push(createRapArtist("Loyoncé Branis", "rap", 27));

console.log("JumpStop", jumpStop, "Polar", polar, "Chatten", chatten);

polar.forEach(artist => {
    console.log(`${artist.name} is a ${artist.genre} artist and is ${artist.age} years old`);
});

chatten.forEach(artist => {
    console.log(`${artist.name} is a ${artist.genre} artist and is ${artist.age} years old`);
});

jumpStop.forEach(artist => {
    console.log(`${artist.name} is a ${artist.genre} artist and is ${artist.age} years old`);
});

