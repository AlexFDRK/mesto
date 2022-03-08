import { initialCards, validationData } from './initialdata.js';
import { Card } from './card.js';
import { Validator } from './validate.js';

const sectionElements = document.querySelector('.elements');

const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');

const aimName = document.querySelector('.profile__name');
const aimDescription = document.querySelector('.profile__description');

const popupView = document.querySelector('.popup_type_picture');
const cardTemplate = getTemplate('#element');

const popupScructure = {
  popupView: popupView,
  popupImage: popupView.querySelector('.view__picture'),
  strViewName: popupView.querySelector('.view__description'),
  popupCloseButton: popupView.querySelector('.popup__close')
};

const popupOpened = 'popup_status_opened';

const popupProfile = document.querySelector('.popup_type_profile');
const frmProfile = popupProfile.querySelector('.form');
const profileName = popupProfile.querySelector('.form__field_text_name');
const profileDescription = popupProfile.querySelector('.form__field_text_description');
const btnProfileClose = popupProfile.querySelector('.popup__close');
const btnProfileSave = popupProfile.querySelector('.form__button');

const popupAddCard = document.querySelector('.popup_type_card-add');
const frmAddCard = popupAddCard.querySelector('.form');
const strAddCardName = popupAddCard.querySelector('.form__field_text_name');
const strAddCardDescription = popupAddCard.querySelector('.form__field_text_description');
const btnCardClose = popupAddCard.querySelector('.popup__close');
const btnCardCreate = popupAddCard.querySelector('.form__button');

const popupPictureCard = document.querySelector('.popup_type_picture');
const btnPictureClose = popupPictureCard.querySelector('.popup__close');

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

function createCard(data){
  const card = new Card(data, cardTemplate, popupScructure, openPopup);

  return card.generateCard();
}

function handleFormAddCardSubmit (event){
  event.preventDefault();
  sectionElements.prepend(createCard({name: strAddCardName.value, link: strAddCardDescription.value}));
  strAddCardName.value = '';
  strAddCardDescription.value = '';
 
  closePopup(popupAddCard);
}

function setCloseEventListener(evt){
  if (evt.target.classList.contains('popup__close')) {
    const openedPopup = document.querySelector('.popup_status_opened');
    closePopup(openedPopup);
  }
}

function getTemplate(cardSelector){
  const cardElement = document
      .querySelector(cardSelector)
      .content
      .querySelector('.element');

    return cardElement;
}

{
  btnEdit.addEventListener('click', function(){
    openPopup(popupProfile);
    profileName.value = aimName.textContent;
    profileDescription.value = aimDescription.textContent;
  });

  btnAdd.addEventListener('click', () => openPopup(popupAddCard));

  btnProfileClose.addEventListener('click', (evt) => {
    setCloseEventListener(evt);
  });

  btnCardClose.addEventListener('click', (evt) => {
    setCloseEventListener(evt);
  });

  btnPictureClose.addEventListener('click', (evt) => {
    setCloseEventListener(evt);
  });

  popupProfile.addEventListener('submit', handleFormProfileSubmit);
  popupAddCard.addEventListener('submit', handleFormAddCardSubmit);

  initialCards.forEach((element) => {
    sectionElements.append(createCard(element));
  });

  const formProfileValidator = new Validator(validationData, frmProfile);
  formProfileValidator.enableValidation();

  const formAddCardValidator = new Validator(validationData, frmAddCard);
  formAddCardValidator.enableValidation();
}