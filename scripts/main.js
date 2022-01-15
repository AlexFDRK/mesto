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

/*============================================================*/

const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');

const aimName = document.querySelector('.profile__name');
const aimDescription = document.querySelector('.profile__description');

const active = 'element__like_state_active';
const disabled = 'element__like_state_disabled';
const content = document.querySelector('.content');
const btnLike = document.querySelector('.element__like');

let activeOverlay;
let btnClose;
const popupActive = 'active';

const firstOverlay = document.querySelector('#first-overlay');
const strName = firstOverlay.querySelector('.form__field_text_name');
const strDescription = firstOverlay.querySelector('.form__field_text_description');
const btnSave = firstOverlay.querySelector('.form__save_frm_button');

const secondOverlay = document.querySelector('#second-overlay');
const strAddName = secondOverlay.querySelector('.form__field_text_name');
const strAddDescription = secondOverlay.querySelector('.form__field_text_description');
const btnCreate = secondOverlay.querySelector('.form__create_frm_button');

const imgViewPicture = document.querySelector('.view__picture');
const strViewName = document.querySelector('.view__picture-name');

function setActiveElements(selectorName){
  activeOverlay = document.querySelector(selectorName);
  activeOverlay.classList.add(popupActive);
  btnClose = activeOverlay.querySelector('.popup__close');
  btnClose.addEventListener('click', function(){
    popupClose();
  });
}

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
  cardElement.querySelector('.element__picture').addEventListener('click', function (event) {
    popup.classList.add(popupActive);
    setActiveElements('#third-overlay');
    imgViewPicture.src = event.target.src;
    strViewName.textContent = event.target.alt;
  });
  return cardElement;
}

initialCards.forEach(function (element) {
  sectionElements.append(addElement(element.name, element.link));
});

btnEdit.addEventListener('click', function(){
  popup.classList.add(popupActive);
  setActiveElements('#first-overlay');
  strName.value = aimName.textContent;
  strDescription.value = aimDescription.textContent;
});

btnAdd.addEventListener('click', function(){
    popup.classList.add(popupActive);
    setActiveElements('#second-overlay');
});

function popupClose(){
    popup.classList.remove(popupActive); 
    activeOverlay.classList.remove(popupActive);
}

document.addEventListener('keydown', function(event){
    if (event.key === 'Escape'){
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

firstOverlay.addEventListener('submit', formSubmitHandler);
secondOverlay.addEventListener('submit', formAddSubmitHandler);
