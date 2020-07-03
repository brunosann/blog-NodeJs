const user = document.querySelector("#user");

const modalUser = (e) => {
  e.preventDefault();
  const modal = document.querySelector(".modal-user");
  modal.classList.toggle("active");
};

if (user) {
  user.addEventListener("click", modalUser);
}
