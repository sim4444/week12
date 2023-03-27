const buttonRef = document.querySelector("button");
let counter = 0;
function alertUser() {
  //   counter++;
  alert("you clicked");
  //   if (counter === 1) {
  //     buttonRef.removeEventListener("click", alertUser);
  //   }
}
buttonRef.addEventListener("click", alertUser, { once: true });

function changeBGPink() {
  // document.body.style.background = 'pink'
  document.body.classList.toggle("pinkBG");
}
buttonRef.addEventListener("click", changeBGPink);

function changeText() {
  if (buttonRef.textContent === "i m clicked") {
    document.body.classList.add("pinkBG");
    buttonRef.style.backgroundColor = "majenta";
    buttonRef.style.color = "majenta";
  }
  // else if(buttonRef.textContent='Yay u clicked'){
  //     document.body.style.backgroundColor ='violet'
  //     buttonRef.style.backgroundColor = 'yellow'
  // }
  else {
    document.body.style.backgroundColor = "violet";
    buttonRef.style.backgroundColor = "blue";
  }
  // if the text says i am clicked -> change to "click me"
  buttonRef.textContent = "i am clicked";
}

buttonRef.addEventListener("click", changeText);

//---------------------------------------

function updateImage(event) {
  console.log(event);
  const image = document.querySelector("#shoppingCart");
  image.setAttribute("src", "images/image1.png");
  image.setAttribute("alt", "click here on image");
  image.setAttribute("width", 50);
  image.setAttribute("height", 50);
}
buttonRef.addEventListener("click", updateImage);

//-------------------
const buttonContainer = document.querySelector(".button-container");
function BGcolor(event) {
  console.log("clicked")
  if (event.target.tagName === "BUTTON") {
    event.target.classList.add("greenBG");
    if (event.target.textContent === "red") {
      event.target.classList.add("red");
    }
  }

  // document.body.style.background = 'pink'
  // document.body.classList.toggle("pinkBG")
}
// buttonContainer.addEventListener("click", BGcolor);
buttonContainer.addEventListener("mouseover", BGcolor);
// buttonContainer.addEventListener("click", BGcolor);
