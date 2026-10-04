const myImage = document.querySelector("img");

myImage.onclick = function () {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/jinx.jpg") {
    myImage.setAttribute("src", "images/jinx1.jpg");
  } else {
    myImage.setAttribute("src", "images/jinx.jpg");
  }
};

const myButton = document.querySelector("button");

const myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");

  localStorage.setItem("name", myName);

  myHeading.textContent = "Let the madness begin, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");

  myHeading.textContent = "Let the madness begin, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
