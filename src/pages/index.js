import './index.css';
import { validationData, templateStructure, aimAvatarFrame,
        sectionElements, btnEdit, btnAdd, aimName, aimDescription, aimAvatar,
        frmProfile, frmAddCard, frmAddAvatar} from '../scripts/utils/constants.js';
import Section from '../scripts/components/Section.js';
import Card from '../scripts/components/Card.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithAlert from '../scripts/components/PopupWithAlert.js';
import FormValidator from '../scripts/components/FormValidator.js';
import UserInfo from '../scripts/components/UserInfo.js';
import API from '../scripts/components/Api.js';

let cardsList;

const api = new API(
  'https://mesto.nomoreparties.co/v1/cohort-38/',
  {
    'Accept': 'Application/json',
    'Content-Type': 'Application/json',
    'authorization': '1478eacc-254a-456a-9432-9f80e3ac7fe8'
  }
);

const formValidators = {}

const enableValidation = (validationData) => {
  const formList = Array.from(document.querySelectorAll(validationData.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationData, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationData);

{
  const popupAvatar = new PopupWithForm('.popup_type_avatar', handleFormAvatarSubmit);
  popupAvatar.setEventListeners();

  aimAvatarFrame.addEventListener('click', function(){
    popupAvatar.setInputValues(userInfo.getUserInfo());
    formValidators['avatarEditForm'].resetValidation();
    popupAvatar.open();
  });

  const popupProfile  = new PopupWithForm('.popup_type_profile', handleFormProfileSubmit);
  popupProfile.setEventListeners();

  const userInfo = new UserInfo(aimName, aimDescription, aimAvatar);

  btnEdit.addEventListener('click', function(){
    popupProfile.setInputValues(userInfo.getUserInfo());
    formValidators['MyForm'].resetValidation();
    popupProfile.open();
  });


  Promise.all([api.getUser(), api.getCard()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData);
    cardsList = new Section({
        data: cardsData,
        renderer: (cardItem)=>{
          const cardElement = createCard(cardItem);
          cardsList.setItem(cardElement);
        }
      },
      sectionElements); 
    cardsList.rendererItems();
  }).catch(err => {
    alert(err);
  });

  const popupAddCard  = new PopupWithForm('.popup_type_card-add', handleFormAddCardSubmit);
  popupAddCard.setEventListeners();

  btnAdd.addEventListener('click', function(){
    formValidators['addForm'].resetValidation();
    popupAddCard.open();
  });

  const popupPictureCard = new PopupWithImage('.popup_type_picture');
  popupPictureCard.setEventListeners();

  const openPopupFunction = (image, name) => {
    popupPictureCard.open(image, name);
  }

  function handleFormProfileSubmit(data){
    popupProfile.toggleButtonText();
    api.patchProfile({
      name: data.strName,
      about: data.strDescription
    }).then((data)=>{
      userInfo.setUserInfo(data);
    }).then(()=>{
      popupProfile.close();
    }).catch((err)=>{
      alert(err);
    }).finally(()=>{
      popupProfile.toggleButtonText();
    });
  }

  function handleLike(card) {
    if(card.isLiked()){
      api.dislike(card.getCardId()).then((data)=>{
        card.toggleLike(data.likes.length);
      }).catch((err)=>{
        alert(err);
      });
    } else {
      api.like(card.getCardId()).then((data)=>{
        card.toggleLike(data.likes.length);
      }).catch((err)=>{
        alert(err);
      });
    }
  }

  function createCard(data){
    const card = new Card(data, 
      templateStructure, openPopupFunction, openAlertFunction, userInfo.getUserId(), handleLike);

    return card.generateCard();
  }

  function handleFormAddCardSubmit(data){
    popupAddCard.toggleButtonText();
    api.postCard({
      name: data.strName,
      link: data.strDescription
    }).then((data)=>{
      const cardElement = createCard(data);
      cardsList.prepend(cardElement);
      popupAddCard.close();
    }).catch((err)=>{
      alert(err);
    }).finally(()=>{
      popupAddCard.toggleButtonText();
    });
  }

  const popupAlert = new PopupWithAlert('.popup_type_alert', handleDeleteCardSubmit);
  popupAlert.setEventListeners();

  const openAlertFunction = (obj) => {
    popupAlert.open(obj);
  }

  function handleDeleteCardSubmit(card){
    popupAlert.toggleButtonText();
    api.deleteCard(card.getCardId()).then(()=>{
      card.deleteElement();
      popupAlert.close();
    }).catch((err)=>{
      alert(err);
    }).finally(()=>{
      popupAlert.toggleButtonText();
    });
  }

  function handleFormAvatarSubmit(data){
    popupAvatar.toggleButtonText();
    api.patchAvatar({
      avatar:  data.strAvatar
    }).then((data)=>{
      userInfo.setUserInfo(data);
      popupAvatar.close();
    }).catch((err)=>{
      alert(err);
    }).finally(()=>{
      popupAvatar.toggleButtonText();
    });
  }  
}