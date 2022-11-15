const container = document.getElementById("container");

//1) step: Add a red paragraph
const pRed = document.createElement("p");
pRed.style.color = "red";
pRed.textContent = "Hey I'm red!";
container.appendChild(pRed);

//2) step: Add a blue heading size 3
const h3Blue = document.createElement("h3");
h3Blue.style.color = "blue";
h3Blue.textContent = "I'm a blue h3!";
container.appendChild(h3Blue);

//3) step: Ad a div with a h1 and a p
const divElem = document.createElement("div");
divElem.setAttribute(
  "style",
  "background-color: pink;border: 1px black solid;"
);

divElH1 = document.createElement("h1");
divElH1.textContent = "I'm in a div!";
divElem.appendChild(divElH1);

divElP = document.createElement("p");
divElP.textContent = "ME TOO!";
divElem.appendChild(divElP);

container.appendChild(divElem);
