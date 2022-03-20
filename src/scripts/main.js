import { initialCards } from './initialdata.js';
import { validationData, templateStructure,
        sectionElements, btnEdit, btnAdd, aimName, aimDescription,
        frmProfile, frmAddCard } from './utils/constants.js';
import Section from './components/section.js';
import Card from './components/Card.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import Validator from './components/Validate.js';
import UserInfo from './components/UserInfo.js';

const formProfileValidator = new Validator(validationData, frmProfile);
formProfileValidator.enableValidation();

const formAddCardValidator = new Validator(validationData, frmAddCard);
formAddCardValidator.enableValidation();

{
  const popupProfile  = new PopupWithForm('.popup_type_profile', handleFormProfileSubmit);
  popupProfile.setEventListeners();

  const userInfo = new UserInfo({strName: aimName.textContent, strDescription: aimDescription.textContent});

  btnEdit.addEventListener('click', function(){
    popupProfile.setInputValues(userInfo);
    formProfileValidator.renewValidator();
    popupProfile.open();
  });

  const popupAddCard  = new PopupWithForm('.popup_type_card-add', handleFormAddCardSubmit);
  popupAddCard.setEventListeners();

  btnAdd.addEventListener('click', function(){
    formAddCardValidator.renewValidator();
    popupAddCard.open();
  });

  const popupPictureCard = new PopupWithImage('.popup_type_picture');
  popupPictureCard.setEventListeners();

  const openPopupFunction = (image, name) => {
    popupPictureCard.open(image, name);
  }

  function handleFormProfileSubmit(data){
    aimName.textContent = data.strName;
    aimDescription.textContent = data.strDescription;

    userInfo.setUserInfo({strName: aimName.textContent, strDescription: aimDescription.textContent})
  }

  function createCard(title, image){
    const card = new Card(title, image, 
      templateStructure, openPopupFunction);

    return card.generateCard();
  }

  const cardsList = new Section({
      data: initialCards,
      renderer: (cardItem)=>{
        const cardElement = createCard(cardItem.name, cardItem.link);
        cardsList.setItem(cardElement);
      }
    },
  sectionElements); 
  cardsList.rendererItems();

  function handleFormAddCardSubmit(data){
    const cardElement = createCard(data.strName, data.strDescription);

    cardsList.prepend(cardElement);
    formAddCardValidator.disableSubmitButton();
  }
}