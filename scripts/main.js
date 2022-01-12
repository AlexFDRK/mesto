const elementTemplate = document.querySelector('#element').content;
const sectionElements = document.querySelector('.elements');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function addElement(name, link){
    const cardElement = elementTemplate.cloneNode(true);
  
    cardElement.querySelector('.element__picture').src = link;
    cardElement.querySelector('.element__picture').alt = name;
    cardElement.querySelector('.element__name').textContent = name;
    cardElement.querySelector('.element__like').addEventListener('click', function (event) {
      event.target.classList.toggle('element__like_state_active');
    });
    cardElement.querySelector('.element__bin').addEventListener('click', function (event) {
      const elementItem = event.target.closest('.element');
      elementItem.remove();
    });
    return cardElement;
}

initialCards.forEach(function (element) {
    sectionElements.append(addElement(element.name, element.link));
});

/*============================================================*/

const btnClose = document.querySelector('.popup__close');
const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const popupActive = 'popup_active';
const formActive = 'form__active';

const active = 'element__like_state_active';
const disabled = 'element__like_state_disabled';

let content = document.querySelector('.content');
let btnLike = document.querySelector('.element__like');

let formMyForm = document.querySelector('.my-form');
let strName = formMyForm.querySelector('.form__field_text_name');
let strDescription = formMyForm.querySelector('.form__field_text_description');
const btnSave = formMyForm.querySelector('.form__save_frm_button');

let formAddForm = document.querySelector('.add-form');
let strAddName = formAddForm.querySelector('.form__field_text_name');
let strAddDescription = formAddForm.querySelector('.form__field_text_description');
const btnCreate = formAddForm.querySelector('.form__create_frm_button');

let aimName = document.querySelector('.profile__name');
let aimDescription = document.querySelector('.profile__description');

btnEdit.addEventListener('click', function(){
    popup.classList.add(popupActive);
    formMyForm.classList.add(formActive);
    strName.value = aimName.textContent;
    strDescription.value = aimDescription.textContent;
});

btnAdd.addEventListener('click', function(){
    popup.classList.add(popupActive);
    formAddForm.classList.add(formActive);
});

function popupClose(){
    popup.classList.remove(popupActive); 
    formMyForm.classList.remove(formActive);
    formAddForm.classList.remove(formActive);
}

btnClose.addEventListener('click', function(){
    popupClose();
});

document.addEventListener('keydown', function(event){
    if (event.сode === 'Escape'){
        popupClose();
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

function formAddSubmitHandler (event){
    event.preventDefault();
    const theFirstChild = sectionElements.firstChild;
    sectionElements.insertBefore(addElement(strAddName.value, strAddDescription.value), 
                                                                            theFirstChild);
   
    popupClose();
}

formMyForm.addEventListener('submit', formSubmitHandler);
formAddForm.addEventListener('submit', formAddSubmitHandler);
