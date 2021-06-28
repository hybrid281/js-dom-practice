document.getElementById("demo").innerHTML = "<h1>Mic check, one two, one two!</h1>";
const button = document.querySelector("#button-one");

button.addEventListener("click", function (){
    const newDiv = document.createElement('div');
    document.body.append(newDiv);
    goat()
});

const goat = function () {
    const newImg = document.createElement("img");
    newImg.src = "img/goat_unsplash.jpg";
    document.body.append(newImg);
};


const myFunction = function () {
    var paragraph = document.createElement("p");
    paragraph.innerHTML = `This a <b>test paragraph</b> to allow practicing with adding new elements from Javascript to HTML.`;
    document.body.append(paragraph);
};

