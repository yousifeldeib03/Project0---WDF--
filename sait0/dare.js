document.addEventListener("DOMContentLoaded", () => {
  const Button2 = document.getElementById("D");

  if (Button2) {
    Button2.onclick = () => {
      window.location.href = "index.html";
    };
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const Button1 = document.getElementById("X");

  if (Button1) {
    Button1.addEventListener("click", () => {
      window.location.href = "https://www.youtube.com/watch?v=7xALolZzhSM";
    });
  }
});
