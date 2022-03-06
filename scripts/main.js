import { Card } from './card.js';
import { Validator } from './validate.js';

const sectionElements = document.querySelector('.elements');

const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');

const aimName = document.querySelector('.profile__name');
const aimDescription = document.querySelector('.profile__description');

const popupView = document.querySelector('.view-popup');
const popupImage = popupView.querySelector('.view__picture');
const strViewName = popupView.querySelector('.view__description');
const popupCloseButton = popupView.querySelector('.popup__close');

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

const popupOpened = 'popup_status_opened';

const popupProfile = document.querySelector('.profile-popup');
const profileName = popupProfile.querySelector('.form__field_text_name');
const profileDescription = popupProfile.querySelector('.form__field_text_description');
const btnProfileSave = popupProfile.querySelector('.form__button');

const popupAddCard = document.querySelector('.add-popup');
const strAddCardName = popupAddCard.querySelector('.form__field_text_name');
const strAddCardDescription = popupAddCard.querySelector('.form__field_text_description');
const btnCardCreate = popupAddCard.querySelector('.form__button');

function closeByEscape(evt){
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_status_opened');
    closePopup(openedPopup);
  }
}

function closePopup(popup) {
  popup.classList.remove(popupOpened);
  document.removeEventListener('keydown', closeByEscape);
}

function openPopup(popup) {
  popup.classList.add(popupOpened);
  document.addEventListener('keydown', closeByEscape);
  const openedPopup = document.querySelector('.popup_status_opened');
  openedPopup.querySelector('.popup__close').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close')) {
      closePopup(openedPopup);
    }
  });
  if (popup.classList.contains('profile-popup')){
    popup.addEventListener('submit', handleFormProfileSubmit);
  } else if (popup.classList.contains('add-popup')){
    popup.addEventListener('submit', handleFormAddCardSubmit);
  }
}

function handleFormProfileSubmit (event){
  event.preventDefault();
  if (profileName.value !== ''){
      aimName.textContent = profileName.value;
  } 
  if (profileDescription.value !==''){
      aimDescription.textContent = profileDescription.value;
  }
  closePopup(popupProfile);
}

function handleFormAddCardSubmit (event){
  event.preventDefault();
  
  const card = new Card({name: strAddCardName.value, link: strAddCardDescription.value}, '#element', popupCloseButton);
  const cardElement = card.generateCard();
  sectionElements.prepend(cardElement);
  strAddCardName.value = '';
  strAddCardDescription.value = '';
  btnCardCreate.classList.add(validationData.inactiveButtonClass);
  btnCardCreate.setAttribute('disabled', true);
  closePopup(popupAddCard);
}

btnEdit.addEventListener('click', function(){
  openPopup(popupProfile);
  profileName.value = aimName.textContent;
  profileDescription.value = aimDescription.textContent;
});

btnAdd.addEventListener('click', () => openPopup(popupAddCard));

//main()======================================================================
{
  initialCards.forEach((element) => {
    const card = new Card(element, '#element', popupCloseButton);
    const cardElement = card.generateCard();

    sectionElements.append(cardElement);
  });

  const formList = Array.from(document.querySelectorAll('.form'));

  const validationData = {
    inputSelector: '.form__field',
    submitButtonSelectorClass: '.form__button',
    inactiveButtonClass: 'form__button_status_inactive',
    inputErrorClass: 'form__field_type_error',
    errorClass: 'form__input-error_active'
  };

  formList.forEach((form) => {
    const formValidator = new Validator(
      validationData,
      form
    );

    formValidator.enableValidation();
  });
}