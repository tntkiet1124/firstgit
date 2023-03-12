let left_angle = document.getElementById("left_angle");
let right_angle = document.getElementById("right_angle");

let card_1 = document.getElementById("card_1");
let card_4 = document.getElementById("card_4");

right_angle.onclick = function () {
    console.log("abc");
    if (card_4.classList.contains("hide")) {
        card_4.classList.remove("hide");
        card_1.classList.add("hide");
        left_angle.classList.remove("hide");
        right_angle.classList.add("hide");
    }
};

left_angle.onclick = function () {
    if (card_1.classList.contains("hide")) {
        card_1.classList.remove("hide");
        card_4.classList.add("hide");
        left_angle.classList.add("hide");
        right_angle.classList.remove("hide");
    }
};

let name = document.getElementById("name");
let job = document.getElementById("job");
let description = document.getElementById("description");
let img = document.getElementById("avatar");
let left_button = document.getElementById("left_button");
let right_button = document.getElementById("right_button");
let link = document.getElementById("link");
let info = [
    {
        name: "Dilma Rousseff",
        job: "President",
        description: " Dilma Rousseff, in full Dilma Vana Rousseff, Brazilian politician who in 2011 became Brazil's first female president.",
        URL: "./imgcard/dilma.jpg",
        link: "./Dilma Vana Rousseff.html",
    },

    {
        name: "Jeanette Jo Epps",
        job: "Astronaut",
        description: "Jeanette Jo Epps is an American aerospace engineer and NASA astronaut.",
        URL: "./imgcard/female astronaut.jpg",
        link: "./Jeanette Jo Epps.html",
    },
        
    {
        name: "Alexia Putellas",
        job: "Football Player",
        description: "Alexia Putellas Segura is a Spanish professional footballer who plays for Barcelona, and the Spain national team.",
        URL: "./imgcard/alexia putellas.jpg",
        link: "./Alexia Putellas.html",
    },
];

let i = 0;

right_button.onclick = function () {
    i++;
    if (i >= info.length) {
        i = 0;
    }
    name.innerHTML = info[i].name;
    job.innerHTML = info[i].job;
    description.innerHTML = info[i].description;
    img.src = info[i].URL;
    link.href = info[i].link;
}

left_button.onclick = function () {
    i--;
    if (i < 0) {
        i = info.length - 1;
    }
    name.innerHTML = info[i].name;
    job.innerHTML = info[i].job;
    description.innerHTML = info[i].description;
    img.src = info[i].URL;
    link.href = info[i].link;
}

let opening_3 = document.getElementById("OPENING-3");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let down_angle = document.getElementById("down_angle");
card1.style.display = "none";
card2.style.display = "none";
card3.style.display = "none";
down_angle.onclick = function () {
    if ( opening_3.style.display = "flex") {
        card1.style.display = "flex";
        card2.style.display = "flex";
        card3.style.display = "flex";
    } 
}

let scroll_btn = document.getElementById("scroll-btn");
scroll_btn.onclick = function () {
    window.scrollTo(0,0);
}