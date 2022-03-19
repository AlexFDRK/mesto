import { initialCards, validationData, templateStructure } from './initialdata.js';
import Section from './section.js';
import Card from './card.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Validator from './validate.js';
import UserInfo from './UserInfo.js';

const sectionElements = document.querySelector('.elements');

const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');

const aimName = document.querySelector('.profile__name');
const aimDescription = document.querySelector('.profile__description');

const popupProfile = document.querySelector('.popup_type_profile');
const frmProfile = popupProfile.querySelector('.form');

const popupAddCard = document.querySelector('.popup_type_card-add');
const frmAddCard = popupAddCard.querySelector('.form');

const formProfileValidator = new Validator(validationData, frmProfile);
formProfileValidator.enableValidation();

const formAddCardValidator = new Validator(validationData, frmAddCard);
formAddCardValidator.enableValidation();

{
  const popupProfile  = new PopupWithForm('.popup_type_profile', handleFormProfileSubmit);
  popupProfile.setEventListeners();

  const userInfo = new UserInfo({strName: aimName.textContent, strDescription: aimDescription.textContent});

  btnEdit.addEventListener('click', function(){
    popupProfile.open(userInfo);
  });

  const popupAddCard  = new PopupWithForm('.popup_type_card-add', handleFormAddCardSubmit);
  popupAddCard.setEventListeners();

  btnAdd.addEventListener('click', function(){
    popupAddCard.open();
  });

  const popupPictureCard = new PopupWithImage('.popup_type_picture');
  popupPictureCard.setEventListeners();

  const openPopupFunction = (obj) => {
    popupPictureCard.open(obj._image, obj._name);
  }

  function handleFormProfileSubmit(data){
    if (data.strName !== ''){
      aimName.textContent = data.strName;
    } 
    if (data.strDescription !==''){
      aimDescription.textContent = data.strDescription;
    }
    userInfo.setUserInfo({strName: aimName.textContent, strDescription: aimDescription.textContent})
  }
  
  function handleFormAddCardSubmit(data){
    const card = new Card({name: data.strName, link: data.strDescription}, 
      templateStructure, openPopupFunction);
    const cardElement = card.generateCard();
    sectionElements.prepend(cardElement);
   
    formAddCardValidator.disableSubmitButton();
  }

  const cardsList = new Section({
      data: initialCards,
      renderer: (cardItem)=>{
        const card = new Card(cardItem, 
            templateStructure, openPopupFunction);
        const cardElement = card.generateCard();
        cardsList.setItem(cardElement);
      }
    },
  sectionElements); 
  cardsList.rendererItems();
}