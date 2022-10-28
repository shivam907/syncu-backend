const data = document.querySelectorAll(".animate");
console.log(data);
data.forEach((i) => {
  i.classList.remove("inv");
  setTimeout((i.textContent = "a"), 5000);
});
