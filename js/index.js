"Use strict";

const userName = document.querySelector(".items .userName");
const male = document.querySelector(".male");
const female = document.querySelector(".famale")
const button = document.querySelector("button")

let lastName = [ "Nare", "Alex", "Nune", "Ben", "Ani", "Mane", "David"];
let firstName = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers"];

button.addEventListener("click", () => {
    let randomName = Math.floor(Math.random() * lastName.length);
    let randomFirstName = Math.floor(Math.random() * firstName.length);
    userName.append(`${lastName[randomName]} ${firstName[randomFirstName]}, `);

    if (lastName[randomName] == "Nare") {
        female.append(`${lastName[randomName]}, `);
    }else if(lastName[randomName] == "Nune"){
        female.append(`${lastName[randomName]}, `);
    }else if(lastName[randomName] == "Ani"){
        female.append(`${lastName[randomName]}, `);
    }else if(lastName[randomName] == "Mane"){
        female.append(`${lastName[randomName]}, `);
    }else{
        male.append(`${lastName[randomName]}, `);
    }
});


