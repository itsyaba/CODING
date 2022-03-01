
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnOpenModel = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnOpenModel.length; i++)
  btnOpenModel[i].addEventListener("click", function () {
    console.log("Btn Clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

  });

const closeModel = function () {
   modal.classList.add("hidden");
   overlay.classList.add("hidden");
}
btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
 
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    classModal();
  }
})