// Переопределение стилей при работающем js
var html = document.documentElement;
html.className = html.className.replace("no-js", "js")

// Попап формы входа
var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay")
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login")

// Открытие формы, установка фокуса в поле
link.addEventListener("click", function(vnt) {
  vnt.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

// валидация формы, сохранение логина в localStorage
form.addEventListener("submit", function(vnt) {
  if (!login.value || !password.value) {
    vnt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);

  }
});

// Закрытие по крестику
close.addEventListener("click", function(vnt) {
  vnt.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-overlay-show");
});

// Закрытие по esc
window.addEventListener("keydown", function(vnt) {
  if (vnt.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});

// Закрытие по клику вне формы
overlay.addEventListener("click", function(vnt) {
  vnt.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-overlay-show");
});



// Попап карты


var mapPopup = document.querySelector(".modal-content-map");
var mapOverlay = document.querySelector(".modal-overlay")
var mapClose = mapPopup.querySelector(".modal-content-close");
var openMapButtons = document.querySelectorAll('.js-open-map');

for (var i = 0; i < openMapButtons.length; i++) {
openMapButtons[i].addEventListener('click', function(vnt) {
  vnt.preventDefault();
  mapPopup.classList.toggle("modal-content-map-show");
  mapOverlay.classList.toggle("modal-overlay-show");
})
};


mapClose.addEventListener("click", function(vnt) {
  vnt.preventDefault();
  mapPopup.classList.remove("modal-content-map-show");
  mapOverlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(vnt) {
  if (vnt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-map-show")) {
      mapPopup.classList.remove("modal-content-map-show");
      mapOverlay.classList.remove("modal-overlay-show");
    }
  }
});


mapOverlay.addEventListener("click", function(vnt) {
  vnt.preventDefault();
  mapPopup.classList.remove("modal-content-map-show");
  mapOverlay.classList.remove("modal-overlay-show");
});



