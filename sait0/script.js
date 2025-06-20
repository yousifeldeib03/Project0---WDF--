document.addEventListener("DOMContentLoaded", () => {
  const myImage = document.getElementById("myImage");
  const firstImage = "matt.jpg";
  const secondImage = "Friends.png";

  function toggleImageSrc(currentSrc) {
    return currentSrc.includes("matt.jpg") ? secondImage : firstImage;
  }

  if (myImage) {
    myImage.addEventListener("click", () => {
      const currentSrc = myImage.src;
      console.log("Current Image Src: ", currentSrc);
      myImage.src = toggleImageSrc(currentSrc);
      console.log("New Image Src: ", myImage.src);
    });
  }
});
window.onload = function () {
  document.getElementById("B").addEventListener("click", function () {
    window.location.href = "dare.html";
  });
};
function makeWelcomeHeading(name) {
  return `Hi,Mr. ${name}`;
}
const myHeading = document.querySelector("h1");
function storeName(name) {
  localStorage.setItem("name", name);
}

function getStoredName() {
  return localStorage.getItem("name");
}

const myButton = document.getElementById("A");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    storeName(myName);
    if (myHeading) {
      myHeading.textContent = makeWelcomeHeading(myName);
    }
  }
}
if (myHeading) {
  if (!getStoredName()) {
    setUserName();
  } else {
    myHeading.textContent = makeWelcomeHeading(getStoredName());
  }
}
if (myButton) {
  myButton.addEventListener("click", setUserName);
}
