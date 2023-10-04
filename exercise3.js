let people = ["Greg", "Mary", "Devon", "james"];

// 1
for(let i =0; i< people.length; i++){
    console.log(people[i]);
}


//2
people.forEach(function(person){
    console.log(person);
});

// 3



people.shift();
console.log(people);

// 4

people.pop();
console.log(people);

// 5

people.unshift("Matt");
console.log(people);

// 6

people.push("Magen Tengker");
console.log(people);

// 7

for(let i =0; i< people.length; i++){
    console.log(people[i]);
    if (people[i] == "Marry"){
        break;
    }
}

// 8

let people2 = people.slice(2)
console.log(people2)


// 9
people =["Matt","Marry","Devon","james"]
people.splice(2,1, "Elizabeth" , "Artie")
console.log(people);

//10
 let withBob = people.concat("bob");
 console.log(withBob);

 let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}

// 1

programming.languages.push("Go");

// 2

programming.difficulty = 7;

// 3

delete programming.jokes;

// 4

programming.isFun = true;

// 5

for (let i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);
}

// or 

for (let language of programming.languages) {
    console.log(language);
}

// 6

for (let key in programming){
    console.log(key);
}

// 7

for (let key in programming){
    console.log(programming[key]);
}