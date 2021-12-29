const btnEdit = document.querySelector('.profile__edit-button');
const btnClose = document.querySelector('.popup__close');
const overlay = document.querySelector('.overlay');
const overlayActive = 'overlay_active';
const active = 'element__like_state_active';
const disabled = 'element__like_state_disabled';

let content = document.querySelector('.content');
let btnLike = document.querySelector('.element__like');

let formPopup = document.querySelector('.popup');
let strName = formPopup.querySelector('.popup__name');
let strDescription = formPopup.querySelector('.popup__description');
const btnSave = formPopup.querySelector('.popup__save-button');
let aimName = document.querySelector('.profile__name');
let aimDescription = document.querySelector('.profile__description');

btnEdit.addEventListener('click', function(){
    overlay.classList.add(overlayActive);
});

function popupClose(){
    overlay.classList.remove(overlayActive); 
}

btnClose.addEventListener('click', function(){
    popupClose();
});

document.addEventListener('keydown', function(event){
    if (event.сode === 'Escape'){
        popupClose();
    }
});

content.addEventListener('click', function(event){
    if (event.target.classList.contains('element__like')){
        event.target.classList.toggle('element__like_state_active');
    }
});

function formSubmitHandler (event){
    event.preventDefault();
    if (strName.value !== ''){
        aimName.textContent = strName.value;
    } 
    if (strDescription.value !==''){
        aimDescription.textContent = strDescription.value;
    }
    popupClose();
}

formPopup.addEventListener('submit', formSubmitHandler); 