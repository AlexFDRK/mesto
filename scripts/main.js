const btnEdit = document.querySelector('.profile__edit-button');
const btnClose = document.querySelector('.overlay__close');
const popup = document.querySelector('.popup');

const popupActive = 'popup_active';
const active = 'element__like_state_active';
const disabled = 'element__like_state_disabled';

let content = document.querySelector('.content');
let btnLike = document.querySelector('.element__like');

let formOverlay = document.querySelector('.overlay');
let formMyForm = document.querySelector('.form');
let strName = formMyForm.querySelector('.form__field_name');
let strDescription = formMyForm.querySelector('.form__field_description');
const btnSave = formOverlay.querySelector('.form__save-button');

let aimName = document.querySelector('.profile__name');
let aimDescription = document.querySelector('.profile__description');

btnEdit.addEventListener('click', function(){
    popup.classList.add(popupActive);
    strName.value = aimName.textContent;
    strDescription.value = aimDescription.textContent;
});

function popupClose(){
    popup.classList.remove(popupActive); 
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


formMyForm.addEventListener('submit', formSubmitHandler); 