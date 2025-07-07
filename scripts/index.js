let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = popup.querySelector(".popup__close-button");
let formElement = document.querySelector(".popup__form");

let nameInput = document.querySelector("#name");
let jobInput = document.querySelector("#about");

let profileName = document.querySelector(".profile__name-text");
let profileDescription = document.querySelector(".profile__description");

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup();
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleProfileFormSubmit);
